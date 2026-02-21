// ============================================================
//  firebase.js
// ============================================================

import { initializeApp }                                              from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, signOut }               from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

// ============================================================
//  CONFIG
// ============================================================

const firebaseConfig = {
    apiKey:            "AIzaSyDApb9UTE-GlAfbebwdMnBcTSuUfiuCWgs",
    authDomain:        "darkelitus-xyz.firebaseapp.com",
    projectId:         "darkelitus-xyz",
    storageBucket:     "darkelitus-xyz.firebasestorage.app",
    messagingSenderId: "750731997913",
    appId:             "1:750731997913:web:c6e0a4baea15c486df44c8"
};

const ADMIN_EMAIL        = "admin@darkelitus.xyz";
const CLOUDINARY_CLOUD   = "dqkkechss";
const CLOUDINARY_PRESETS = { score: "scores_upload", project: "projects_upload" };

// ============================================================
//  INIT
// ============================================================

const app  = initializeApp(firebaseConfig);
const db   = getFirestore(app);
const auth = getAuth(app);
let currentUser = null;
auth.onAuthStateChanged(u => { currentUser = u; });

// ============================================================
//  AUTH
// ============================================================

async function login(password) {
    const cred = await signInWithEmailAndPassword(auth, ADMIN_EMAIL, password);
    currentUser = cred.user;
}

async function logout() {
    await signOut(auth);
    currentUser = null;
}

// ============================================================
//  CLOUDINARY
// ============================================================

async function uploadToCloudinary(file, type) {
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", CLOUDINARY_PRESETS[type]);
    const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method: "POST", body: form });
    if (!res.ok) throw new Error("Cloudinary upload failed");
    return (await res.json()).secure_url;
}

// ============================================================
//  FIRESTORE
// ============================================================

async function loadCollection(name) {
    const snap = await getDocs(query(collection(db, name), orderBy("createdAt", "desc")));
    const out  = [];
    snap.forEach(doc => out.push({ id: doc.id, ...doc.data() }));
    return out;
}

// ============================================================
//  CACHE — pre-fetched on page load so tabs feel instant
// ============================================================

let _cachedScores   = null;
let _cachedProjects = null;

async function prefetchAll() {
    try { _cachedScores   = await loadCollection("scores");   } catch (e) { console.warn("prefetch scores failed", e); }
    try { _cachedProjects = await loadCollection("projects"); } catch (e) { console.warn("prefetch projects failed", e); }
}

// ============================================================
//  RENDER
// ============================================================

function renderScores(items) {
    if (!items.length) return '<p class="empty-note">No scores yet.</p>';
    return items.map(d => `
        <div class="score-card">
            <img class="score-img" src="${d.imageUrl}" alt="${d.game} screenshot" />
            <h4>${d.game}</h4>
            <p>${d.score}</p>
        </div>`).join("");
}

function renderProjects(items) {
    if (!items.length) return '<p class="empty-note">No projects yet.</p>';
    return items.map(d => `
        <div class="project-card">
            <img src="${d.imageUrl}" alt="${d.title}" />
            <h4>${d.title}</h4>
            <p>${d.description}</p>
        </div>`).join("");
}

// ============================================================
//  POPULATE
// ============================================================

async function populateScores() {
    const grid = document.getElementById("scores-grid");
    if (!grid) return;

    // Use cache if available, otherwise fetch
    const items = _cachedScores !== null ? _cachedScores : await loadCollection("scores");
    _cachedScores = null; // clear so next manual refresh re-fetches

    grid.innerHTML = renderScores(items);

    grid.querySelectorAll(".score-img").forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            const viewer = document.getElementById("viewer");
            if (!viewer) return;
            viewer.querySelector("img").src = img.src;
            viewer.querySelector("img").alt = img.alt;
            viewer.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });
}

async function populateProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const items = _cachedProjects !== null ? _cachedProjects : await loadCollection("projects");
    _cachedProjects = null;

    grid.innerHTML = renderProjects(items);
}

// ============================================================
//  WATCH PANEL
// ============================================================

function watchPanel() {
    const panel = document.getElementById("panel");
    if (!panel) return;

    let lastSection = "";
    let busy = false;

    const observer = new MutationObserver(() => {
        if (busy) return;
        const header = panel.querySelector(".panel-header h3");
        if (!header) return;
        const section = header.textContent.trim().toLowerCase();
        if (section === lastSection) return;
        lastSection = section;

        if (section === "scores") {
            const grid = panel.querySelector(".scores-grid");
            if (!grid) return;
            if (!grid.id) grid.id = "scores-grid";
            busy = true;
            populateScores().finally(() => { busy = false; });
        } else if (section === "projects") {
            const grid = panel.querySelector(".projects-grid");
            if (!grid) return;
            if (!grid.id) grid.id = "projects-grid";
            busy = true;
            populateProjects().finally(() => { busy = false; });
        }
    });

    observer.observe(panel, { childList: true, subtree: true });
}

// ============================================================
//  WAIT FOR MODAL — one-shot observer
// ============================================================

function waitForModal() {
    const existing = document.getElementById("card-modal");
    if (existing) { patchModal(existing); return; }

    const observer = new MutationObserver((_, obs) => {
        const modal = document.getElementById("card-modal");
        if (modal) { obs.disconnect(); patchModal(modal); }
    });
    observer.observe(document.body, { childList: true });
}

// ============================================================
//  PATCH MODAL
// ============================================================

function patchModal(modal) {
    if (modal.dataset.fbPatched) return;
    modal.dataset.fbPatched = "true";

    const passStep = modal.querySelector('.modal-body[data-step="password"]');
    if (passStep) {
        passStep.innerHTML = `
            <div><strong>Enter password</strong></div>
            <input type="password" id="fb-password" placeholder="Password" autocomplete="current-password" />
            <p id="fb-auth-error" style="color:#f88;font-size:12px;min-height:16px;margin:4px 0 0;"></p>
            <div class="modal-actions">
                <button id="modal-cancel">Cancel</button>
                <button id="modal-next" class="primary">Unlock</button>
            </div>`;

        passStep.querySelector("#modal-cancel").addEventListener("click", closeModalFn);

        const unlockBtn = passStep.querySelector("#modal-next");
        const pwInput   = passStep.querySelector("#fb-password");
        const errEl     = passStep.querySelector("#fb-auth-error");

        const doUnlock = async () => {
            errEl.textContent     = "";
            unlockBtn.disabled    = true;
            unlockBtn.textContent = "Checking...";
            try {
                await login(pwInput.value);
                buildForm(modal.dataset.type, modal);
                showModalStep("form");
            } catch {
                errEl.textContent = "❌ Wrong password.";
            } finally {
                unlockBtn.disabled    = false;
                unlockBtn.textContent = "Unlock";
            }
        };

        unlockBtn.addEventListener("click", doUnlock);
        pwInput.addEventListener("keydown", e => { if (e.key === "Enter") doUnlock(); });
    }

    const sendStep = modal.querySelector('.modal-body[data-step="sendpass"]');
    if (sendStep) {
        sendStep.innerHTML = `
            <div><strong>Confirm upload</strong></div>
            <p style="font-size:13px;color:var(--text-muted);">Ready to upload and save?</p>
            <p id="modal-status" style="font-size:12px;min-height:16px;margin:4px 0 0;"></p>
            <div class="modal-actions">
                <button id="modal-cancel2">Cancel</button>
                <button id="modal-confirm" class="primary">Upload & Save</button>
            </div>`;

        sendStep.querySelector("#modal-cancel2").addEventListener("click", closeModalFn);
        sendStep.querySelector("#modal-confirm").addEventListener("click", handleConfirm);
    }
}

// ============================================================
//  HANDLE CONFIRM
// ============================================================

async function handleConfirm() {
    const modal      = document.getElementById("card-modal");
    const status     = document.getElementById("modal-status");
    const confirmBtn = document.getElementById("modal-confirm");
    if (!modal || !status || !confirmBtn) return;

    const type = modal.dataset.type;
    const file = modal._imageFile;

    if (!currentUser) { status.style.color = "#f88"; status.textContent = "❌ Not logged in."; return; }
    if (!file)         { status.style.color = "#f88"; status.textContent = "Please attach an image."; return; }

    const data = {};
    modal.querySelectorAll("#form-content [data-key]").forEach(el => data[el.dataset.key] = el.value.trim());

    if (type === "score"   && (!data.game  || !data.score))       { status.style.color = "#f88"; status.textContent = "Fill in game name and score.";   return; }
    if (type === "project" && (!data.title || !data.description)) { status.style.color = "#f88"; status.textContent = "Fill in title and description."; return; }

    confirmBtn.disabled = true;
    status.style.color  = "#aaa";
    status.textContent  = "Uploading image...";

    try {
        const imageUrl = await uploadToCloudinary(file, type);
        const docData  = { imageUrl, createdAt: new Date() };
        if (type === "score")   { docData.game = data.game; docData.score = data.score; }
        else                    { docData.title = data.title; docData.description = data.description; }
        await addDoc(collection(db, type === "score" ? "scores" : "projects"), docData);

        status.style.color = "#4f4";
        status.textContent = "✅ Saved!";
        await logout();

        // Force a fresh fetch after saving
        _cachedScores   = null;
        _cachedProjects = null;

        setTimeout(() => {
            closeModalFn();
            if (type === "score") populateScores();
            else                  populateProjects();
        }, 800);
    } catch (err) {
        console.error(err);
        status.style.color  = "#f88";
        status.textContent  = "❌ Error: " + err.message;
        confirmBtn.disabled = false;
    }
}

// ============================================================
//  CLOSE MODAL
// ============================================================

function closeModalFn() {
    const modal = document.getElementById("card-modal");
    if (!modal) return;
    modal.style.display     = "none";
    modal.dataset.fbPatched = "";
    modal._imageFile        = null;
    modal.querySelectorAll("input, textarea").forEach(i => i.value = "");
    logout().catch(() => {});
}

// ============================================================
//  BUILD FORM
// ============================================================

function buildForm(type, modal) {
    const container = modal.querySelector("#form-content");
    const imageFields = `
        <label>Screenshot</label>
        <input type="file" id="image-file" accept="image/*" />
        <div class="paste-hint">Or paste an image here:</div>
        <div id="paste-zone" class="paste-zone" contenteditable="true"></div>
        <div class="image-preview-wrapper">
            <img id="image-preview" style="display:none;max-width:100%;border-radius:6px;margin-top:8px;" />
        </div>`;

    container.innerHTML = type === "score" ? `
        ${imageFields}
        <label>Game Name</label>
        <input type="text" data-key="game" placeholder="e.g. CHUNITHM" />
        <label>Score / Rating</label>
        <input type="text" data-key="score" placeholder="e.g. SSS+ 99.50%" />
    ` : `
        ${imageFields}
        <label>Title</label>
        <input type="text" data-key="title" placeholder="Project name" />
        <label>Description</label>
        <textarea rows="3" data-key="description" maxlength="300" placeholder="Short description..."></textarea>
    `;

    const preview = container.querySelector("#image-preview");
    const setFile = f => {
        if (!f) return;
        modal._imageFile = f;
        const r = new FileReader();
        r.onload = () => { preview.src = r.result; preview.style.display = ""; };
        r.readAsDataURL(f);
    };

    container.querySelector("#image-file").addEventListener("change", e => setFile(e.target.files?.[0]));
    container.querySelector("#paste-zone").addEventListener("paste", e => {
        for (const it of (e.clipboardData?.items || [])) {
            if (it.type.startsWith("image/")) { setFile(it.getAsFile()); e.preventDefault(); return; }
        }
    });
}

// ============================================================
//  SHOW MODAL STEP
// ============================================================

function showModalStep(step) {
    const modal = document.getElementById("card-modal");
    if (!modal) return;
    modal.querySelectorAll(".modal-body").forEach(b => b.style.display = "none");
    const el = modal.querySelector(`.modal-body[data-step="${step}"]`);
    if (el) el.style.display = "";
}

// ============================================================
//  START
// ============================================================

watchPanel();
waitForModal();

// Pre-fetch both collections in background on page load
prefetchAll();
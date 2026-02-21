            const templates = {
                about: `
                    <div class="panel-header"><h3>about</h3></div>
                    <p>Hey, I'm <strong>dark</strong> — I spend my free time playing rhythm games, coding for fun, and streaming whenever I get the chance.</p>
                    <p>When im not, I'm either online on discord chilling, watching anime or player some random game.</p>
                    <p class="commission"><em>Profile picture commissioned by <strong><a href="https://discord.com/users/932357743120101496" class="credit-link" target="_blank" rel="noopener noreferrer">avugtr</a></strong>. Please go check her out!</em></p>
                `,
                links: `
                    <div class="panel-header"><h3>links</h3></div>
                    <ul class="link-buttons">
                        <li>
                            <a href="https://twitch.tv/darkelitus" class="link-btn twitch" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>
                                Twitch
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/darkelitus" class="link-btn twitter" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                Twitter / X
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@darkelitus" class="link-btn youtube" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                YouTube
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/VGkTVRsqN7" class="link-btn discord" target="_blank" rel="noopener noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                                Discord
                            </a>
                        </li>
                    </ul>
                `,
                    // Example project card structure:
                    // <div class="project-card">
                    //     <img src="./images/project1.png" alt="Project 1">
                    //     <h4>Project One</h4>
                    //     <p>A tiny rhythm tool for score tracking.</p>
                    // </div>
                projects: `
                    <div class="panel-header"><h3>projects</h3>
                        <div class="add-card" data-type="project" title="Add project">
                            <button class="add-card-button">+</button>
                        </div>
                    </div>
                    <div class="projects-grid">
                    </div>
                `,
                        // Example score card structure:
                        // <div class="score-card">
                        //     <img class="score-img" src="https://placehold.co/640x440" alt="CHUNITHM score 1">
                        //     <h4>CHUNITHM</h4>
                        //     <p>Excellent SSS — 99.50%</p>
                        // </div>
                scores: `
                    <div class="panel-header"><h3>scores</h3>
                        <div class="add-card" data-type="score" title="Add score">
                            <button class="add-card-button">+</button>
                        </div>
                    </div>
                    <div class="scores-grid">
                    </div>
                `,
            };

// Note: authentication is handled by `Javascript/firebase.js` when present.

            const panel = document.getElementById('panel');
            const buttons = document.querySelectorAll('.buttons-content button');
            let current = 'about';
            let animating = false;
            let pendingKey = null;
            let currentEndHandler = null;
            let transitionTimer = null;
            const measuredHeights = {};
            let heightAnimation = null;

            function setActiveButton(key) {
                buttons.forEach(btn => {
                    btn.classList.toggle('active', btn.dataset.section === key);
                });
            }

            function measureHeightFor(key) {
                // Return cached measured height when available
                if (measuredHeights[key]) return measuredHeights[key];

                const temp = document.createElement('div');
                temp.style.position = 'absolute';
                temp.style.visibility = 'hidden';
                temp.style.width = panel.clientWidth + 'px';
                temp.innerHTML = templates[key];
                document.body.appendChild(temp);
                const h = temp.scrollHeight;
                document.body.removeChild(temp);
                return h;
            }

            // Pre-measure all templates so we know target heights before transitions.
            // Renders each template offscreen, waits for images (with timeout), and caches heights.
            async function premeasureTemplates() {
                const keys = Object.keys(templates);
                for (const key of keys) {
                    try {
                        const temp = document.createElement('div');
                        temp.style.position = 'absolute';
                        temp.style.visibility = 'hidden';
                        temp.style.pointerEvents = 'none';
                        temp.style.left = '-9999px';
                        temp.style.width = panel.clientWidth + 'px';
                        temp.innerHTML = templates[key];
                        document.body.appendChild(temp);

                        const imgs = Array.from(temp.querySelectorAll('img'));
                        const imgsToLoad = imgs.filter(i => !i.complete);
                        if (imgsToLoad.length > 0) {
                            const loaders = imgsToLoad.map(img => new Promise(r => {
                                img.addEventListener('load', r, { once: true });
                                img.addEventListener('error', r, { once: true });
                            }));
                            await Promise.race([Promise.all(loaders), new Promise(r => setTimeout(r, 500))]);
                        }

                        measuredHeights[key] = temp.scrollHeight;
                        document.body.removeChild(temp);
                    } catch (err) {
                        // ignore and continue
                    }
                }
            }

            // Start pre-measuring as soon as possible so animations can use cached values
            premeasureTemplates().catch(() => {});

            // Initialize panel content from templates so everything comes from JS
            try {
                const innerInit = panel.querySelector('.panel-inner');
                if (innerInit) {
                    innerInit.innerHTML = templates['about'];
                    innerInit.classList.remove('hidden');
                    setActiveButton('about');
                    current = 'about';
                }
            } catch (e) {}

            function finishTransition(key, inner) {
                if (transitionTimer) { clearTimeout(transitionTimer); transitionTimer = null; }
                if (currentEndHandler) {
                    panel.removeEventListener('transitionend', currentEndHandler);
                    currentEndHandler = null;
                }
                // We'll animate the panel to the pre-measured template height first,
                // then insert the new content and fade it in so the content doesn't
                // influence layout prematurely.
                const targetMeasured = measuredHeights[key] || measureHeightFor(key);
                const computed = parseFloat(getComputedStyle(panel).height) || panel.getBoundingClientRect().height;

                // If heights are approximately equal, just swap content and fade in.
                if (Math.abs(targetMeasured - computed) < 1) {
                    inner.innerHTML = templates[key];
                    inner.classList.remove('hidden');
                    panel.style.height = 'auto';
                    current = key;
                    animating = false;
                    setActiveButton(key);
                    // initialize interactive elements
                    initializeAddButtons();
                    initializeScores();
                } else {
                    // Animate panel from current height to the measured target using JS
                    if (heightAnimation) { cancelAnimationFrame(heightAnimation.frame); heightAnimation = null; }
                    const from = computed;
                    const to = targetMeasured;
                    const duration = 360;
                    const start = performance.now();
                    function step(now) {
                        const t = Math.min(1, (now - start) / duration);
                        const eased = 1 - Math.pow(1 - t, 3);
                        panel.style.height = (from + (to - from) * eased) + 'px';
                        if (t < 1) {
                            heightAnimation.frame = requestAnimationFrame(step);
                        } else {
                            heightAnimation = null;
                            // After panel reaches final size, insert content and fade it in
                            inner.innerHTML = templates[key];
                            // ensure hidden -> then trigger fade
                            inner.classList.add('hidden');
                            // Allow layout to settle, then fade in
                            requestAnimationFrame(() => {
                                inner.classList.remove('hidden');
                                // init interactive elements after content is visible
                                initializeAddButtons();
                                initializeScores();
                            });
                            panel.style.height = 'auto';
                            current = key;
                            animating = false;
                            setActiveButton(key);
                        }
                    }
                    heightAnimation = { frame: requestAnimationFrame(step) };
                }

                // initialize interactive elements for the shown section
                if (key === 'scores') initializeScores();

                if (pendingKey && pendingKey !== current) {
                    const pk = pendingKey;
                    pendingKey = null;
                    requestAnimationFrame(() => showSection(pk));
                } else {
                    pendingKey = null;
                }
            }

            function showSection(key) {
                if (key === current && !animating) return;
                if (animating) { pendingKey = key; return; }

                animating = true;
                const inner = panel.querySelector('.panel-inner');
                const startHeight = panel.getBoundingClientRect().height;
                const targetHeight = measureHeightFor(key);

                panel.style.height = startHeight + 'px';
                inner.classList.add('hidden');

                    // Animate height via JS (requestAnimationFrame) for reliable smoothness
                    if (heightAnimation) { cancelAnimationFrame(heightAnimation.frame); heightAnimation = null; }
                    const from = startHeight;
                    const to = targetHeight;
                    const duration = 320;
                    const start = performance.now();
                    function step(now) {
                        const t = Math.min(1, (now - start) / duration);
                        const eased = 1 - Math.pow(1 - t, 3);
                        panel.style.height = (from + (to - from) * eased) + 'px';
                        if (t < 1) {
                            heightAnimation.frame = requestAnimationFrame(step);
                        } else {
                            heightAnimation = null;
                            // After animation finishes, finalize
                            finishTransition(key, inner);
                        }
                    }
                    heightAnimation = { frame: requestAnimationFrame(step) };
            }

            buttons.forEach(btn => {
                btn.addEventListener('click', () => showSection(btn.dataset.section));
            });

            // --- Fullscreen viewer for score images ---
            function openViewer(src, alt) {
                let viewer = document.getElementById('viewer');
                if (!viewer) return;
                const img = viewer.querySelector('img');
                img.src = src;
                img.alt = alt || '';
                viewer.classList.add('open');
                document.body.style.overflow = 'hidden';
            }

            function closeViewer() {
                const viewer = document.getElementById('viewer');
                if (!viewer) return;
                viewer.classList.remove('open');
                const img = viewer.querySelector('img');
                img.src = '';
                document.body.style.overflow = '';
            }

            function initializeScores() {
                const imgs = panel.querySelectorAll('.score-img');
                imgs.forEach(img => {
                    img.style.cursor = 'zoom-in';
                    img.addEventListener('click', () => openViewer(img.src, img.alt));
                });
            }

            function initializeAddButtons() {
                const addBtns = panel.querySelectorAll('.add-card-button');
                addBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const tile = e.currentTarget.closest('.add-card');
                        const type = tile && tile.dataset.type ? tile.dataset.type : 'project';
                        openAddModal(type);
                    });
                });
            }

            function initializeCloseButtons() {
                const closes = panel.querySelectorAll('.panel-close');
                closes.forEach(btn => {
                    btn.addEventListener('click', () => {
                        // Return to about tab when close clicked
                        if (current !== 'about') showSection('about');
                    });
                });
            }

            // Modal logic
            function openAddModal(type) {
                let modal = document.getElementById('card-modal');
                if (!modal) {
                    modal = document.createElement('div');
                    modal.id = 'card-modal';
                    modal.className = 'card-modal';
                    modal.innerHTML = `
                        <div class="modal-box">
                            <div class="modal-body" data-step="password">
                                <div><strong>Admin password</strong></div>
                                <input type="password" id="admin-pass" placeholder="Admin password" />
                                <div class="modal-actions">
                                    <button id="modal-cancel">Cancel</button>
                                    <button id="modal-next" class="primary">Unlock</button>
                                </div>
                            </div>
                            <div class="modal-body" data-step="form" style="display:none">
                                <div id="form-content"></div>
                                <div class="modal-actions">
                                    <button id="modal-back">Back</button>
                                    <button id="modal-send" class="primary">Send</button>
                                </div>
                            </div>
                            <div class="modal-body" data-step="sendpass" style="display:none">
                                <div><strong>Send password</strong></div>
                                <input type="password" id="send-pass" placeholder="Send password" />
                                <div class="modal-actions">
                                    <button id="modal-cancel2">Cancel</button>
                                    <button id="modal-confirm" class="primary">Confirm</button>
                                </div>
                            </div>
                        </div>`;
                    document.body.appendChild(modal);

                    modal.querySelector('#modal-cancel').addEventListener('click', closeAddModal);
                    modal.querySelector('#modal-cancel2').addEventListener('click', closeAddModal);
                    modal.querySelector('#modal-back').addEventListener('click', () => showModalStep('password'));
                }
                modal.dataset.type = type;
                showModalStep('password');
                modal.style.display = 'grid';

                // modal behavior (password/submit) will be handled by firebase.js when available
                const next = modal.querySelector('#modal-next');
                if (next) next.onclick = null;
                const sendBtn = modal.querySelector('#modal-send');
                if (sendBtn) sendBtn.onclick = () => showModalStep('sendpass');
                const confirmBtn = modal.querySelector('#modal-confirm');
                if (confirmBtn) confirmBtn.onclick = null;
            }

            function showModalStep(step) {
                const modal = document.getElementById('card-modal');
                if (!modal) return;
                modal.querySelectorAll('.modal-body').forEach(b => b.style.display = 'none');
                const el = modal.querySelector(`.modal-body[data-step="${step}"]`);
                if (el) el.style.display = '';
            }

            function closeAddModal() {
                const modal = document.getElementById('card-modal');
                if (!modal) return;
                modal.style.display = 'none';
                modal.querySelectorAll('input').forEach(i => i.value = '');
            }

            function buildForm(type) {
                const modal = document.getElementById('card-modal');
                const container = modal.querySelector('#form-content');
                container.innerHTML = '';
                if (type === 'project') {
                    container.innerHTML = `
                        <label>Image (attach or paste)</label>
                        <input type="file" id="image-file" accept="image/*" />
                        <div class="paste-hint">Or paste an image into the box below:</div>
                        <div id="paste-zone" class="paste-zone" contenteditable="true"></div>
                        <div class="image-preview-wrapper"><img id="image-preview" style="display:none; max-width:100%; border-radius:6px; margin-top:8px;" /></div>
                        <input type="hidden" data-key="image" id="image-data" />
                        <label>Title</label>
                        <input type="text" data-key="title" />
                        <label>Description (max 50 words)</label>
                        <textarea rows="3" data-key="description" maxlength="300"></textarea>
                    `;
                    // attach handlers for file input and paste
                    const fileInput = container.querySelector('#image-file');
                    const pasteZone = container.querySelector('#paste-zone');
                    const preview = container.querySelector('#image-preview');
                    fileInput.addEventListener('change', (e) => {
                        const f = e.target.files && e.target.files[0];
                        if (!f) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                            modal.dataset.imageData = reader.result;
                            const hidden = container.querySelector('#image-data');
                            if (hidden) hidden.value = reader.result;
                            preview.src = reader.result;
                            preview.style.display = '';
                        };
                        reader.readAsDataURL(f);
                    });
                    pasteZone.addEventListener('paste', (e) => {
                        const items = (e.clipboardData || window.clipboardData).items || [];
                        for (const it of items) {
                            if (it.type && it.type.indexOf('image') !== -1) {
                                const blob = it.getAsFile();
                                const reader = new FileReader();
                                reader.onload = () => {
                                    modal.dataset.imageData = reader.result;
                                    const hidden = container.querySelector('#image-data');
                                    if (hidden) hidden.value = reader.result;
                                    preview.src = reader.result;
                                    preview.style.display = '';
                                };
                                reader.readAsDataURL(blob);
                                e.preventDefault();
                                return;
                            }
                        }
                    });
                } else {
                    container.innerHTML = `
                        <label>Image (attach or paste)</label>
                        <input type="file" id="image-file" accept="image/*" />
                        <div class="paste-hint">Or paste an image into the box below:</div>
                        <div id="paste-zone" class="paste-zone" contenteditable="true"></div>
                        <div class="image-preview-wrapper"><img id="image-preview" style="display:none; max-width:100%; border-radius:6px; margin-top:8px;" /></div>
                        <input type="hidden" data-key="image" id="image-data" />
                        <label>Game Name</label>
                        <input type="text" data-key="game" />
                        <label>Game Score</label>
                        <input type="text" data-key="score" />
                    `;
                    const fileInput = container.querySelector('#image-file');
                    const pasteZone = container.querySelector('#paste-zone');
                    const preview = container.querySelector('#image-preview');
                    fileInput.addEventListener('change', (e) => {
                        const f = e.target.files && e.target.files[0];
                        if (!f) return;
                        const reader = new FileReader();
                        reader.onload = () => {
                            modal.dataset.imageData = reader.result;
                            const hidden = container.querySelector('#image-data');
                            if (hidden) hidden.value = reader.result;
                            preview.src = reader.result;
                            preview.style.display = '';
                        };
                        reader.readAsDataURL(f);
                    });
                    pasteZone.addEventListener('paste', (e) => {
                        const items = (e.clipboardData || window.clipboardData).items || [];
                        for (const it of items) {
                            if (it.type && it.type.indexOf('image') !== -1) {
                                const blob = it.getAsFile();
                                const reader = new FileReader();
                                reader.onload = () => {
                                    modal.dataset.imageData = reader.result;
                                    const hidden = container.querySelector('#image-data');
                                    if (hidden) hidden.value = reader.result;
                                    preview.src = reader.result;
                                    preview.style.display = '';
                                };
                                reader.readAsDataURL(blob);
                                e.preventDefault();
                                return;
                            }
                        }
                    });
                }
            }

            // add viewer markup to body (once)
            if (!document.getElementById('viewer')) {
                const v = document.createElement('div');
                v.id = 'viewer';
                v.className = 'viewer';
                v.innerHTML = `<button class="viewer-close" aria-label="Close">✕</button><img src="" alt="" />`;
                document.body.appendChild(v);
                v.addEventListener('click', (e) => {
                    if (e.target === v || e.target.classList.contains('viewer-close')) closeViewer();
                });
            }
/* ==========================================================================
   TEAM SUDO_CORE • SIH1608 • NCCT UNIFIED ECOSYSTEM
   Client-Side Interactive Logic & Presentation State Management
   Zero External Dependencies • Pure Modern ES6+ Architecture
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initWorkflowStepper();
  initTechStack();
  initDashboards();
  initCertificateVerifier();
  initDataFlow();
  initBenefits();
  initRoadmap();
  initTeam();
  initPresentationMode();
  initBottomDock();
  initQuickSearchModal();
});

/* --------------------------------------------------------------------------
   01. THEME SWITCHER WITH LOCALSTORAGE & SYSTEM ADAPTATION
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const storedTheme = localStorage.getItem('sudo_theme') || 'light';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('sudo_theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('themeIcon');
  if (!iconSpan) return;

  if (theme === 'dark') {
    iconSpan.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
  } else {
    iconSpan.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
  }
}

/* --------------------------------------------------------------------------
   02. MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const closeBtn = document.getElementById('closeMobileNav');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  function openDrawer() {
    drawer?.classList.add('active');
    overlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('active');
    overlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   03. 10-STAGE WORKFLOW STEPPER & INSPECTOR
   -------------------------------------------------------------------------- */
let activeWorkflowStepId = 1;

function initWorkflowStepper() {
  const listContainer = document.getElementById('workflowStepList');
  const prevBtn = document.getElementById('workflowPrevBtn');
  const nextBtn = document.getElementById('workflowNextBtn');
  if (!listContainer || !SUDO_DATA.journeySteps) return;

  // Render left steps
  listContainer.innerHTML = SUDO_DATA.journeySteps.map(step => `
    <div class="wf-step-item ${step.id === 1 ? 'active' : ''}" data-step-id="${step.id}" id="wf-step-${step.id}">
      <div class="wf-left">
        <span class="wf-badge-num">${step.num}</span>
        <div>
          <div class="wf-name">${step.name}</div>
          <div class="wf-sub">${step.short}</div>
        </div>
      </div>
      <span class="badge badge-sm badge-outline">Inspect →</span>
    </div>
  `).join('');

  // Attach click events
  const stepItems = listContainer.querySelectorAll('.wf-step-item');
  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      const stepId = parseInt(item.getAttribute('data-step-id'), 10);
      selectWorkflowStep(stepId);
    });
  });

  prevBtn?.addEventListener('click', () => {
    if (activeWorkflowStepId > 1) {
      selectWorkflowStep(activeWorkflowStepId - 1);
    }
  });

  nextBtn?.addEventListener('click', () => {
    if (activeWorkflowStepId < SUDO_DATA.journeySteps.length) {
      selectWorkflowStep(activeWorkflowStepId + 1);
    }
  });

  selectWorkflowStep(1);
}

function selectWorkflowStep(stepId) {
  activeWorkflowStepId = stepId;
  const stepData = SUDO_DATA.journeySteps.find(s => s.id === stepId);
  if (!stepData) return;

  // Highlight step item in list
  document.querySelectorAll('.wf-step-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeItem = document.getElementById(`wf-step-${stepId}`);
  activeItem?.classList.add('active');

  // Update Inspector Card
  const tabEl = document.getElementById('inspectorTab');
  const tabTitle = document.getElementById('inspectorTabTitle');
  const stepNumEl = document.getElementById('inspectorStepNum');
  const nameEl = document.getElementById('inspectorName');
  const shortEl = document.getElementById('inspectorShort');
  const iconBadge = document.getElementById('inspectorIconBadge');
  const whatEl = document.getElementById('inspectorWhat');
  const whyEl = document.getElementById('inspectorWhy');
  const inputEl = document.getElementById('inspectorInput');
  const procEl = document.getElementById('inspectorProcessing');
  const outEl = document.getElementById('inspectorOutput');
  const techEl = document.getElementById('inspectorTech');

  if (tabEl) {
    tabEl.className = `folder-tab tab-${stepData.accent || 'yellow'}`;
  }
  if (tabTitle) tabTitle.textContent = `STAGE ${stepData.num} INSPECTION`;
  if (stepNumEl) stepNumEl.textContent = `STEP ${stepData.num} OF 10`;
  if (nameEl) nameEl.textContent = stepData.name;
  if (shortEl) shortEl.textContent = stepData.short;
  if (iconBadge) iconBadge.textContent = stepData.num;
  if (whatEl) whatEl.textContent = stepData.what;
  if (whyEl) whyEl.textContent = stepData.why;
  if (inputEl) inputEl.textContent = stepData.input || "Demographic / Telemetry input";
  if (procEl) procEl.textContent = stepData.processing || "Edge verification & Cryptographic hashing";
  if (outEl) outEl.textContent = stepData.output || "Signed token / updated ledger record";
  if (techEl) techEl.textContent = stepData.technology || "ESP32, RESTful APIs, PostgreSQL Master";
}

/* --------------------------------------------------------------------------
   04. TECHNOLOGY STACK (8 Structured Categories)
   -------------------------------------------------------------------------- */
function initTechStack() {
  const container = document.getElementById('techStackGrid');
  if (!container || !SUDO_DATA.techStack) return;

  const categories = Object.keys(SUDO_DATA.techStack);
  container.innerHTML = categories.map(catKey => {
    const cat = SUDO_DATA.techStack[catKey];
    return `
      <div class="card neo-card folder-card tech-card">
        <div class="folder-tab tab-${cat.accent || 'yellow'}">
          <span class="folder-tab-icon">⚡</span>
          ${cat.category.toUpperCase()}
        </div>
        <div class="card-inner">
          <p class="card-text" style="font-size: 0.8rem; margin-bottom: 0.75rem;">${cat.description}</p>
          <div class="tech-items-list">
            ${cat.items.map(item => `
              <div class="tech-item">
                <div class="tech-item-top">
                  <span class="tech-item-name">${item.name}</span>
                  <span class="badge badge-sm badge-outline">${item.tag}</span>
                </div>
                <div class="tech-item-role">${item.role}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* --------------------------------------------------------------------------
   05. INTERACTIVE STAKEHOLDER DASHBOARDS (5 Cockpits)
   -------------------------------------------------------------------------- */
let currentRole = 'trainee';

function initDashboards() {
  const switcher = document.getElementById('dashboardSwitcher');
  if (!switcher || !SUDO_DATA.dashboards) return;

  const roleButtons = switcher.querySelectorAll('.role-tab-btn');
  roleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const role = btn.getAttribute('data-role');
      renderDashboard(role);
    });
  });

  renderDashboard('trainee');
}

function renderDashboard(role) {
  currentRole = role;
  const data = SUDO_DATA.dashboards[role];
  if (!data) return;

  const titleEl = document.getElementById('dashUserTitle');
  const subEl = document.getElementById('dashUserSub');
  const kpiGrid = document.getElementById('dashKpiGrid');
  const contentGrid = document.getElementById('dashContentGrid');

  if (titleEl) titleEl.textContent = data.name;
  if (subEl) subEl.textContent = `${data.user} • ${data.subtitle}`;

  // Render 4 KPI Cards
  const accentClasses = ['kpi-yellow', 'kpi-orange', 'kpi-pink', 'kpi-green'];
  if (kpiGrid) {
    kpiGrid.innerHTML = data.kpis.map((kpi, idx) => `
      <div class="kpi-card ${accentClasses[idx % 4]}">
        <div class="kpi-label">${kpi.label}</div>
        <div class="kpi-value">${kpi.value}</div>
        <div class="kpi-trend">${kpi.trend}</div>
      </div>
    `).join('');
  }

  // Render Role-Specific Main Panels
  if (contentGrid) {
    if (role === 'trainee') {
      contentGrid.innerHTML = `
        <div class="dash-panel">
          <div class="dash-panel-title">
            <span>Recent Activity &amp; Presence Events</span>
            <span class="badge badge-sm badge-green">ESP32 Synced</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.65rem;">
            ${data.recentActivity.map(act => `
              <div style="padding: 0.75rem; background: var(--bg-surface-cream); border: var(--border-thin); border-radius: var(--radius-sm); font-size: 0.85rem;">
                <div style="font-weight: 700; color: var(--text-main);">${act.event}</div>
                <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">⏱️ ${act.time}</div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="dash-panel">
          <div class="dash-panel-title">
            <span>Verified Skills Earned</span>
            <span class="badge badge-sm badge-purple">Passport Level 4</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            <div style="padding: 0.6rem; background: var(--color-yellow-light); border: var(--border-thin); border-radius: var(--radius-sm); font-size: 0.82rem; font-weight: 700;">
              ✓ Cooperative Banking &amp; Accounting (96% Pass)
            </div>
            <div style="padding: 0.6rem; background: var(--color-pink-light); border: var(--border-thin); border-radius: var(--radius-sm); font-size: 0.82rem; font-weight: 700;">
              ✓ PACS Computerization &amp; ERP (Rubric #PR-88)
            </div>
            <div style="padding: 0.6rem; background: var(--color-green-light); border: var(--border-thin); border-radius: var(--radius-sm); font-size: 0.82rem; font-weight: 700;">
              ✓ Statutory Audit &amp; RBI Compliance (Field Grade A)
            </div>
          </div>
        </div>
      `;
    } else if (role === 'trainer') {
      contentGrid.innerHTML = `
        <div class="dash-panel">
          <div class="dash-panel-title">
            <span>Live Classroom Telemetry (ESP32 Terminal #04)</span>
            <span class="badge badge-sm badge-yellow">Classroom 204 Active</span>
          </div>
          <div style="padding: 1rem; background: #141416; color: #4ade80; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.6;">
            [09:14:02] BLE BEACON BROADCAST RSSI: -54dBm (Room Proximity Verified)<br>
            [09:14:08] BIOMETRIC SCAN MATCH: User NCCT-2026-IND-08492 (Score: 98.4%)<br>
            [09:14:09] LOCAL SPIFFS FLASH BUFFER COMMITTED: Nonce #94a1b8<br>
            [09:14:10] REST API GATEWAY SYNC: Attendance Count = 45 / 48 (93.75%)
          </div>
        </div>
        <div class="dash-panel">
          <div class="dash-panel-title">
            <span>Intervention Alerts</span>
            <span class="badge badge-sm badge-orange">Mentoring Required</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${data.supportAlerts.map(alt => `
              <div style="padding: 0.65rem; background: var(--color-orange-light); border: var(--border-thin); border-radius: var(--radius-sm); font-size: 0.8rem;">
                <strong>${alt.student}:</strong> ${alt.issue}
                <div style="font-size: 0.72rem; color: var(--color-orange-dark); font-weight: 800; margin-top: 0.2rem;">Action: ${alt.action}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (role === 'institute') {
      contentGrid.innerHTML = `
        <div class="dash-panel" style="grid-column: 1 / -1;">
          <div class="dash-panel-title">
            <span>Active Batch Rosters &amp; Hardware Telemetry (RICM Bengaluru)</span>
            <span class="badge badge-sm badge-blue">8 Batches Active</span>
          </div>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
              <thead>
                <tr style="border-bottom: var(--border-main); background: var(--bg-surface-cream);">
                  <th style="padding: 0.6rem;">Batch ID</th>
                  <th style="padding: 0.6rem;">Program Name</th>
                  <th style="padding: 0.6rem;">Strength</th>
                  <th style="padding: 0.6rem;">Attendance Rate</th>
                  <th style="padding: 0.6rem;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${data.batchSummary.map(b => `
                  <tr style="border-bottom: var(--border-thin);">
                    <td style="padding: 0.6rem; font-family: var(--font-mono); font-weight: 700;">${b.batch}</td>
                    <td style="padding: 0.6rem; font-weight: 600;">${b.prog}</td>
                    <td style="padding: 0.6rem;">${b.strength} Trainees</td>
                    <td style="padding: 0.6rem; font-weight: 700; color: var(--color-green);">${b.attRate}</td>
                    <td style="padding: 0.6rem;"><span class="badge badge-sm badge-yellow">${b.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    } else if (role === 'admin') {
      contentGrid.innerHTML = `
        <div class="dash-panel" style="grid-column: 1 / -1;">
          <div class="dash-panel-title">
            <span>National Federated Training Radar (14 RICMs &amp; 19 ICMs)</span>
            <span class="badge badge-sm badge-pink">Ministry of Cooperation</span>
          </div>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
            ${data.regionalBreakdown.map(reg => `
              <div style="background: var(--bg-surface-cream); border: var(--border-thin); border-radius: var(--radius-sm); padding: 1rem;">
                <div style="font-weight: 800; font-size: 0.9rem; margin-bottom: 0.35rem;">${reg.region}</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">Institutes: <strong>${reg.institutes}</strong></div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">Enrolled: <strong>${reg.enrollment}</strong></div>
                <div style="font-size: 0.78rem; color: var(--color-green); font-weight: 800; margin-top: 0.3rem;">Placement: ${reg.placementRate}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (role === 'employer') {
      contentGrid.innerHTML = `
        <div class="dash-panel" style="grid-column: 1 / -1;">
          <div class="dash-panel-title">
            <span>Verified Candidate Discovery Query (Matching PACS &amp; Bank Vacancies)</span>
            <span class="badge badge-sm badge-green">Direct Hiring Pipeline</span>
          </div>
          <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left;">
              <thead>
                <tr style="border-bottom: var(--border-main); background: var(--bg-surface-cream);">
                  <th style="padding: 0.6rem;">Candidate Name</th>
                  <th style="padding: 0.6rem;">Participant ID</th>
                  <th style="padding: 0.6rem;">Competency Match</th>
                  <th style="padding: 0.6rem;">Training Institute</th>
                  <th style="padding: 0.6rem;">Status</th>
                </tr>
              </thead>
              <tbody>
                ${data.liveTalentQuery.map(c => `
                  <tr style="border-bottom: var(--border-thin);">
                    <td style="padding: 0.6rem; font-weight: 800;">${c.candidate}</td>
                    <td style="padding: 0.6rem; font-family: var(--font-mono); font-size: 0.78rem;">${c.id}</td>
                    <td style="padding: 0.6rem; font-weight: 800; color: var(--color-green);">${c.match} Match</td>
                    <td style="padding: 0.6rem;">${c.institute}</td>
                    <td style="padding: 0.6rem;"><span class="badge badge-sm badge-green">${c.status}</span></td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }
  }
}

/* --------------------------------------------------------------------------
   06. CERTIFICATE VERIFIER SIMULATOR
   -------------------------------------------------------------------------- */
function initCertificateVerifier() {
  const verifyBtn = document.getElementById('runCertVerifyBtn');
  const inputEl = document.getElementById('certInputBox');
  const resultBox = document.getElementById('certResultBox');
  const sampleButtons = document.querySelectorAll('.test-cert-btn');

  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const certId = btn.getAttribute('data-cert');
      if (inputEl) inputEl.value = certId;
      runVerification(certId);
    });
  });

  verifyBtn?.addEventListener('click', () => {
    const certId = inputEl?.value.trim() || 'NCCT-DEMO-2026-001';
    runVerification(certId);
  });

  function runVerification(certId) {
    if (!resultBox) return;
    const cert = SUDO_DATA.demoCertificates[certId];

    if (cert) {
      resultBox.innerHTML = `
        <div class="cert-badge-valid">
          ✓ CRYPTOGRAPHICALLY VERIFIED AUTHENTIC
        </div>
        <div style="font-family: var(--font-heading); font-size: 1.15rem; font-weight: 800; margin-bottom: 0.5rem; color: var(--text-main);">
          ${cert.candidateName}
        </div>
        <div class="cert-row"><strong>Programme:</strong> ${cert.programme}</div>
        <div class="cert-row"><strong>Institute:</strong> ${cert.institute}</div>
        <div class="cert-row"><strong>Issue Date:</strong> ${cert.issueDate} • <strong>Grade:</strong> ${cert.grade}</div>
        <div class="cert-row"><strong>Attendance Telemetry:</strong> ${cert.attendanceRecord}</div>
        <div class="cert-row"><strong>Verified Competencies:</strong> ${cert.verifiedSkills.join(', ')}</div>
        <div style="margin-top: 0.75rem; padding-top: 0.65rem; border-top: var(--border-thin); font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-subtle); word-break: break-all;">
          <strong>SHA-256 Ledger Hash:</strong><br>${cert.hash}
        </div>
      `;
    } else {
      resultBox.innerHTML = `
        <div style="padding: 1rem; background: var(--color-pink-light); border: var(--border-thin); border-radius: var(--radius-sm); color: var(--color-pink-dark); font-weight: 700;">
          ✕ Certificate Record Not Found in NCCT Ledger.<br>
          <span style="font-size: 0.8rem; font-weight: 500;">Please check the ID or try sample certificates: NCCT-DEMO-2026-001 or NCCT-DEMO-2026-002.</span>
        </div>
      `;
    }
  }

  // Run on initial load
  runVerification('NCCT-DEMO-2026-001');
}

/* --------------------------------------------------------------------------
   07. DATA FLOW (6 Interactive Stages)
   -------------------------------------------------------------------------- */
let activeDataFlowStage = 1;

function initDataFlow() {
  const bar = document.getElementById('dataflowStepsBar');
  const details = document.getElementById('dataflowStageDetails');
  if (!bar || !SUDO_DATA.dataFlowStages) return;

  bar.innerHTML = SUDO_DATA.dataFlowStages.map(st => `
    <div class="df-step-btn ${st.stage === 1 ? 'active' : ''}" data-df-stage="${st.stage}" id="df-btn-${st.stage}">
      <div class="df-step-num">STAGE 0${st.stage}</div>
      <div class="df-step-name">${st.name}</div>
    </div>
  `).join('');

  const buttons = bar.querySelectorAll('.df-step-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const stageNum = parseInt(btn.getAttribute('data-df-stage'), 10);
      selectDataFlowStage(stageNum);
    });
  });

  selectDataFlowStage(1);
}

function selectDataFlowStage(stageNum) {
  activeDataFlowStage = stageNum;
  const stageData = SUDO_DATA.dataFlowStages.find(s => s.stage === stageNum);
  const details = document.getElementById('dataflowStageDetails');
  if (!stageData || !details) return;

  document.querySelectorAll('.df-step-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`df-btn-${stageNum}`)?.classList.add('active');

  details.innerHTML = `
    <div class="df-detail-header">
      <div>
        <span class="badge badge-sm badge-${stageData.accent || 'yellow'}">STAGE 0${stageData.stage} OF 06</span>
        <h3 class="df-detail-title">${stageData.title}</h3>
      </div>
      <span class="badge badge-outline">Source: ${stageData.source}</span>
    </div>
    <p class="df-detail-desc">${stageData.description}</p>
    <div class="df-packet-box">
      <div style="font-weight: 800; font-size: 0.72rem; color: #94a3b8; margin-bottom: 0.35rem;">SAMPLE PACKET PAYLOAD:</div>
      ${stageData.packet}
    </div>
  `;
}

/* --------------------------------------------------------------------------
   08. BENEFITS METRIC CARDS
   -------------------------------------------------------------------------- */
function initBenefits() {
  const container = document.getElementById('benefitsMetricGrid');
  if (!container || !SUDO_DATA.benefits) return;

  const bgClasses = ['bg-yellow', 'bg-orange', 'bg-pink', 'bg-purple', 'bg-green', 'bg-blue'];
  container.innerHTML = SUDO_DATA.benefits.map((b, idx) => `
    <div class="benefit-card ${bgClasses[idx % 6]} neo-card">
      <div class="benefit-metric-val">${b.metric}</div>
      <h3 class="benefit-title">${b.title}</h3>
      <p class="benefit-desc">${b.desc}</p>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   09. FUTURE SCOPE ROADMAP
   -------------------------------------------------------------------------- */
function initRoadmap() {
  const container = document.getElementById('roadmapTimeline');
  if (!container || !SUDO_DATA.futureScopePhases) return;

  container.innerHTML = SUDO_DATA.futureScopePhases.map(p => `
    <div class="card neo-card folder-card roadmap-phase-card">
      <div class="folder-tab tab-${p.accent || 'yellow'}">
        <span class="folder-tab-icon">🚀</span>
        ${p.badge.toUpperCase()}
      </div>
      <div class="card-inner">
        <div class="phase-timeline-badge">${p.phase} • ${p.timeline}</div>
        <h3 class="phase-title">${p.title}</h3>
        <ul class="milestones-list">
          ${p.milestones.map(m => `<li>${m}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   10. TEAM SUDO_CORE CARDS
   -------------------------------------------------------------------------- */
function initTeam() {
  const container = document.getElementById('teamCardsGrid');
  if (!container || !SUDO_DATA.teamMembers) return;

  container.innerHTML = SUDO_DATA.teamMembers.map(m => `
    <div class="card neo-card">
      <div class="team-card-inner">
        <div class="team-avatar bg-${m.accent || 'yellow'}">${m.initials}</div>
        <h3 class="team-name">${m.name}</h3>
        <div class="team-role">${m.role}</div>
        <span class="badge badge-sm badge-outline" style="margin-bottom: 0.75rem;">${m.team} • ID: ${m.teamId}</span>
        <p class="team-contrib">${m.contribution}</p>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   11. PRESENTATION MODE (Fullscreen Judge Walkthrough)
   -------------------------------------------------------------------------- */
let activeSlideIndex = 0;

function initPresentationMode() {
  const modal = document.getElementById('presentationModal');
  const closeBtn = document.getElementById('closePresModal');
  const prevBtn = document.getElementById('presPrevBtn');
  const nextBtn = document.getElementById('presNextBtn');
  const launchButtons = document.querySelectorAll('.launch-pres-btn');
  const dotsContainer = document.getElementById('presDots');

  if (!modal || !SUDO_DATA.presentationSlides) return;

  // Generate indicator dots
  if (dotsContainer) {
    dotsContainer.innerHTML = SUDO_DATA.presentationSlides.map((_, idx) => `
      <div class="pres-dot ${idx === 0 ? 'active' : ''}" data-slide="${idx}"></div>
    `).join('');

    dotsContainer.querySelectorAll('.pres-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const slideIdx = parseInt(dot.getAttribute('data-slide'), 10);
        showSlide(slideIdx);
      });
    });
  }

  function openPresentation() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showSlide(0);
  }

  function closePresentation() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  launchButtons.forEach(btn => btn.addEventListener('click', openPresentation));
  closeBtn?.addEventListener('click', closePresentation);

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) {
      if (e.key === 'p' || e.key === 'P') {
        openPresentation();
      }
      return;
    }

    if (e.key === 'Escape') closePresentation();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  });

  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);

  function nextSlide() {
    if (activeSlideIndex < SUDO_DATA.presentationSlides.length - 1) {
      showSlide(activeSlideIndex + 1);
    }
  }

  function prevSlide() {
    if (activeSlideIndex > 0) {
      showSlide(activeSlideIndex - 1);
    }
  }
}

function showSlide(index) {
  activeSlideIndex = index;
  const slide = SUDO_DATA.presentationSlides[index];
  if (!slide) return;

  const tagEl = document.getElementById('presSlideTag');
  const numEl = document.getElementById('presSlideNum');
  const titleEl = document.getElementById('presTitle');
  const subEl = document.getElementById('presSubtitle');
  const bulletsList = document.getElementById('presBulletsList');
  const visualEl = document.getElementById('presSlideVisual');

  if (tagEl) tagEl.textContent = slide.tag;
  if (numEl) numEl.textContent = slide.slideNumber;
  if (titleEl) titleEl.textContent = slide.title;
  if (subEl) subEl.textContent = slide.subtitle;

  if (bulletsList) {
    bulletsList.innerHTML = slide.bullets.map(b => `<li>${b}</li>`).join('');
  }

  // Update visual card based on slide type
  if (visualEl) {
    visualEl.innerHTML = `
      <div style="font-family: var(--font-heading); font-weight: 800; font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--text-main);">
        SLIDE ${slide.slideNumber} VISUAL
      </div>
      <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1rem;">
        Smart India Hackathon • SIH1608 • Team Sudo_Core
      </div>
      <div style="padding: 1.5rem; background: var(--bg-surface-cream); border: var(--border-main); border-radius: var(--radius-md); font-family: var(--font-mono); font-size: 0.82rem; font-weight: 700;">
        DIAGRAM: [${slide.diagram}]<br>
        <span style="color: var(--color-pink); font-size: 0.75rem;">Verified Presentation Source</span>
      </div>
    `;
  }

  // Update dots
  const dots = document.querySelectorAll('.pres-dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === index);
  });
}

/* --------------------------------------------------------------------------
   12. FLOATING BOTTOM CONTROL DOCK (Next/Prev Section Jumper)
   -------------------------------------------------------------------------- */
const sectionIds = [
  'hero', 'problem', 'solution', 'workflow', 'architecture',
  'tech-stack', 'dashboards', 'data-flow', 'security',
  'benefits', 'future-scope', 'team'
];

function initBottomDock() {
  const prevSecBtn = document.querySelector('.prev-section-btn');
  const nextSecBtn = document.querySelector('.next-section-btn');

  function getCurrentSectionIndex() {
    const scrollPos = window.scrollY + 200;
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const el = document.getElementById(sectionIds[i]);
      if (el && el.offsetTop <= scrollPos) {
        return i;
      }
    }
    return 0;
  }

  prevSecBtn?.addEventListener('click', () => {
    const curr = getCurrentSectionIndex();
    if (curr > 0) {
      const target = document.getElementById(sectionIds[curr - 1]);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  nextSecBtn?.addEventListener('click', () => {
    const curr = getCurrentSectionIndex();
    if (curr < sectionIds.length - 1) {
      const target = document.getElementById(sectionIds[curr + 1]);
      target?.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

/* --------------------------------------------------------------------------
   13. QUICK SEARCH MODAL (Ctrl+K)
   -------------------------------------------------------------------------- */
function initQuickSearchModal() {
  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchModalInput');
  const resultsContainer = document.getElementById('searchModalResults');
  const openButtons = document.querySelectorAll('.open-search-modal');
  const closeBtn = document.getElementById('closeSearchModal');

  const searchableItems = [
    { title: "01 Problem Statement", desc: "Why current training systems fail & scattered records", anchor: "#problem" },
    { title: "02 Proposed Solution", desc: "The 5 integrated pillars & architectural equation", anchor: "#solution" },
    { title: "03 Project Workflow", desc: "Interactive 10-stage trainee lifecycle flow", anchor: "#workflow" },
    { title: "04 System Architecture", desc: "Multi-tier design: Hardware, API, Database, AI", anchor: "#architecture" },
    { title: "05 Technology Stack", desc: "Frontend, Backend, ESP32 Hardware, Database, AI", anchor: "#tech-stack" },
    { title: "06 Live Dashboards", desc: "Trainee, Trainer, Institute, Admin, and Employer cockpits", anchor: "#dashboards" },
    { title: "Certificate Verifier", desc: "Instant SHA-256 cryptographic check for employers", anchor: "#certificate-verifier" },
    { title: "07 Data Movement Lifecycle", desc: "Stage 1 to 6 packet flow from sensor to ledger", anchor: "#data-flow" },
    { title: "08 Security & Fraud Prevention", desc: "Hardware multi-check, zero-knowledge minutiae, RBAC", anchor: "#security" },
    { title: "09 Measurable Benefits", desc: "Operational efficiency, audit integrity & 4 quadrants", anchor: "#benefits" },
    { title: "10 Strategic Roadmap", desc: "Phased rollout: Phase 1 to Phase 4 Pan-India grid", anchor: "#future-scope" },
    { title: "11 Project Team", desc: "Team Sudo_Core (Team ID: 190037)", anchor: "#team" }
  ];

  function openSearch() {
    modal?.classList.add('active');
    input?.focus();
    renderSearchResults('');
  }

  function closeSearch() {
    modal?.classList.remove('active');
    if (input) input.value = '';
  }

  openButtons.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn?.addEventListener('click', closeSearch);

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeSearch();
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal?.classList.contains('active') ? closeSearch() : openSearch();
    }
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeSearch();
    }
  });

  input?.addEventListener('input', () => {
    renderSearchResults(input.value.trim().toLowerCase());
  });

  function renderSearchResults(query) {
    if (!resultsContainer) return;
    const filtered = query
      ? searchableItems.filter(item => item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query))
      : searchableItems;

    if (filtered.length === 0) {
      resultsContainer.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.85rem;">No matching sections found</div>`;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <a href="${item.anchor}" class="modal-result-item" onclick="document.getElementById('searchModal').classList.remove('active')">
        <div>
          <div style="color: var(--text-main); font-weight: 800;">${item.title}</div>
          <div style="font-size: 0.75rem; color: var(--text-muted);">${item.desc}</div>
        </div>
        <span style="font-size: 0.8rem; color: var(--color-pink);">Jump →</span>
      </a>
    `).join('');
  }
}

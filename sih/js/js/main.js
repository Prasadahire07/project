/* ==========================================================================
   TEAM SUDO - SIH 2026 DOCUMENTATION PLATFORM
   Client-Side Interactive Logic & State Management
   Zero External Dependencies • Pure ES6+ Modern Architecture
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initEditableMeta();
  initJourneyStepper();
  initStakeholderTabs();
  initCertificateVerifier();
  initSkillPassport();
  initDashboards();
  initQuickSearchModal();
  initMobileNav();
  initPrintHandler();
});

/* --------------------------------------------------------------------------
   THEME TOGGLING (DARK / LIGHT GOVTECH MODES)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
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
  const themeIcon = document.getElementById('themeIcon');
  if (!themeIcon) return;
  if (theme === 'dark') {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    themeIcon.setAttribute('title', 'Switch to Light Mode');
  } else {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    themeIcon.setAttribute('title', 'Switch to Dark Mode');
  }
}

/* --------------------------------------------------------------------------
   EDITABLE PROBLEM STATEMENT METADATA
   Grounded in PPT rule: Blank fields for PS ID & Title remain customizable
   -------------------------------------------------------------------------- */
function initEditableMeta() {
  const editableFields = document.querySelectorAll('[data-editable-id]');
  editableFields.forEach(field => {
    const key = field.getAttribute('data-editable-id');
    const saved = localStorage.getItem(`sudo_meta_${key}`);
    if (saved) {
      field.textContent = saved;
    }

    field.addEventListener('blur', () => {
      localStorage.setItem(`sudo_meta_${key}`, field.textContent.trim());
    });

    field.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        field.blur();
      }
    });
  });
}

/* --------------------------------------------------------------------------
   PARTICIPANT JOURNEY (10-STEP INTERACTIVE STEPPER)
   -------------------------------------------------------------------------- */
let currentJourneyStep = 1;

function initJourneyStepper() {
  const stepperContainer = document.getElementById('journeyStepperNav');
  if (!stepperContainer) return;

  // Render stepper buttons
  stepperContainer.innerHTML = SUDO_DATA.journeySteps.map(step => `
    <button class="journey-step-btn ${step.id === 1 ? 'active' : ''}" data-step-id="${step.id}" id="step-btn-${step.id}">
      <span class="step-badge-num">${step.num}</span>
      <div class="step-info">
        <span class="step-name">${step.name}</span>
        <span class="step-sub">${step.short}</span>
      </div>
    </button>
  `).join('');

  // Attach click listener
  stepperContainer.querySelectorAll('.journey-step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const stepId = parseInt(btn.getAttribute('data-step-id'));
      renderJourneyDetail(stepId);
    });
  });

  // Next / Prev controls
  const nextBtn = document.getElementById('journeyNextBtn');
  const prevBtn = document.getElementById('journeyPrevBtn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextId = currentJourneyStep < 10 ? currentJourneyStep + 1 : 1;
      renderJourneyDetail(nextId);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevId = currentJourneyStep > 1 ? currentJourneyStep - 1 : 10;
      renderJourneyDetail(prevId);
    });
  }

  // Initial render
  renderJourneyDetail(1);
}

function renderJourneyDetail(stepId) {
  currentJourneyStep = stepId;
  const step = SUDO_DATA.journeySteps.find(s => s.id === stepId);
  if (!step) return;

  // Update active state in stepper nav
  document.querySelectorAll('.journey-step-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.getElementById(`step-btn-${stepId}`);
  if (activeBtn) activeBtn.classList.add('active');

  const panel = document.getElementById('journeyDetailPanel');
  if (!panel) return;

  panel.innerHTML = `
    <div class="journey-detail-header">
      <div class="journey-detail-title">
        <span class="badge badge-primary">Step ${step.num} of 10</span>
        <span>${step.name}</span>
      </div>
      <span class="journey-step-tag">${step.short}</span>
    </div>

    <p style="font-size: 1.05rem; color: var(--text-main); font-weight: 500; margin-bottom: 1.5rem;">
      ${step.what}
    </p>

    <div class="deepdive-grid">
      <div class="deepdive-item">
        <div class="deepdive-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          Why It Exists
        </div>
        <div class="deepdive-content">${step.why}</div>
      </div>

      <div class="deepdive-item">
        <div class="deepdive-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          How It Works
        </div>
        <div class="deepdive-content">${step.how}</div>
      </div>

      <div class="deepdive-item">
        <div class="deepdive-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          Who Uses It
        </div>
        <div class="deepdive-content">${step.who}</div>
      </div>

      <div class="deepdive-item">
        <div class="deepdive-label">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          Data Generated
        </div>
        <div class="deepdive-content mono" style="font-size: 0.8rem;">${step.dataGenerated}</div>
      </div>

      <div class="deepdive-item">
        <div class="deepdive-label" style="color: var(--color-secondary);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          Primary Benefit
        </div>
        <div class="deepdive-content">${step.benefit}</div>
      </div>

      <div class="deepdive-item">
        <div class="deepdive-label" style="color: var(--color-accent-amber);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          Risks & Safeguards
        </div>
        <div class="deepdive-content">${step.risks}</div>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   STAKEHOLDER ECOSYSTEM TABS
   -------------------------------------------------------------------------- */
function initStakeholderTabs() {
  const tabs = document.querySelectorAll('.stakeholder-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.stakeholder-pane').forEach(pane => {
        pane.classList.remove('active');
      });
      const activePane = document.getElementById(`pane-${targetId}`);
      if (activePane) activePane.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   CERTIFICATE VERIFICATION SIMULATOR (INTERACTIVE TOOL)
   -------------------------------------------------------------------------- */
function initCertificateVerifier() {
  const input = document.getElementById('certInput');
  const verifyBtn = document.getElementById('verifyBtn');
  const resultBox = document.getElementById('certResultBox');
  const presetChips = document.querySelectorAll('.preset-chip');

  if (!input || !verifyBtn || !resultBox) return;

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      input.value = chip.getAttribute('data-cert-id');
      performVerification(input.value.trim());
    });
  });

  verifyBtn.addEventListener('click', () => {
    performVerification(input.value.trim());
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      performVerification(input.value.trim());
    }
  });
}

function performVerification(certId) {
  const resultBox = document.getElementById('certResultBox');
  if (!certId) {
    resultBox.innerHTML = `
      <div style="color: var(--color-accent-amber); font-weight: 600; padding: 1rem; text-align: center;">
        Please enter a Certificate ID (e.g., SUDO-DEMO-2026-001) or click a demo sample above.
      </div>
    `;
    resultBox.classList.add('active');
    return;
  }

  // Simulated Verification Logic against Demo Dataset
  const cert = SUDO_DATA.demoCertificates[certId];

  if (cert) {
    resultBox.innerHTML = `
      <div class="result-status-badge verified">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ${cert.status} (NCCT Central Ledger Match)
      </div>

      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.25rem;">
          ${cert.candidateName}
        </h4>
        <div style="color: var(--color-primary); font-weight: 600; font-size: 0.95rem;">
          ${cert.programme}
        </div>
      </div>

      <div class="cert-meta-grid">
        <div class="cert-meta-item">
          <span class="cert-meta-label">Certificate ID</span>
          <span class="cert-meta-value mono">${cert.id}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Issuing Institute</span>
          <span class="cert-meta-value">${cert.institute}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Award Date</span>
          <span class="cert-meta-value">${cert.issueDate}</span>
        </div>
        <div class="cert-meta-item">
          <span class="cert-meta-label">Evaluation Grade</span>
          <span class="cert-meta-value" style="color: var(--color-secondary); font-weight: 700;">${cert.grade}</span>
        </div>
        <div class="cert-meta-item" style="grid-column: 1 / -1;">
          <span class="cert-meta-label">Verified Attendance Record</span>
          <span class="cert-meta-value">${cert.attendanceRecord}</span>
        </div>
        <div class="cert-meta-item" style="grid-column: 1 / -1;">
          <span class="cert-meta-label">Underlying Verified Skills</span>
          <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.35rem;">
            ${cert.verifiedSkills.map(s => `<span class="badge badge-secondary">${s}</span>`).join('')}
          </div>
        </div>
        <div class="cert-meta-item" style="grid-column: 1 / -1;">
          <span class="cert-meta-label">Tamper-Proof Cryptographic Hash (SHA-256)</span>
          <span class="cert-meta-value mono" style="font-size: 0.72rem; word-break: break-all; color: var(--text-subtle);">
            ${cert.hash}
          </span>
        </div>
      </div>

      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px dashed var(--border-medium); display: flex; align-items: center; justify-content: space-between; font-size: 0.75rem; color: var(--text-subtle);">
        <span>Certifying Body: ${cert.certifyingAuthority}</span>
        <span class="badge badge-demo">DEMO VERIFICATION SYSTEM</span>
      </div>
    `;
  } else {
    resultBox.innerHTML = `
      <div class="result-status-badge" style="background: var(--color-accent-red-subtle); color: var(--color-accent-red); border: 1px solid rgba(220, 38, 38, 0.3);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        Certificate ID Not Found
      </div>
      <p style="font-size: 0.875rem; color: var(--text-muted); margin-top: 0.5rem;">
        The identifier <strong>"${certId}"</strong> is not recognized in the demo registry. Please try clicking one of the sample chips above: <code>SUDO-DEMO-2026-001</code>, <code>SUDO-DEMO-2026-002</code>, or <code>SUDO-DEMO-2026-003</code>.
      </p>
    `;
  }
  resultBox.classList.add('active');
}

/* --------------------------------------------------------------------------
   SKILL PASSPORT PROFILE SWITCHER
   -------------------------------------------------------------------------- */
function initSkillPassport() {
  const profileToggleBtns = document.querySelectorAll('.passport-toggle-btn');
  if (!profileToggleBtns.length) return;

  profileToggleBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      profileToggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderSkillPassport(SUDO_DATA.demoProfiles[index] || SUDO_DATA.demoProfiles[0]);
    });
  });

  // Render initial profile
  renderSkillPassport(SUDO_DATA.demoProfiles[0]);
}

function renderSkillPassport(profile) {
  const card = document.getElementById('passportCardContent');
  if (!card) return;

  card.innerHTML = `
    <div class="passport-header">
      <div class="passport-org-meta">
        <div class="passport-seal">NCCT</div>
        <div>
          <div style="font-weight: 800; font-size: 0.85rem; color: var(--text-main);">NATIONAL COUNCIL FOR COOPERATIVE TRAINING</div>
          <div style="font-size: 0.72rem; color: var(--text-subtle);">Ministry of Cooperation, Government of India • Federated Skill Passport</div>
        </div>
      </div>
      <span class="badge badge-demo">DEMO DATA</span>
    </div>

    <div class="passport-profile-strip">
      <div class="profile-avatar">${profile.avatarInitials}</div>
      <div class="profile-main-meta">
        <h3 class="profile-name">${profile.name}</h3>
        <div class="profile-prog">${profile.program}</div>
        <div class="profile-id">Participant UID: ${profile.id} • ${profile.institute}</div>
      </div>
    </div>

    <div class="passport-stats-grid">
      <div class="p-stat-box">
        <div class="p-stat-num" style="color: var(--color-secondary);">${profile.attendanceRate}</div>
        <div class="p-stat-lbl">Hardware Attendance</div>
      </div>
      <div class="p-stat-box">
        <div class="p-stat-num" style="color: var(--color-primary);">${profile.assessmentsPassed}</div>
        <div class="p-stat-lbl">Assessments Passed</div>
      </div>
      <div class="p-stat-box">
        <div class="p-stat-num" style="color: var(--color-accent-amber);">${profile.competencyLevel.split(' ')[0]}</div>
        <div class="p-stat-lbl">Competency Level</div>
      </div>
    </div>

    <div style="margin-bottom: 0.75rem; font-size: 0.85rem; font-weight: 700; color: var(--text-main);">
      Empirically Verified Competencies (${profile.skills.length})
    </div>

    <div class="skills-tags-cluster">
      ${profile.skills.map(s => `
        <div class="skill-tag-pill" title="Verified via: ${s.verifiedBy}">
          <span class="skill-level-dot"></span>
          <span>${s.name}</span>
          <span style="font-size: 0.7rem; color: var(--text-subtle);">L${s.level}</span>
        </div>
      `).join('')}
    </div>

    <div style="padding-top: 1rem; border-top: 1px dashed var(--border-medium); display: flex; align-items: center; justify-content: space-between;">
      <div style="font-size: 0.75rem; color: var(--text-subtle);">
        Validated via ESP32 Biometric Terminal • Tamper-proof
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <span class="badge badge-secondary">Cryptographically Signed</span>
      </div>
    </div>
  `;
}

/* --------------------------------------------------------------------------
   INTERACTIVE DASHBOARDS SUITE (5 SWITCHABLE VIEWS)
   -------------------------------------------------------------------------- */
function initDashboards() {
  const tabs = document.querySelectorAll('.dash-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-dash');
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      document.querySelectorAll('.dashboard-panel').forEach(p => p.classList.remove('active'));
      const activePanel = document.getElementById(`dash-${target}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* --------------------------------------------------------------------------
   QUICK JUMP / SEARCH MODAL (CMD/CTRL+K)
   -------------------------------------------------------------------------- */
const SEARCH_INDEX = [
  { title: "Problem Statement & Comparison", hash: "#problem", meta: "Scattered data, basic check-in, certificates as dead ends" },
  { title: "Our Proposed Solution (LMS + ERP + Presence)", hash: "#solution", meta: "Unified Platform formula, core pillars" },
  { title: "Participant Journey (10 Steps)", hash: "#journey", meta: "Interactive flow: Register, Learn, Smart Attendance, Certification" },
  { title: "Stakeholder Ecosystem", hash: "#ecosystem", meta: "Trainee, Trainer, Institute, NCCT Admin, Employer" },
  { title: "Smart Attendance System (ESP32 + BLE)", hash: "#attendance", meta: "Hardware verification, Biometrics, Fallback modes" },
  { title: "Offline-First Architecture", hash: "#offline", meta: "Real-world connectivity, local cache, differential sync" },
  { title: "Learning Management System (LMS)", hash: "#lms", meta: "Multilingual coursework, modular progress, quizzes" },
  { title: "Verified Skill Passport", hash: "#passport", meta: "Digital credential card, evidence-backed competencies" },
  { title: "Certification & Verification Tool", hash: "#certification", meta: "Tamper-evident QR, unique certificate ID simulator" },
  { title: "AI Career Guidance", hash: "#ai-guidance", meta: "Skill gap analysis, tailored career pathways" },
  { title: "Job & Opportunity Matching", hash: "#job-matching", meta: "Connecting verified skills with cooperative vacancies" },
  { title: "Employer & Cooperative Portal", hash: "#employer-portal", meta: "Post jobs, search verified talent, shortlist" },
  { title: "Training Intelligence & Outcome Loop", hash: "#training-intelligence", meta: "Circular feedback loop, curriculum improvement" },
  { title: "Cooperative Skill Map (Federated Model)", hash: "#skill-map", meta: "NCCT Central Layer, RICMs, ICMs, Government insights" },
  { title: "Proposed Technical Architecture", hash: "#architecture", meta: "Hardware layer, APIs, Central Platform, Data flow" },
  { title: "Complete Data Flow Specification", hash: "#data-flow", meta: "Step-by-step movement of data and artifacts created" },
  { title: "Security, Privacy & RBAC", hash: "#security", meta: "Role-based access, encryption, immutable audit logs" },
  { title: "Feasibility & Viability", hash: "#feasibility", meta: "Technical, Operational, Economic, Scalability" },
  { title: "Risks & Mitigation Matrix", hash: "#risks", meta: "5 explicit risks from PPT and engineering mitigations" },
  { title: "Impact & 4 Benefit Categories", hash: "#impact", meta: "Social, Economic, Operational, Educational benefits" },
  { title: "Interactive Dashboards (Demo)", hash: "#dashboards", meta: "5 switchable mock dashboards for all stakeholders" },
  { title: "Future Scope & Roadmap", hash: "#future-scope", meta: "Post-hackathon expansion, voice AI, national integrations" },
  { title: "Research & References", hash: "#references", meta: "Grounded academic & technical documentation framework" },
  { title: "Team SUDO Information", hash: "#team", meta: "Team members, roles, and engineering contributions" }
];

function initQuickSearchModal() {
  const modal = document.getElementById('searchModal');
  const openBtns = document.querySelectorAll('.open-search-modal');
  const closeBtn = document.getElementById('closeSearchModal');
  const input = document.getElementById('searchModalInput');
  const resultsContainer = document.getElementById('searchModalResults');

  if (!modal || !input || !resultsContainer) return;

  function openModal() {
    modal.classList.add('active');
    input.value = '';
    renderSearchResults('');
    setTimeout(() => input.focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('active');
  }

  openBtns.forEach(b => b.addEventListener('click', openModal));
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      modal.classList.contains('active') ? closeModal() : openModal();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  input.addEventListener('input', (e) => {
    renderSearchResults(e.target.value.toLowerCase().trim());
  });

  function renderSearchResults(query) {
    const filtered = query
      ? SEARCH_INDEX.filter(item => item.title.toLowerCase().includes(query) || item.meta.toLowerCase().includes(query))
      : SEARCH_INDEX;

    if (!filtered.length) {
      resultsContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-subtle);">
          No matching documentation sections found for "${query}".
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = filtered.map(item => `
      <a href="${item.hash}" class="modal-result-item" onclick="document.getElementById('searchModal').classList.remove('active');">
        <span class="result-item-title">${item.title}</span>
        <span class="result-item-meta">${item.meta}</span>
      </a>
    `).join('');
  }
}

/* --------------------------------------------------------------------------
   MOBILE NAVIGATION DRAWER
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const overlay = document.getElementById('mobileDrawerOverlay');
  const closeBtn = document.getElementById('closeMobileNav');

  if (!drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', openDrawer);
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeDrawer);
  }

  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   PRINT / PDF EXPORT HANDLER
   -------------------------------------------------------------------------- */
function initPrintHandler() {
  const printBtns = document.querySelectorAll('.print-doc-btn');
  printBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
}

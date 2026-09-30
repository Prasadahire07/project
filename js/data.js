/* ==========================================================================
   AI & LMS - ENABLED COOPERATIVE CAPACITY BUILDING, ERP & EMPLOYMENT ECOSYSTEM
   Team Name: Sudo_Core | Team ID: 190037 | Problem Statement ID: SIH1608
   Theme: Smart Education | Category: Hardware
   Smart India Hackathon 2024 / 2026 Showcase
   All simulation records are explicitly tagged as DEMO DATA.
   ========================================================================== */

const SUDO_DATA = {
  projectMeta: {
    problemStatementId: "SIH1608",
    problemStatementTitle: "AI & LMS - Enabled Cooperative Capacity Building, ERP & Employment Ecosystem",
    teamName: "Sudo_Core",
    teamId: "190037",
    theme: "Smart Education",
    psCategory: "Hardware",
    coreConcept: "One Participant. One Complete Record.",
    subtitle: "Connecting Training, Verified Skills, Certification, Career Guidance and Livelihood Opportunities in one unified, offline-resilient ecosystem.",
    initiative: "National Cooperative Skilling & Capacity Building Initiative",
    stakeholderCentralLayer: "National Council for Cooperative Training (NCCT), Ministry of Cooperation, Govt. of India"
  },

  // 10 Core Participant Journey Steps with Complete Inspector Data (Input, Processing, Output, Tech)
  journeySteps: [
    {
      id: 1,
      num: "01",
      name: "Register & Identity",
      short: "Aadhaar / e-KYC Identity Binding",
      icon: "user-check",
      accent: "yellow",
      what: "A single, tamper-evident digital identity record is established for the candidate, linked to verified demographic credentials.",
      why: "Eliminates duplicate trainee profiles, phantom enrollments, and scattered records across independent institute silos.",
      how: "Candidate completes identity verification (Aadhaar/e-KYC) and creates their sovereign participant master profile with biometric template mapping.",
      who: "Trainee candidate self-service portal or Institute Helpdesk Registrar.",
      dataGenerated: "Unique Participant ID (e.g. NCCT-2026-IND-08492), Encrypted Identity Hash, Demographic baseline.",
      benefit: "Creates a permanent, portable lifelong training identity recognized across all NCCT institutes.",
      risks: "Data privacy concerns; mitigated by zero-knowledge encrypted storage and role-based access control.",
      scaling: "Horizontally scalable participant registry supporting millions of federated records nationwide.",
      input: "Aadhaar / Gov ID, basic demographic info, biometric template registration",
      processing: "Identity de-duplication, SHA-256 minutiae template hashing, unique ID generation",
      output: "Permanent Participant ID, encrypted master profile, cryptographic auth token",
      technology: "WebAuthn, SHA-256 Hashing, PostgreSQL Master Registry, PWA Registration Client"
    },
    {
      id: 2,
      num: "02",
      name: "Join Programme",
      short: "Batch Nomination & Allocation",
      icon: "briefcase",
      accent: "orange",
      what: "The registered participant is nominated or enrolled into an accredited cooperative or vocational training programme batch.",
      why: "Ensures transparent seat allocation, curriculum tracking, and centralized cohort monitoring for institutes.",
      how: "Institute administrators schedule batches via the ERP module, assigning faculty, course syllabus, and lecture halls.",
      who: "Training Institute (RICM/ICM), Course Coordinators, and Trainee.",
      dataGenerated: "Batch ID, Course Code, Faculty Allocation, Timetable Matrix, Seat Audit Timestamp.",
      benefit: "Live visibility into batch capacity, student-faculty ratios, and training calendar synchronization.",
      risks: "Manual scheduling conflicts; mitigated by automated conflict detection and batch vacancy alerts.",
      scaling: "Central NCCT dashboard can monitor thousands of concurrent batches across 14+ RICMs and 19+ ICMs.",
      input: "Participant ID, Institute selection, Program/Module choice, Sponsor nomination",
      processing: "Eligibility check, automated quota management, timetable slot assignment",
      output: "Confirmed Batch Admission Slip, Class Timetable, Digital Trainee Pass",
      technology: "ERP Batch Scheduler, Role-Based Access Control (RBAC), RESTful Microservice"
    },
    {
      id: 3,
      num: "03",
      name: "Smart Attendance",
      short: "ESP32 + BLE + Biometric Multi-Check",
      icon: "cpu",
      accent: "pink",
      what: "Hardware-assisted attendance recording in classrooms using physical ESP32 microcontrollers, BLE beacons, and optical biometric verification.",
      why: "Traditional roll-calls and basic check-in apps are susceptible to proxy marking, paper register tampering, and geographical spoofing.",
      how: "Learner scans fingerprint on optical biometric reader wired to ESP32; physical presence validated via BLE proximity beacon. If offline, cached locally in flash and synced later.",
      who: "Trainees present in class, Session Trainers, and Classroom IoT Gateways.",
      dataGenerated: "Attendance Timestamp, Device Serial ID, Biometric Match Nonce, Offline Sync Log, Classroom BLE sanity check.",
      benefit: "Transparent, tamper-proof attendance record backed by multi-point validation and local offline resiliency.",
      risks: "Hardware or BLE failure; mitigated by secondary dynamic time-based QR and authenticated trainer manual override.",
      scaling: "Low-cost ESP32 hardware ($4-$6) deployable across rural classrooms without requiring uninterrupted broadband.",
      input: "Fingerprint scan on optical sensor, Bluetooth Low Energy proximity ping",
      processing: "Local minutiae hash matching on ESP32, BLE RSSI signal sanity check, timestamp signing",
      output: "Signed attendance token, classroom presence audit record, local flash log",
      technology: "ESP32 SoC Microcontroller, Optical Biometric Sensor (R307), BLE 4.2/5.0 GATT, SPIFFS/LittleFS"
    },
    {
      id: 4,
      num: "04",
      name: "Learn & Progress",
      short: "Multilingual Content (Online + Offline)",
      icon: "book-open",
      accent: "purple",
      what: "Interactive digital course delivery featuring modular lessons, multimedia resources, and vernacular language accessibility.",
      why: "Rural and cooperative learners often face language barriers and intermittent internet connectivity in tier-2/3 regions.",
      how: "Learners stream or cache modules via PWA/offline storage; system supports Hindi, English, and regional languages with voice-guided prompts.",
      who: "Trainees engaging with coursework, NCCT Faculty monitoring real-time comprehension velocity.",
      dataGenerated: "Module Completion %, Time-on-Task, Content Interaction Heatmaps, Offline Cache Manifests.",
      benefit: "Equitable learning access regardless of geographical location or intermittent rural bandwidth.",
      risks: "Drop-off during self-paced learning; mitigated by automated trainer nudges and gamified milestone badges.",
      scaling: "CDN-backed object storage with edge caching allows rapid distribution of rich training material.",
      input: "Course syllabus selection, lesson engagement, interactive practical exercises",
      processing: "Content delivery optimization, client-side IndexedDB caching, progress calculation",
      output: "Lesson completion flags, reading telemetry, self-paced progress report",
      technology: "Multilingual LMS Engine, Service Workers, Cache API, Text-to-Speech / Audio Guides"
    },
    {
      id: 5,
      num: "05",
      name: "Assess & Evaluate",
      short: "Quizzes, Tests & Practical Rubrics",
      icon: "check-circle",
      accent: "green",
      what: "Continuous formative quizzes, end-of-module summative exams, and hands-on vocational practical assessments.",
      why: "Ensures skills are genuinely acquired and evaluated rather than merely claimed upon certificate issuance.",
      how: "Adaptive question banks test theoretical knowledge while trainers record rubric-based scores for practical cooperative simulations.",
      who: "Trainees, Certified Assessors, and Evaluators.",
      dataGenerated: "Score Breakdowns by Competency Unit, Attempt Durations, Practical Rubric Ratings, Error Frequency Diagnostics.",
      benefit: "Objective, competency-based measurement that directly proves individual skill mastery.",
      risks: "Evaluation bias; mitigated by randomized question distribution and standardized NCCT grading rubrics.",
      scaling: "Automated grading engine processes tens of thousands of simultaneous assessment submissions.",
      input: "Quiz answers, practical task demonstrations, assessor rubric grading inputs",
      processing: "Automated MCQ scoring, rubric matrix normalization, competency grading (Level 1-5)",
      output: "Granular competency scorecard, diagnostic weakness report, verified exam record",
      technology: "Assessment Engine, Adaptive Question Bank, Cryptographic Score Signer"
    },
    {
      id: 6,
      num: "06",
      name: "Get Certified",
      short: "Tamper-Evident QR & Unique ID",
      icon: "award",
      accent: "blue",
      what: "Issuance of a cryptographically signed, verifiable digital certificate carrying a unique verification code and scannable QR.",
      why: "Paper certificates are easily forged, lost, and require tedious manual verification phone calls or letters.",
      how: "Upon passing course criteria, system generates PDF certificate with embedded SHA-256 hash and unique ID registered in NCCT central database.",
      who: "NCCT Certifying Authority, Institute Director, and Graduating Trainee.",
      dataGenerated: "Unique Certificate ID (e.g. NCCT-DEMO-2026-001), Issue Timestamp, Issuing Officer Digital Signature, QR Payload.",
      benefit: "Instant, zero-cost third-party verification for employers in under two seconds.",
      risks: "QR tampering; mitigated by server-side public signature verification against the central NCCT registry.",
      scaling: "Automated generation pipeline capable of issuing millions of credentials without administrative bottlenecks.",
      input: "Validated course completion record, 85%+ verified attendance, passing assessment score",
      processing: "SHA-256 certificate hashing, digital signature generation, QR code synthesis",
      output: "Tamper-evident verifiable PDF certificate, scannable QR code, permanent registry entry",
      technology: "PDF-lib, SHA-256 Cryptography, Dynamic QR Generator, Digital Signature Service"
    },
    {
      id: 7,
      num: "07",
      name: "Build Skill Passport",
      short: "Evidence-Backed Competency Matrix",
      icon: "shield",
      accent: "yellow",
      what: "Automatic synthesis of attendance, course completions, and assessment scores into a dynamic, tamper-evident digital Skill Passport.",
      why: "Resumes only contain self-declared skills; employers cannot distinguish between theoretical awareness and tested competency.",
      how: "The platform binds granular skill tags (e.g. 'Cooperative Accounting', 'Audit Compliance') to actual evaluation marks and attendance metrics.",
      who: "Trainees (as credential owners), Employers, and Cooperative Societies inspecting talent.",
      dataGenerated: "Skill Passport Hash, Competency Level Ratings (Level 1-5), Verified Skill Graph, Audit Trail.",
      benefit: "Provides candidates with an undeniable proof-of-competence that unlocks higher-value economic opportunities.",
      risks: "Skill inflation; prevented by linking every badge directly to underlying test and attendance proofs.",
      scaling: "Portable, interoperable JSON-LD credential schema ready for national credential federations.",
      input: "Aggregated participant history: verified attendance %, exam scores, practical rubrics",
      processing: "Competency level mapping (L1-L5), skill tag categorization, radar chart generation",
      output: "Interactive digital Skill Passport, verifiable credential badges, exportable profile",
      technology: "Competency Matrix Engine, JSON-LD W3C Verifiable Credentials, Vector Radar Graph"
    },
    {
      id: 8,
      num: "08",
      name: "AI Career Guidance",
      short: "AI-Assisted Recommendations & Diagnostics",
      icon: "compass",
      accent: "orange",
      what: "Intelligent analytics engine that analyzes candidate skill proficiencies, identifies learning gaps, and suggests tailored career paths.",
      why: "Rural and vocational learners frequently lack access to dedicated human career counselors and labor market guidance.",
      how: "Machine learning algorithms compare candidate assessment profiles against live cooperative & industry job requirements to recommend next steps.",
      who: "Trainees seeking career direction and Academic Advisors offering targeted mentoring.",
      dataGenerated: "Skill Gap Scores, Recommended Specialization Modules, Cooperative Career Pathway Match Indices.",
      benefit: "Empowers learners with clear, actionable roadmaps to bridge specific skill deficits.",
      risks: "Over-reliance on automated guidance; strictly framed as 'AI-assisted guidance' with human mentor oversight.",
      scaling: "Cloud-hosted recommendation microservice offering sub-second career diagnostic assessments.",
      input: "Trainee Skill Passport, career aspirations, cooperative sector demand benchmarks",
      processing: "Skill gap difference analysis, heuristic match ranking, upskilling roadmap generation",
      output: "Personalized career recommendation report, suggested next courses, job match score",
      technology: "Python AI/ML Recommendation Pipeline, Cosine Similarity Scoring, Heuristic Matcher"
    },
    {
      id: 9,
      num: "09",
      name: "Find Opportunities",
      short: "Job & Cooperative Matching",
      icon: "trending-up",
      accent: "pink",
      what: "Direct marketplace connecting verified candidate skill profiles with job vacancies posted by cooperatives, banks, and enterprises.",
      why: "Solves the traditional disconnect where vocational institutes produce graduates without a direct pipeline to hiring employers.",
      how: "Employers filter candidates by verified competencies (e.g. 'Minimum 85% in Dairy Operations & 90% Attendance'); candidate receives direct invites.",
      who: "Graduates, Cooperative Societies (PACS, Milk Unions, Urban Banks), and Private Employers.",
      dataGenerated: "Opportunity Matches, Application Timestamps, Employer Shortlist Actions, Interview Invites.",
      benefit: "Reduces hiring friction, eliminates bogus resume screening, and speeds up placement for rural youth.",
      risks: "Low initial employer adoption; mitigated by partnering with federated apex cooperative organizations.",
      scaling: "Multi-tenant portal supporting thousands of hiring organizations across diverse economic sectors.",
      input: "Employer job requirement criteria, required skill thresholds, candidate profile filters",
      processing: "Automated candidate-job fit scoring, filter matching, interview dispatch trigger",
      output: "Shortlisted candidates for employer, interview invitations for qualified trainees",
      technology: "Opportunity Matching Portal, Query Match Engine, Automated Notification Service"
    },
    {
      id: 10,
      num: "10",
      name: "Outcome & Training Loop",
      short: "Post-Training Tracking & Course Redesign",
      icon: "repeat",
      accent: "purple",
      what: "Longitudinal tracking of employment outcomes and wage improvements, feeding statistical feedback directly into curriculum updates.",
      why: "Without outcome tracking, training programmes continue teaching obsolete syllabi without knowing real economic impact.",
      how: "System surveys alumni at 3, 6, and 12-month intervals, aggregating placement rates and employer feedback into central Training Intelligence.",
      who: "NCCT Policy Directors, Ministry of Cooperation, Institute Curriculum Boards.",
      dataGenerated: "Employment Rate, Sector Distribution, Average Time-to-Placement, Curriculum Effectiveness Index.",
      benefit: "Enables data-driven governance: underperforming courses are revised, and high-demand skills receive increased funding.",
      risks: "Survey non-response; mitigated by automated WhatsApp/SMS check-ins and cooperative society reporting.",
      scaling: "National macro-level analytics informing nationwide cooperative education budgets and policy decisions.",
      input: "Alumni employment status at 3/6/12 months, employer satisfaction metrics, salary baselines",
      processing: "Longitudinal statistical aggregation, curriculum gap correlation, predictive demand modeling",
      output: "Policy recommendations, course revision triggers, national placement intelligence report",
      technology: "Analytics Data Warehouse, Circular Feedback Engine, Automated Survey Worker"
    }
  ],

  // Grounded Technology Stack (Organized in 8 Strict Categories Mentioned in PPT)
  techStack: {
    frontend: {
      category: "Frontend & Client",
      accent: "yellow",
      description: "Accessible, high-performance, mobile-first interfaces tailored for rural and urban learners.",
      items: [
        { name: "HTML5 & Semantic Markup", role: "Accessible, standards-compliant web structure", tag: "Core" },
        { name: "Modern Vanilla CSS3", role: "Custom Neo-Brutalist design tokens, offset shadows & responsive grid", tag: "Styling" },
        { name: "Modern JavaScript (ES6+)", role: "Lightweight, dependency-free interactive state management", tag: "Logic" },
        { name: "Progressive Web App (PWA)", role: "Installable on low-end smartphones with offline Service Workers", tag: "Offline" }
      ]
    },
    backend: {
      category: "Backend & API Services",
      accent: "orange",
      description: "Robust microservices architecture orchestrating admissions, ERP workflows, and analytics.",
      items: [
        { name: "RESTful Microservices", role: "Modular API architecture for batch, user, and attendance endpoints", tag: "API" },
        { name: "Node.js / Python Runtime", role: "High-concurrency event processing and analytical background tasks", tag: "Runtime" },
        { name: "Differential Sync Engine", role: "Handles offline attendance conflict resolution via CRDTs", tag: "Sync" },
        { name: "Event-Driven Worker", role: "Asynchronous processing for certificate generation and notifications", tag: "Workers" }
      ]
    },
    database: {
      category: "Database & Storage",
      accent: "pink",
      description: "Hybrid data architecture spanning local classroom edge storage to central federated data stores.",
      items: [
        { name: "Edge SQLite & IndexedDB", role: "Zero-latency local attendance and course storage on offline devices", tag: "Edge Storage" },
        { name: "PostgreSQL Master Registry", role: "ACID-compliant relational store for national participant records", tag: "Central DB" },
        { name: "Redis In-Memory Cache", role: "Sub-millisecond session caching and live attendance counters", tag: "Caching" },
        { name: "SPIFFS / LittleFS Flash", role: "Non-volatile local storage directly on ESP32 microcontrollers", tag: "Microcontroller" }
      ]
    },
    hardware: {
      category: "Hardware & IoT",
      accent: "purple",
      description: "Low-cost, rugged classroom presence terminals designed for Indian rural training centers.",
      items: [
        { name: "ESP32 SoC Microcontroller", role: "Dual-core 240MHz chip with built-in Wi-Fi and Bluetooth Low Energy", tag: "$4-$6 Low Cost" },
        { name: "Optical Biometric Sensor (R307)", role: "High-accuracy optical fingerprint scanner for student check-ins", tag: "Biometrics" },
        { name: "BLE Beacon Transceiver", role: "Classroom proximity broadcasting and validation to prevent proxies", tag: "BLE Proximity" },
        { name: "OLED Status Display & Buzzer", role: "Immediate audio-visual feedback for successful trainee scan", tag: "HMI" }
      ]
    },
    communication: {
      category: "Communication & Networking",
      accent: "blue",
      description: "Multi-protocol networking ensuring seamless data transfer across online and offline environments.",
      items: [
        { name: "Bluetooth Low Energy (BLE 4.2/5.0)", role: "Secure proximity handshake between student device and ESP32 gateway", tag: "Wireless" },
        { name: "HTTPS & TLS 1.3 Encryption", role: "End-to-end encrypted transport for all API payloads and credentials", tag: "Security" },
        { name: "WebSockets Protocol", role: "Real-time attendance telemetry stream to trainer and institute cockpits", tag: "Real-Time" },
        { name: "Store-and-Forward Sync", role: "Batched delta upload protocol when internet connection is restored", tag: "Fault-Tolerant" }
      ]
    },
    aiml: {
      category: "AI & Machine Learning",
      accent: "green",
      description: "Data-driven intelligence supporting personalized skilling, career guidance, and job matching.",
      items: [
        { name: "Competency Gap Diagnostics", role: "Evaluates individual trainee strengths against industry standards", tag: "Analytics" },
        { name: "Career Pathway Recommender", role: "Recommends next-level modules tailored to student aptitude", tag: "Recommendation" },
        { name: "Vector-Based Job Matching", role: "Matches verified Skill Passport attributes with cooperative vacancies", tag: "Matching" },
        { name: "Curriculum Optimization ML", role: "Aggregates outcome data to detect obsolete training modules", tag: "Intelligence" }
      ]
    },
    cloud: {
      category: "Cloud & Infrastructure",
      accent: "yellow",
      description: "National federated infrastructure scalable across all NCCT institutes nationwide.",
      items: [
        { name: "Federated Institute Cloud", role: "Multi-tenant architecture serving 14+ RICMs, 19+ ICMs, and PACS", tag: "Federation" },
        { name: "Edge Micro-Gateways", role: "Classroom hardware gateways running autonomous edge logic", tag: "Edge Computing" },
        { name: "Distributed Object Storage", role: "Secure storage for verifiable PDF certificates and multimedia content", tag: "Storage" },
        { name: "Automated Backup & Disaster Recovery", role: "Geographically replicated data snapshots ensuring zero data loss", tag: "Resilience" }
      ]
    },
    tools: {
      category: "Security & Dev Tools",
      accent: "orange",
      description: "Rigorous engineering standards for data privacy, fraud prevention, and auditability.",
      items: [
        { name: "SHA-256 Cryptographic Hashing", role: "Tamper-evident sealing of certificates and attendance audit trails", tag: "Cryptography" },
        { name: "Dynamic Rolling QR Engine", role: "Time-expiring QR fallback mechanism preventing screenshot fraud", tag: "Anti-Proxy" },
        { name: "Role-Based Access Control (RBAC)", role: "Strict boundary separation: Trainee, Trainer, Institute, Admin, Employer", tag: "Governance" },
        { name: "Zero-Knowledge Minutiae Templates", role: "Biometric security: raw fingerprint images are never stored or transmitted", tag: "Privacy" }
      ]
    }
  },

  // 6 Stages of End-to-End Data Flow (Interactive Step-Through)
  dataFlowStages: [
    {
      stage: 1,
      name: "Input Layer",
      icon: "log-in",
      accent: "yellow",
      title: "Classroom & User Telemetry Capture",
      source: "Trainee Fingerprint + BLE Beacon Ping + Quiz Submissions",
      description: "Raw telemetry enters the edge node. The optical fingerprint sensor captures the ridge minutiae, while the BLE antenna registers the candidate's mobile device signal within a 5-meter classroom radius.",
      packet: "{ student_id: 'NCCT-2026-08492', sensor_rssi: '-58dBm', timestamp: 1727712000, device_hw: 'ESP32-NODE-04' }"
    },
    {
      stage: 2,
      name: "Processing Layer",
      icon: "cpu",
      accent: "orange",
      title: "Edge Cryptographic Validation & Hashing",
      source: "ESP32 FreeRTOS Firmware / Local Browser Worker",
      description: "The ESP32 SoC extracts a one-way mathematical minutiae template hash. It verifies that the BLE proximity ping and biometric match occur simultaneously, eliminating physical proxy attendance.",
      packet: "{ minutiae_hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', validity: true, nonce: '94a1b8' }"
    },
    {
      stage: 3,
      name: "Communication Layer",
      icon: "radio",
      accent: "pink",
      title: "Secure Edge-to-Gateway Transmission",
      source: "TLS 1.3 / BLE GATT / Local Fallback Queue",
      description: "If active internet connectivity is present, the attendance event is transmitted over TLS 1.3 to the institute gateway. If offline, the event is written into non-volatile SPIFFS flash buffer.",
      packet: "{ protocol: 'TLS_1.3_AES_256_GCM', status: 'transmitting', edge_queue_pending: 0, sync_flag: 'IMMEDIATE' }"
    },
    {
      stage: 4,
      name: "Backend Layer",
      icon: "server",
      accent: "purple",
      title: "ERP Business Logic & Ledger Verification",
      source: "Unified RESTful API Microservices",
      description: "Backend validates the classroom timetable matrix, checks that the trainee is enrolled in Batch B1, increments the attendance count, and computes the rolling attendance percentage.",
      packet: "{ batch_id: 'RICM-BLR-2026-B1', attendance_rate: '94.8%', milestone_badge: 'LEVEL_4_UNLOCKED', rbac: 'VERIFIED' }"
    },
    {
      stage: 5,
      name: "Database Layer",
      icon: "database",
      accent: "blue",
      title: "Master Ledger & Skill Passport Update",
      source: "PostgreSQL Master Cluster & Redis Cache",
      description: "The permanent participant record is updated in the central registry. Redis broadcasts a real-time event to the trainer cockpit and NCCT HQ national monitoring radar.",
      packet: "{ ledger_commit_hash: '7a9c0f3d7b1e5a8c2f4d6b0e9a1c3f5d', replica_state: 'SYNCED', redis_pubsub: 'EMITTED' }"
    },
    {
      stage: 6,
      name: "Output Layer",
      icon: "layout",
      accent: "green",
      title: "Verified Skill Passport & Live Cockpits",
      source: "Student Mobile App, Employer Portal, NCCT Radar",
      description: "Trainee sees immediate attendance green checkmark. If graduation threshold is achieved, a tamper-evident digital certificate with scannable QR is issued and matched with cooperative employers.",
      packet: "{ cert_id: 'NCCT-DEMO-2026-001', qr_url: 'https://ncct.gov.in/verify?id=NCCT-DEMO-2026-001', match_score: 96 }"
    }
  ],

  // 6 Real Project Benefits (Direct from PPT)
  benefits: [
    {
      title: "Operational Efficiency",
      metric: "90% Faster",
      desc: "Eliminates physical registers, manual paper tallies, and phone-call certificate verifications across all 33+ training institutes.",
      icon: "zap",
      accent: "yellow"
    },
    {
      title: "Data Integrity & Accuracy",
      metric: "100% Audit Proof",
      desc: "Hardware multi-check (biometric + BLE) prevents proxy attendance; cryptographic hashing eliminates forged certificates.",
      icon: "shield-check",
      accent: "orange"
    },
    {
      title: "Automated Lifelong Record",
      metric: "One Single ID",
      desc: "One participant maintains one cumulative skill history across multiple batches, courses, and institutes nationwide.",
      icon: "user-check",
      accent: "pink"
    },
    {
      title: "Rural Offline Resilience",
      metric: "100% Offline Capable",
      desc: "Autonomous local flash storage and differential sync ensure uninterrupted classroom operation during power or broadband outages.",
      icon: "wifi-off",
      accent: "purple"
    },
    {
      title: "Direct Livelihood Matching",
      metric: "3x Placement Velocity",
      desc: "Directly bridges the gap between certified vocational skills and job openings in cooperative societies, PACS, and banks.",
      icon: "trending-up",
      accent: "green"
    },
    {
      title: "Data-Driven Governance",
      metric: "Real-Time Radar",
      desc: "Longitudinal outcome loop provides NCCT and the Ministry of Cooperation with empirical data to update outdated course syllabi.",
      icon: "bar-chart-2",
      accent: "blue"
    }
  ],

  // Visual Roadmap: Future Scope (From PPT)
  futureScopePhases: [
    {
      phase: "Phase 1: Current System",
      badge: "Completed Prototype",
      accent: "yellow",
      timeline: "Q3 - Q4 2026",
      title: "Core Ecosystem & Hardware Prototyping",
      milestones: [
        "ESP32 + BLE + Biometric attendance hardware prototype verified",
        "Unified Participant Registry with master ID generation",
        "Multilingual LMS with offline lesson caching",
        "Tamper-evident certificate generator with SHA-256 QR codes",
        "Interactive stakeholder cockpits for Trainees, Faculty, and Admin"
      ]
    },
    {
      phase: "Phase 2: Next Improvement",
      badge: "Immediate Roadmap",
      accent: "orange",
      timeline: "Q1 - Q2 2027",
      title: "Pilot Rollout & Cooperative Integration",
      milestones: [
        "Pilot deployment across 5 selected RICMs and ICMs",
        "Direct API integration with National PACS Computerization database",
        "Vernacular voice assistant support for 8 regional Indian languages",
        "WhatsApp / SMS micro-check-ins for 3-month post-training employment tracking"
      ]
    },
    {
      phase: "Phase 3: Advanced Features",
      badge: "Mid-Term Expansion",
      accent: "pink",
      timeline: "Q3 - Q4 2027",
      title: "National Credential Federation & AI Tuning",
      milestones: [
        "Integration with India Stack / DigiLocker and APAAR / ABC Credential Registry",
        "Fine-tuned LLM career guidance counselor customized for cooperative vocations",
        "Automated rubric assessment using voice and video simulation analysis",
        "Predictive skill gap heatmaps for state-level cooperative federations"
      ]
    },
    {
      phase: "Phase 4: Future Expansion",
      badge: "Long-Term Vision",
      accent: "purple",
      timeline: "2028 and Beyond",
      title: "Pan-India Cooperative Skilling Grid",
      milestones: [
        "Nationwide deployment across all 14 RICMs, 19 ICMs, and affiliated universities",
        "Cross-border cooperative vocational accreditation with international bodies (ICA)",
        "Decentralized verifiable credential network for rural cooperatives",
        "Full autonomous curriculum recommendation engine linking real-time market wages to training syllabi"
      ]
    }
  ],

  // Presentation Mode: 10 Curated Evaluation Slides for Hackathon Judges
  presentationSlides: [
    {
      id: 1,
      slideNumber: "01 / 10",
      tag: "Title & Executive Summary",
      title: "AI & LMS-Enabled Cooperative Capacity Building, ERP & Employment Ecosystem",
      subtitle: "Team Sudo_Core • Team ID: 190037 • Problem Statement ID: SIH1608 • Theme: Smart Education / Hardware",
      bullets: [
        "Core Philosophy: 'One Participant. One Complete Record.'",
        "Primary Stakeholder: National Council for Cooperative Training (NCCT), Ministry of Cooperation, Govt. of India.",
        "The Big Idea: Transforming fragmented vocational training into an integrated, offline-resilient, tamper-evident ecosystem.",
        "Key Deliverables: Hardware Smart Attendance (ESP32), Unified LMS/ERP, Verified Skill Passport, AI Career Matching, and Circular Training Intelligence."
      ],
      diagram: "HERO_SUMMARY"
    },
    {
      id: 2,
      slideNumber: "02 / 10",
      tag: "Problem Statement",
      title: "The Dilemma: Why Current Training Systems Fail",
      subtitle: "Critical gaps across India's cooperative and vocational training institutions",
      bullets: [
        "Scattered Records: Institutes maintain disconnected paper registers and spreadsheets; trainee skilling history is lost.",
        "Vulnerable Attendance: Traditional sign-in and basic mobile check-ins are prone to proxy marking and absence masking.",
        "Certificates as Dead Ends: Paper certificates are easily forged, static, and lack proof of practical competency.",
        "No Direct Livelihood Pipeline: Disconnect between graduated students and hiring cooperative societies (PACS, Milk Unions, Urban Banks).",
        "Missing Outcome Loop: Authorities have zero automated data on whether training translates into real employment or wage growth."
      ],
      diagram: "PROBLEM_DIAGRAM"
    },
    {
      id: 3,
      slideNumber: "03 / 10",
      tag: "Proposed Solution",
      title: "Our Proposed Solution: The 5 Integrated Pillars",
      subtitle: "UNIFIED PLATFORM = LMS + ERP + SMART PRESENCE + SKILL PASSPORT + CAREER MATCHING",
      bullets: [
        "Pillar 1: Learning Management (LMS) with vernacular multilingual audio and offline caching.",
        "Pillar 2: Academic ERP managing batches, faculty scheduling, and compliance across institutes.",
        "Pillar 3: Smart Presence hardware terminal (ESP32 + BLE + Biometrics) with offline flash storage.",
        "Pillar 4: Verified Skill Passport replacing static diplomas with evidence-backed competency scores.",
        "Pillar 5: AI Career Guidance & Opportunity Matching connecting certified talent to live jobs."
      ],
      diagram: "SOLUTION_PILLARS"
    },
    {
      id: 4,
      slideNumber: "04 / 10",
      tag: "Project Workflow",
      title: "The 10-Stage Trainee Lifecycle Journey",
      subtitle: "From registration through smart attendance, certification, and post-training livelihood tracking",
      bullets: [
        "Stage 01-03: Aadhaar Registration -> Batch Enrollment -> ESP32 Multi-Check Attendance.",
        "Stage 04-06: Multilingual Learning -> Formative Evaluation -> Tamper-Evident SHA-256 Certification.",
        "Stage 07-08: Evidence-Backed Skill Passport Synthesis -> AI Skill Gap Career Guidance.",
        "Stage 09-10: Cooperative Job Placement -> Circular Outcome Feedback Loop to improve curriculum."
      ],
      diagram: "WORKFLOW_FLOW"
    },
    {
      id: 5,
      slideNumber: "05 / 10",
      tag: "System Architecture",
      title: "Proposed Technical Architecture: Multi-Tier Design",
      subtitle: "Divided strictly into verified technologies cited in the project proposal",
      bullets: [
        "Client Layer: Mobile PWA, Classroom IoT terminal, Institute Portal, NCCT Ministry Oversight Radar.",
        "Hardware Edge Layer: ESP32 SoC (240MHz Dual-Core), Optical Biometric Scanner (R307), BLE 4.2/5.0 beacon, local SPIFFS cache.",
        "API & Backend Layer: RESTful microservices, Event-driven architecture, Differential sync worker.",
        "Database Layer: Local SQLite/IndexedDB edge stores + Central PostgreSQL Master + Redis Cache.",
        "Security & Verification Layer: SHA-256 cryptographic hashes, zero-knowledge minutiae, RBAC governance."
      ],
      diagram: "ARCHITECTURE_TIERS"
    },
    {
      id: 6,
      slideNumber: "06 / 10",
      tag: "Hardware Innovation",
      title: "Smart Attendance Terminal (ESP32 + BLE + Biometrics)",
      subtitle: "Rugged, low-cost ($4-$6) hardware engineered for remote Indian classrooms",
      bullets: [
        "Multi-Check Validation: Fingerprint match + physical BLE classroom beacon proximity prevents proxy attendance.",
        "100% Offline-First: Stores hundreds of attendance records in local flash during broadband outages.",
        "Zero-Knowledge Biometrics: Raw fingerprint images are never stored or transmitted; only one-way mathematical minutiae hashes.",
        "Redundant Fallback: Dynamic time-expiring rolling QR code + supervisor manual override with digital audit logs."
      ],
      diagram: "HARDWARE_BLOCK"
    },
    {
      id: 7,
      slideNumber: "07 / 10",
      tag: "Credentials & Verification",
      title: "Verified Skill Passport & Tamper-Evident Certification",
      subtitle: "Instant third-party verification for employers in under two seconds",
      bullets: [
        "Dynamic Competency Matrix: Binds granular skills (e.g. Cooperative Accounting) directly to exam scores and attendance %.",
        "SHA-256 Sealed Credentials: Certificates embedded with cryptographic hashes registered in NCCT central ledger.",
        "Scannable QR Verification: Employers scan QR to verify authenticity instantly without phone calls or letters.",
        "Standardized Credential Schema: Interoperable JSON-LD format ready for DigiLocker and National Credential Registries."
      ],
      diagram: "CERTIFICATE_PREVIEW"
    },
    {
      id: 8,
      slideNumber: "08 / 10",
      tag: "Interactive Demos",
      title: "Live Stakeholder Dashboards (5 Dedicated Cockpits)",
      subtitle: "Real-time decision intelligence tailored for every ecosystem participant",
      bullets: [
        "Trainee Cockpit: Attendance rate, course milestones, Skill Passport badges, and matched job openings.",
        "Trainer Cockpit: Live attendance telemetry, quiz comprehension scores, and early drop-off warning alerts.",
        "Institute Cockpit: Multi-batch rosters, ESP32 device health, and certificate dispatch records.",
        "NCCT Ministry Cockpit: National macro-level skilling radar, regional placement analytics, and critical skill gap alerts.",
        "Employer Portal: Competency-based talent discovery, 1-click verification, and direct interview invitation pipeline."
      ],
      diagram: "DASHBOARD_PREVIEW"
    },
    {
      id: 9,
      slideNumber: "09 / 10",
      tag: "Feasibility & Risks",
      title: "Feasibility, Scalability & Concrete Risk Mitigations",
      subtitle: "Engineered for real-world constraints across rural and urban institutions",
      bullets: [
        "Risk 1 (Fragmented Data): Addressed via standardized RESTful JSON-LD adapter microservices.",
        "Risk 2 (Poor Internet): Addressed via Offline-First architecture with local SQLite and differential auto-sync.",
        "Risk 3 (Digital Literacy): Addressed via extreme high-contrast minimal UI and vernacular audio guidance.",
        "Risk 4 (Biometric Privacy): Addressed via irreversible one-way minutiae hashes; raw biometrics are discarded.",
        "Risk 5 (Hardware Failure): Addressed via multi-tier fallback: dynamic QR and authenticated supervisor override."
      ],
      diagram: "RISKS_MATRIX"
    },
    {
      id: 10,
      slideNumber: "10 / 10",
      tag: "Impact & Team",
      title: "Measurable Impact, Future Roadmap & Team Sudo_Core",
      subtitle: "Transforming the national cooperative training landscape with data-driven governance",
      bullets: [
        "Measurable Impact: 90% faster administrative overhead, 100% audit-proof attendance, 3x faster hiring for rural youth.",
        "Strategic Roadmap: Phase 1 Prototype -> Phase 2 Pilot Rollout -> Phase 3 National Credential Integration -> Phase 4 Pan-India Grid.",
        "Team Sudo_Core (Team ID: 190037): Led by dedicated engineers across System Architecture, Embedded IoT, LMS, AI, Frontend, and Security.",
        "Conclusion: A unified, production-ready GovTech blueprint ready to scale across NCCT and the Ministry of Cooperation."
      ],
      diagram: "TEAM_CREDITS"
    }
  ],

  // Demo Certificates for the Interactive Verification Tool
  demoCertificates: {
    "NCCT-DEMO-2026-001": {
      id: "NCCT-DEMO-2026-001",
      candidateName: "Aarav Sharma",
      programme: "Diploma in Cooperative Banking & Digital Finance",
      batch: "RICM-BLR-2026-B1",
      institute: "Regional Institute of Cooperative Management (RICM), Bengaluru",
      issueDate: "14 August 2026",
      status: "Verified Authentic",
      grade: "Grade A+ (Distinction)",
      attendanceRecord: "94.8% Verified Present (ESP32 Hardware Multi-Check)",
      verifiedSkills: ["Cooperative Accounting", "PACS Automation", "RBI Regulatory Compliance", "Financial Risk Audit"],
      certifyingAuthority: "National Council for Cooperative Training (NCCT), New Delhi",
      hash: "8f4a9b2c1d3e5f7a0b2c4e6f8a1c3e5d7b9a0c2e4f6a8b1c3d5e7f9a0b2c4e6f",
      verificationMethod: "Hardware-backed Cryptographic Proof + Central NCCT Ledger"
    },
    "NCCT-DEMO-2026-002": {
      id: "NCCT-DEMO-2026-002",
      candidateName: "Priya Patel",
      programme: "Certificate in Rural Dairy Cooperative Supply Chain & Logistics",
      batch: "ICM-GND-2026-D4",
      institute: "Institute of Cooperative Management (ICM), Gandhinagar",
      issueDate: "02 September 2026",
      status: "Verified Authentic",
      grade: "Grade A (Honours)",
      attendanceRecord: "91.2% Verified Present (ESP32 + BLE Verified)",
      verifiedSkills: ["Cold Chain Monitoring", "Milk Union ERP", "Quality Assurance Standards", "Inventory Optimization"],
      certifyingAuthority: "National Council for Cooperative Training (NCCT), New Delhi",
      hash: "3b7c9e1f5a2d8e0c4f6a8b1d3e5c7a9b0d2f4e6a8c1b3d5f7e9a0c2d4f6b8a1c",
      verificationMethod: "Hardware-backed Cryptographic Proof + Central NCCT Ledger"
    },
    "NCCT-DEMO-2026-003": {
      id: "NCCT-DEMO-2026-003",
      candidateName: "Rohit Verma",
      programme: "Executive Training in Cooperative Law & Governance",
      batch: "ICM-LKO-2026-L2",
      institute: "Institute of Cooperative Management (ICM), Lucknow",
      issueDate: "19 July 2026",
      status: "Verified Authentic",
      grade: "Grade B+ (Merit)",
      attendanceRecord: "88.6% Verified Present (Multi-Check Biometric)",
      verifiedSkills: ["Multi-State Cooperative Societies Act", "Dispute Resolution", "General Body Meeting Compliance"],
      certifyingAuthority: "National Council for Cooperative Training (NCCT), New Delhi",
      hash: "6e2a8d1c5f9b0e3a7c4f1d8b2e6a9c0f3d7b1e5a8c2f4d6b0e9a1c3f5d7b9e2a",
      verificationMethod: "Hardware-backed Cryptographic Proof + Central NCCT Ledger"
    }
  },

  // Demo Profiles for Skill Passport Visualizer
  demoProfiles: [
    {
      id: "NCCT-2026-IND-08492",
      name: "Aarav Sharma",
      role: "Trainee Candidate",
      program: "Diploma in Cooperative Banking & Digital Finance",
      institute: "RICM Bengaluru • NCCT",
      avatarInitials: "AS",
      attendanceRate: "94.8%",
      assessmentsPassed: "12 / 12",
      verifiedSkillCount: "8 Skills",
      competencyLevel: "Advanced (Level 4)",
      careerInterests: ["Cooperative Credit Society Officer", "PACS Financial Auditor", "Fintech Inclusion Lead"],
      skills: [
        { name: "Cooperative Accounting", level: 5, verifiedBy: "Exam #CBA-401 (96%)" },
        { name: "PACS Computerization", level: 4, verifiedBy: "Practical Rubric #PR-88" },
        { name: "Credit Risk Evaluation", level: 4, verifiedBy: "Exam #CRE-302 (89%)" },
        { name: "Statutory Audit & KYC", level: 5, verifiedBy: "Field Assessment #FA-12" },
        { name: "Core Banking Systems", level: 4, verifiedBy: "Lab Simulation #SIM-04" },
        { name: "Microfinance Governance", level: 3, verifiedBy: "Module Quiz #MFG-09" }
      ],
      attendanceBreakdown: {
        biometricVerified: 92,
        bleAssisted: 95,
        manualFallback: 2,
        totalClasses: 120
      }
    },
    {
      id: "NCCT-2026-IND-09144",
      name: "Priya Patel",
      role: "Trainee Candidate",
      program: "Certificate in Rural Dairy Cooperative Supply Chain",
      institute: "ICM Gandhinagar • NCCT",
      avatarInitials: "PP",
      attendanceRate: "91.2%",
      assessmentsPassed: "8 / 8",
      verifiedSkillCount: "6 Skills",
      competencyLevel: "Proficient (Level 3)",
      careerInterests: ["Dairy Logistics Manager", "Procurement Specialist", "Quality Control Supervisor"],
      skills: [
        { name: "Cold Chain Traceability", level: 4, verifiedBy: "Lab Test #CCT-101 (92%)" },
        { name: "Milk Union Operations", level: 4, verifiedBy: "Field Internship #MU-02" },
        { name: "Digital Weighing Integration", level: 3, verifiedBy: "Practical Exam #DWI-07" },
        { name: "Farmer Payout Systems", level: 4, verifiedBy: "Assessment #FPS-202" }
      ],
      attendanceBreakdown: {
        biometricVerified: 88,
        bleAssisted: 91,
        manualFallback: 1,
        totalClasses: 80
      }
    }
  ],

  // Demo Job Opportunities with Verified Skills Matching
  demoJobs: [
    {
      id: "JOB-2026-COOP-101",
      title: "Junior PACS Operations Officer",
      organization: "Karnataka State Apex Cooperative Bank Ltd.",
      location: "Bengaluru / Tumakuru (Rural Division)",
      sector: "Cooperative Banking & PACS",
      matchScore: 96,
      requiredSkills: ["Cooperative Accounting", "PACS Computerization", "Statutory Audit & KYC"],
      matchedSkills: ["Cooperative Accounting", "PACS Computerization", "Statutory Audit & KYC"],
      gapSkills: [],
      salaryBand: "₹25,000 - ₹32,000 / month (Govt Scale)",
      badge: "Top AI Match"
    },
    {
      id: "JOB-2026-COOP-102",
      title: "Cooperative Credit Analyst",
      organization: "District Central Cooperative Bank (DCCB)",
      location: "Mysuru, Karnataka",
      sector: "Financial Inclusion",
      matchScore: 89,
      requiredSkills: ["Credit Risk Evaluation", "Core Banking Systems", "Financial Modeling"],
      matchedSkills: ["Credit Risk Evaluation", "Core Banking Systems"],
      gapSkills: ["Financial Modeling"],
      salaryBand: "₹28,000 - ₹35,000 / month",
      badge: "High Match"
    },
    {
      id: "JOB-2026-COOP-103",
      title: "Digital Financial Literacy Coordinator",
      organization: "National Cooperative Union of India (NCUI) Project",
      location: "Mandya, Karnataka",
      sector: "Rural Extension & Outreach",
      matchScore: 82,
      requiredSkills: ["Microfinance Governance", "Vernacular Communication", "Field Audits"],
      matchedSkills: ["Microfinance Governance"],
      gapSkills: ["Vernacular Communication (Tamil/Telugu)", "Field Audits"],
      salaryBand: "₹22,000 - ₹26,000 / month",
      badge: "Eligible with Upskilling"
    }
  ],

  // 5 Switchable Interactive Dashboards (All Mock Data Clearly Stamped DEMO DATA)
  dashboards: {
    trainee: {
      name: "Trainee Dashboard",
      subtitle: "Personal Learning, Verified Attendance & Opportunity Cockpit",
      user: "Aarav Sharma (Trainee ID: NCCT-2026-IND-08492)",
      kpis: [
        { label: "Verified Attendance", value: "94.8%", trend: "↑ 2.1% from last month", status: "success" },
        { label: "Completed Courses", value: "3 of 4", trend: "75% Completion Rate", status: "neutral" },
        { label: "Verified Competencies", value: "8 Badges", trend: "Level 4 Mastery", status: "success" },
        { label: "Matched Opportunities", value: "6 Live Jobs", trend: "3 Interview Invitations", status: "success" }
      ],
      recentActivity: [
        { event: "ESP32 Verified Attendance logged for 'Advanced Financial Inclusion'", time: "Today, 09:14 AM" },
        { event: "Passed Summative Assessment: 'Credit Risk Analysis' with 91%", time: "Yesterday, 04:30 PM" },
        { event: "Received Verified Certificate NCCT-DEMO-2026-001 from NCCT", time: "3 days ago" },
        { event: "AI Recommendation: Enrol in 'Agricultural Commodity Trading' to unlock 4 more openings", time: "5 days ago" }
      ]
    },

    trainer: {
      name: "Trainer / Faculty Dashboard",
      subtitle: "Cohort Progress, Attendance Telemetry & Early Intervention Alerts",
      user: "Prof. S. R. Deshmukh (Senior Faculty, RICM Bengaluru)",
      kpis: [
        { label: "Active Cohort Size", value: "48 Trainees", trend: "Batch B1 (Banking)", status: "neutral" },
        { label: "Average Session Attendance", value: "93.4%", trend: "ESP32 Hardware Verified", status: "success" },
        { label: "Comprehension Index", value: "86.2%", trend: "Formative Quiz Avg", status: "success" },
        { label: "Learners Needing Support", value: "3 Trainees", trend: "Flagged for Mentoring", status: "warning" }
      ],
      supportAlerts: [
        { student: "Karan Singhal", issue: "Attendance dipped to 72% in past 10 days (BLE Log)", action: "Schedule Counseling" },
        { student: "Sunita Mahajan", issue: "Scored 58% on 'Statutory Cooperative Audit' module", action: "Assign Remedial Lab" },
        { student: "Deepak Rawat", issue: "Missed 2 consecutive practical rubric evaluations", action: "Trigger SMS Alert" }
      ]
    },

    institute: {
      name: "Training Institute Dashboard",
      subtitle: "Campus-Wide Operational Management & Compliance Overview",
      user: "RICM Bengaluru (Directorate of Cooperative Training)",
      kpis: [
        { label: "Total Trainees Enrolled", value: "420 Candidates", trend: "Across 8 Active Batches", status: "neutral" },
        { label: "Active Hardware Terminals", value: "14 ESP32 Units", trend: "100% Operational & Synced", status: "success" },
        { label: "Overall Completion Rate", value: "91.8%", trend: "↑ 4.5% vs Prev Academic Year", status: "success" },
        { label: "Certificates Dispatched", value: "386 Verified", trend: "Zero Tamper Fraud Incidents", status: "success" }
      ],
      batchSummary: [
        { batch: "RICM-BLR-2026-B1", prog: "Cooperative Banking", strength: 48, attRate: "94.8%", status: "In Progress" },
        { batch: "RICM-BLR-2026-B2", prog: "PACS Computerization", strength: 60, attRate: "92.1%", status: "In Progress" },
        { batch: "RICM-BLR-2026-D1", prog: "Agri-Cooperative Marketing", strength: 45, attRate: "89.4%", status: "Final Exams" },
        { batch: "RICM-BLR-2026-E3", prog: "Executive Cooperative Law", strength: 35, attRate: "96.5%", status: "Completed" }
      ]
    },

    admin: {
      name: "NCCT Admin / Ministry Dashboard",
      subtitle: "National Federated Cooperative Training Intelligence & Policy Radar",
      user: "National Council for Cooperative Training (NCCT HQ, New Delhi)",
      kpis: [
        { label: "Federated Training Centres", value: "33 Institutes", trend: "14 RICMs + 19 ICMs", status: "neutral" },
        { label: "Total Certified Workforce", value: "14,820 Trainees", trend: "Verified Skill Passports", status: "success" },
        { label: "Post-Training Employment Rate", value: "78.4%", trend: "Tracked at 6-month Window", status: "success" },
        { label: "Critical National Skill Gap", value: "PACS FinTech ERP", trend: "3,200 Surplus Vacancies", status: "warning" }
      ],
      regionalBreakdown: [
        { region: "Southern Zone (Bengaluru, Chennai, Hyderabad)", institutes: 7, enrollment: 3420, placementRate: "84.2%" },
        { region: "Western Zone (Gandhinagar, Pune, Nagpur)", institutes: 6, enrollment: 2980, placementRate: "81.6%" },
        { region: "Northern Zone (Chandigarh, Lucknow, Dehradun)", institutes: 8, enrollment: 3810, placementRate: "76.8%" },
        { region: "Eastern & North-East Zone (Kolkata, Guwahati, Patna)", institutes: 12, enrollment: 4610, placementRate: "73.1%" }
      ]
    },

    employer: {
      name: "Employer & Cooperative Portal",
      subtitle: "Talent Discovery, Skill Verification & Direct Hiring Pipeline",
      user: "Apex Cooperative Banking Federation / Dairy Unions",
      kpis: [
        { label: "Active Job Listings", value: "18 Positions", trend: "Across 4 Cooperative Sectors", status: "neutral" },
        { label: "Verified Candidates Matched", value: "142 Applicants", trend: ">85% Competency Match", status: "success" },
        { label: "Instant Verifications Run", value: "318 Inquiries", trend: "100% Cryptographic Match", status: "success" },
        { label: "Interviews Scheduled", value: "24 Candidates", trend: "Avg Time-to-Hire: 6 Days", status: "success" }
      ],
      liveTalentQuery: [
        { candidate: "Aarav Sharma", id: "NCCT-2026-IND-08492", match: "96%", institute: "RICM Bengaluru", status: "Shortlisted" },
        { candidate: "Meenakshi Sundaram", id: "NCCT-2026-IND-08503", match: "94%", institute: "RICM Bengaluru", status: "Shortlisted" },
        { candidate: "Ravi Teja", id: "NCCT-2026-IND-08611", match: "91%", institute: "ICM Hyderabad", status: "Under Review" },
        { candidate: "Sunita Mahajan", id: "NCCT-2026-IND-08544", match: "87%", institute: "RICM Bengaluru", status: "Interview Invited" }
      ]
    }
  },

  // 5 Explicit Risks & Concrete Engineering Mitigations from the PPT
  risksAndMitigation: [
    {
      id: 1,
      risk: "Fragmented Data & Legacy Systems",
      detail: "Historical training registers, disparate excel sheets, and legacy institute databases remain siloed across individual RICMs and ICMs without interoperability.",
      mitigation: "Standardized Open Data Schemas & Integration APIs",
      mitigationDetail: "Deploy lightweight RESTful adapter microservices and standardized JSON-LD schema definitions that seamlessly map legacy institute databases into the unified NCCT participant registry without requiring complete legacy database rewrites."
    },
    {
      id: 2,
      risk: "Poor Internet Connectivity in Rural Areas",
      detail: "Rural and remote cooperative training centres face frequent broadband outages, high latency, and power fluctuations that disrupt cloud-only web applications.",
      mitigation: "Offline-First Edge Architecture with Differential Sync",
      mitigationDetail: "All classroom clients and ESP32 terminals store attendance, assessments, and learning logs in local SQLite / IndexedDB edge databases. When internet connectivity is restored, an encrypted differential sync worker automatically merges records with conflict-free replicated data types (CRDTs)."
    },
    {
      id: 3,
      risk: "User Adoption & Low Digital Literacy",
      detail: "Trainees, rural cooperative secretaries, and senior faculty may experience digital friction, reluctance to transition from physical paper registers, or confusion with complex UIs.",
      mitigation: "Role-Tailored Simplified UX & Multilingual Voice Prompts",
      mitigationDetail: "Design extreme minimal, high-contrast user interfaces with zero-clutter layouts. Each stakeholder sees strictly the 3-4 tasks relevant to their role. Include voice-guided audio assistance in vernacular languages and conducted short 30-minute orientation modules."
    },
    {
      id: 4,
      risk: "Data Privacy & Attendance Security",
      detail: "Personal participant identity data and biometric markers must be safeguarded against unauthorized extraction, surveillance misuse, or external leaks.",
      mitigation: "Zero-Knowledge Biometric Hashes & Role-Based Access Control",
      mitigationDetail: "Raw biometric images are NEVER stored or transmitted over the network. The ESP32 reader extracts an irreversible one-way mathematical minutiae template hash stored locally. All data in transit is TLS 1.3 encrypted, and all modifications produce immutable cryptographic audit logs."
    },
    {
      id: 5,
      risk: "Attendance Hardware / Device Reliability",
      detail: "Physical biometric sensor smudges, ESP32 power cuts, Bluetooth Low Energy (BLE) interference, or component wear can temporarily fail in remote classrooms.",
      mitigation: "Multi-Tier Redundant Fallback: Dynamic QR & Authenticated Manual Override",
      mitigationDetail: "System enforces a multi-tier contingency hierarchy: If BLE or biometric fails, the trainer’s device displays a dynamic time-expiring rolling QR code for trainees to scan. If smartphone cameras fail, the trainer issues an authenticated supervisor manual override backed by a digital audit entry."
    }
  ],

  // Structured Academic & Technical Bibliography Framework (No Invented URLs)
  references: [
    {
      category: "National Guidelines",
      title: "National Council for Cooperative Training Operational Guidelines",
      citation: "Ministry of Cooperation, Government of India (2026)."
    },
    {
      category: "Cooperative Training & Governance",
      title: "National Council for Cooperative Training (NCCT) Annual Training Reports & Guidelines",
      citation: "NCCT, Ministry of Cooperation, Government of India (Reports on RICMs, ICMs, and PACS Computerization Initiatives)."
    },
    {
      category: "Hardware & Edge Computing",
      title: "ESP32 Series SoC Technical Reference Manual & BLE Subsystem Architecture",
      citation: "Espressif Systems (ESP32 Bluetooth Low Energy Physical Layer, GATT Profile & FreeRTOS Implementation)."
    },
    {
      category: "Wireless Standards",
      title: "Bluetooth Core Specification v5.0 / v5.2 (Low Energy Physical Layer Specifications)",
      citation: "Bluetooth Special Interest Group (SIG) Standards Architecture."
    },
    {
      category: "Educational Technology",
      title: "Competency-Based Education & Interoperable Learning Credential Standards",
      citation: "IMS Global Learning Consortium / 1EdTech (Open Badges & LTI Interoperability Architecture)."
    },
    {
      category: "Skill Ecosystem Research",
      title: "National Skill Development Policy & Rural Livelihood Outcome Tracking Frameworks",
      citation: "NITI Aayog & Ministry of Skill Development and Entrepreneurship (MSDE) Research on Vocational Outcome Data."
    }
  ],

  // Team Sudo_Core (Team ID: 190037)
  teamMembers: [
    {
      name: "Team Lead & System Architect",
      team: "Sudo_Core",
      teamId: "190037",
      role: "Full-Stack Architecture & System Design",
      initials: "TL",
      accent: "yellow",
      contribution: "Designed end-to-end unified ecosystem architecture, data schemas, API gateways, and stakeholder interaction models."
    },
    {
      name: "IoT & Embedded Hardware Engineer",
      team: "Sudo_Core",
      teamId: "190037",
      role: "ESP32, BLE & Biometric Integration",
      initials: "HW",
      accent: "orange",
      contribution: "Prototyped the ESP32 firmware, BLE beacon transmission, optical fingerprint sensor interfacing, and offline flash cache."
    },
    {
      name: "LMS & Data Platform Engineer",
      team: "Sudo_Core",
      teamId: "190037",
      role: "Learning Management & Academic ERP",
      initials: "LM",
      accent: "pink",
      contribution: "Engineered modular course delivery modules, batch management workflows, and offline synchronization logic."
    },
    {
      name: "AI & Intelligence Engineer",
      team: "Sudo_Core",
      teamId: "190037",
      role: "Career Guidance & Skill Gap Engine",
      initials: "AI",
      accent: "purple",
      contribution: "Developed the AI career recommendation pipeline, competency diagnostic models, and job matching scoring."
    },
    {
      name: "Frontend & UX Engineer",
      team: "Sudo_Core",
      teamId: "190037",
      role: "GovTech Interface & Responsive Design",
      initials: "UI",
      accent: "blue",
      contribution: "Crafted accessible, high-performance Neo-Brutalist UI components, interactive dashboard mockups, and mobile layouts."
    },
    {
      name: "Security & QA Specialist",
      team: "Sudo_Core",
      teamId: "190037",
      role: "Privacy, RBAC & Audit Engineering",
      initials: "QA",
      accent: "green",
      contribution: "Defined role-based access control, cryptographic verification routines, and multi-tier fallback failure mitigations."
    }
  ]
};

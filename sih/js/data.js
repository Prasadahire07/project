/* ==========================================================================
   TEAM SUDO - SIH 2026 DOCUMENTATION DATA REPOSITORY
   All simulation records are explicitly tagged as DEMO DATA.
   ========================================================================== */

const SUDO_DATA = {
  projectMeta: {
    teamName: "SUDO",
    hackathon: "Smart India Hackathon 2026",
    theme: "Smart Education / Open Innovation / Governance",
    coreConcept: "One Participant. One Complete Record.",
    subtitle: "Connecting Training, Verified Skills, Certification, Career Guidance and Opportunities in one unified ecosystem.",
    problemStatementId: "[SIH-2026-XXXX]",
    problemStatementTitle: "[Unified Digital Tracking & Outcome Platform for Cooperative & Skill Training]",
    stakeholderCentralLayer: "National Council for Cooperative Training (NCCT), Ministry of Cooperation"
  },

  // 10 Core Participant Journey Steps with 8-Point Deep-Dive Answers
  journeySteps: [
    {
      id: 1,
      num: "01",
      name: "Register & Identity",
      short: "Aadhaar ID + Profile Creation",
      icon: "user-check",
      what: "A single, tamper-evident digital identity record is established for the candidate, linked to verified credentials.",
      why: "Eliminates duplicate trainee profiles, phantom enrollments, and scattered records across independent institute silos.",
      how: "Candidate completes identity verification (Aadhaar/e-KYC) and creates their sovereign participant master profile with biometric template mapping.",
      who: "Trainee candidate self-service portal or Institute Helpdesk Registrar.",
      dataGenerated: "Unique Participant ID (e.g. NCCT-2026-IND-08492), Encrypted Identity Hash, Demographic baseline.",
      benefit: "Creates a permanent, portable lifelong training identity recognized across all NCCT institutes.",
      risks: "Data privacy concerns; mitigated by zero-knowledge encrypted storage and role-based access control.",
      scaling: "Horizontally scalable participant registry supporting millions of federated records nationwide."
    },
    {
      id: 2,
      num: "02",
      name: "Join Programme",
      short: "Batch Nomination & Allocation",
      icon: "briefcase",
      what: "The registered participant is nominated or enrolled into an accredited cooperative or vocational training programme batch.",
      why: "Ensures transparent seat allocation, curriculum tracking, and centralized cohort monitoring for institutes.",
      how: "Institute administrators schedule batches via the ERP module, assigning faculty, course syllabus, and lecture halls.",
      who: "Training Institute (RICM/ICM), Course Coordinators, and Trainee.",
      dataGenerated: "Batch ID, Course Code, Faculty Allocation, Timetable Matrix, Seat Audit Timestamp.",
      benefit: "Live visibility into batch capacity, student-faculty ratios, and training calendar synchronization.",
      risks: "Manual scheduling conflicts; mitigated by automated conflict detection and batch vacancy alerts.",
      scaling: "Central NCCT dashboard can monitor thousands of concurrent batches across 14+ RICMs and 19+ ICMs."
    },
    {
      id: 3,
      num: "03",
      name: "Smart Attendance",
      short: "ESP32 + BLE + Biometric Verification",
      icon: "cpu",
      what: "Hardware-assisted attendance recording in classrooms using physical ESP32 microcontrollers, BLE beacons, and biometric verification.",
      why: "Traditional roll-calls and basic check-in apps are susceptible to proxy marking, paper register tampering, and loss.",
      how: "Learner scans fingerprint on modular biometric reader wired to ESP32; presence validated via BLE proximity check. If offline, cached locally and synced later.",
      who: "Trainees present in class, Session Trainers, and Classroom IoT Gateways.",
      dataGenerated: "Attendance Timestamp, Device Serial ID, Biometric Match Nonce, Offline Sync Log, GPS/Cell sanity check.",
      benefit: "Transparent, verified attendance record backed by multi-point validation and local offline resiliency.",
      risks: "Hardware or BLE failure; mitigated by secondary dynamic time-based QR and authenticated trainer manual override.",
      scaling: "Low-cost ESP32 hardware ($4-$6) deployable across rural classrooms without requiring uninterrupted high-speed broadband."
    },
    {
      id: 4,
      num: "04",
      name: "Learn & Progress",
      short: "Multilingual Content (Online + Offline)",
      icon: "book-open",
      what: "Interactive digital course delivery featuring modular lessons, multimedia resources, and vernacular language accessibility.",
      why: "Rural and cooperative learners often face language barriers and intermittent internet connectivity in tier-2/3 regions.",
      how: "Learners stream or cache modules via PWA/offline storage; system supports Hindi, English, and regional languages with voice-guided prompts.",
      who: "Trainees engaging with coursework, NCCT Faculty monitoring real-time comprehension velocity.",
      dataGenerated: "Module Completion %, Time-on-Task, Content Interaction Heatmaps, Offline Cache Manifests.",
      benefit: "Equitable learning access regardless of geographical location or intermittent rural bandwidth.",
      risks: "Drop-off during self-paced learning; mitigated by automated trainer nudges and gamified milestone badges.",
      scaling: "CDN-backed object storage with edge caching allows rapid distribution of rich training material."
    },
    {
      id: 5,
      num: "05",
      name: "Assess & Evaluate",
      short: "Quizzes, Tests & Practical Rubrics",
      icon: "check-circle",
      what: "Continuous formative quizzes, end-of-module summative exams, and hands-on vocational practical assessments.",
      why: "Ensures skills are genuinely acquired and evaluated rather than merely claimed upon certificate issuance.",
      how: "Adaptive question banks test theoretical knowledge while trainers record rubric-based scores for practical cooperative simulations.",
      who: "Trainees, Certified Assessors, and Evaluators.",
      dataGenerated: "Score Breakdowns by Competency Unit, Attempt Durations, Practical Rubric Ratings, Error Frequency Diagnostics.",
      benefit: "Objective, competency-based measurement that directly proves individual skill mastery.",
      risks: "Evaluation bias; mitigated by randomized question distribution and standardized NCCT grading rubrics.",
      scaling: "Automated grading engine processes tens of thousands of simultaneous assessment submissions."
    },
    {
      id: 6,
      num: "06",
      name: "Get Certified",
      short: "Tamper-Evident QR & Unique ID",
      icon: "award",
      what: "Issuance of a cryptographically signed, verifiable digital certificate carrying a unique verification code and scannable QR.",
      why: "Paper certificates are easily forged, lost, and require tedious manual verification phone calls or letters.",
      how: "Upon passing course criteria, system generates PDF certificate with embedded SHA-256 hash and unique ID registered in NCCT central database.",
      who: "NCCT Certifying Authority, Institute Director, and Graduating Trainee.",
      dataGenerated: "Unique Certificate ID (e.g. SUDO-DEMO-2026-001), Issue Timestamp, Issuing Officer Digital Signature, QR Payload.",
      benefit: "Instant, zero-cost third-party verification for employers in under two seconds.",
      risks: "QR tampering; mitigated by server-side public signature verification against the central NCCT registry.",
      scaling: "Automated generation pipeline capable of issuing millions of credentials without administrative bottlenecks."
    },
    {
      id: 7,
      num: "07",
      name: "Build Skill Passport",
      short: "Evidence-Backed Competency Matrix",
      icon: "shield",
      what: "Automatic synthesis of attendance, course completions, and assessment scores into a dynamic, tamper-evident digital Skill Passport.",
      why: "Resumes only contain self-declared skills; employers cannot distinguish between theoretical awareness and tested competency.",
      how: "The platform binds granular skill tags (e.g. 'Cooperative Accounting', 'Audit Compliance') to actual evaluation marks and attendance metrics.",
      who: "Trainees (as credential owners), Employers, and Cooperative Societies inspecting talent.",
      dataGenerated: "Skill Passport Hash, Competency Level Ratings (Level 1-5), Verified Skill Graph, Audit Trail.",
      benefit: "Provides candidates with an undeniable proof-of-competence that unlocks higher-value economic opportunities.",
      risks: "Skill inflation; prevented by linking every badge directly to underlying test and attendance proofs.",
      scaling: "Portable, interoperable JSON-LD credential schema ready for national credential federations."
    },
    {
      id: 8,
      num: "08",
      name: "AI Career Guidance",
      short: "AI-Assisted Recommendations & Diagnostics",
      icon: "compass",
      what: "Intelligent analytics engine that analyzes candidate skill proficiencies, identifies learning gaps, and suggests tailored career paths.",
      why: "Rural and vocational learners frequently lack access to dedicated human career counselors and labor market guidance.",
      how: "Machine learning algorithms compare candidate assessment profiles against live cooperative & industry job requirements to recommend next steps.",
      who: "Trainees seeking career direction and Academic Advisors offering targeted mentoring.",
      dataGenerated: "Skill Gap Scores, Recommended Specialization Modules, Cooperative Career Pathway Match Indices.",
      benefit: "Empowers learners with clear, actionable roadmaps to bridge specific skill deficits.",
      risks: "Over-reliance on automated guidance; strictly framed as 'AI-assisted guidance' with human mentor oversight.",
      scaling: "Cloud-hosted recommendation microservice offering sub-second career diagnostic assessments."
    },
    {
      id: 9,
      num: "09",
      name: "Find Opportunities",
      short: "Job & Cooperative Matching",
      icon: "trending-up",
      what: "Direct marketplace connecting verified candidate skill profiles with job vacancies posted by cooperatives, banks, and enterprises.",
      why: "Solves the traditional disconnect where vocational institutes produce graduates without a direct pipeline to hiring employers.",
      how: "Employers filter candidates by verified competencies (e.g. 'Minimum 85% in Dairy Operations & 90% Attendance'); candidate receives direct invites.",
      who: "Graduates, Cooperative Societies (PACS, Milk Unions, Urban Banks), and Private Employers.",
      dataGenerated: "Opportunity Matches, Application Timestamps, Employer Shortlist Actions, Interview Invites.",
      benefit: "Reduces hiring friction, eliminates bogus resume screening, and speeds up placement for rural youth.",
      risks: "Low initial employer adoption; mitigated by partnering with federated apex cooperative organizations.",
      scaling: "Multi-tenant portal supporting thousands of hiring organizations across diverse economic sectors."
    },
    {
      id: 10,
      num: "10",
      name: "Outcome & Training Loop",
      short: "Post-Training Tracking & Course Redesign",
      icon: "repeat",
      what: "Longitudinal tracking of employment outcomes and wage improvements, feeding statistical feedback directly into curriculum updates.",
      why: "Without outcome tracking, government training programmes continue teaching obsolete syllabi without knowing real economic impact.",
      how: "System surveys alumni at 3, 6, and 12-month intervals, aggregating placement rates and employer feedback into central Training Intelligence.",
      who: "NCCT Policy Directors, Ministry of Cooperation, Institute Curriculum Boards.",
      dataGenerated: "Employment Rate, Sector Distribution, Average Time-to-Placement, Curriculum Effectiveness Index.",
      benefit: "Enables data-driven governance: underperforming courses are revised, and high-demand skills receive increased funding.",
      risks: "Survey non-response; mitigated by automated WhatsApp/SMS check-ins and cooperative society reporting.",
      scaling: "National macro-level analytics informing nationwide cooperative education budgets and policy decisions."
    }
  ],

  // Demo Certificates for the Interactive Verification Tool
  demoCertificates: {
    "SUDO-DEMO-2026-001": {
      id: "SUDO-DEMO-2026-001",
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
    "SUDO-DEMO-2026-002": {
      id: "SUDO-DEMO-2026-002",
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
    "SUDO-DEMO-2026-003": {
      id: "SUDO-DEMO-2026-003",
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
        { event: "Received Verified Certificate SUDO-DEMO-2026-001 from NCCT", time: "3 days ago" },
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
      category: "Hackathon Guidelines",
      title: "Smart India Hackathon 2026 Official Operational Guidelines",
      citation: "Ministry of Education’s Innovation Cell (MIC), AICTE, Government of India (2026)."
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

  // Team SUDO Members Placeholder Structure
  teamMembers: [
    {
      name: "Team Lead & System Architect",
      role: "Full-Stack Architecture & System Design",
      initials: "TL",
      contribution: "Designed end-to-end unified ecosystem architecture, data schemas, and stakeholder interaction models."
    },
    {
      name: "IoT & Embedded Hardware Engineer",
      role: "ESP32, BLE & Biometric Integration",
      initials: "HW",
      contribution: "Prototyped the ESP32 firmware, BLE beacon transmission, biometric sensor interfacing, and offline cache."
    },
    {
      name: "LMS & Data Platform Engineer",
      role: "Learning Management & Academic ERP",
      initials: "LM",
      contribution: "Engineered modular course delivery modules, batch management workflows, and offline synchronization logic."
    },
    {
      name: "AI & Intelligence Engineer",
      role: "Career Guidance & Skill Gap Engine",
      initials: "AI",
      contribution: "Developed the AI career recommendation pipeline, competency diagnostic models, and job matching scoring."
    },
    {
      name: "Frontend & UX Engineer",
      role: "GovTech Interface & Responsive Design",
      initials: "UI",
      contribution: "Crafted accessible, high-performance UI components, interactive dashboard mockups, and mobile layouts."
    },
    {
      name: "Security & QA Specialist",
      role: "Privacy, RBAC & Audit Engineering",
      initials: "QA",
      contribution: "Defined role-based access control, cryptographic verification routines, and fallback failure mitigations."
    }
  ]
};

import { Project, ExperienceItem, EducationItem, SkillCategory, Certification } from '../types/portfolio';

export const personalInfo = {
  name: "Sparsh Dixit",
  roleTitle: "Aspiring AI Engineer & MERN-Stack Developer",
  shortBio: "Detail-oriented MCA scholar specializing in MERN-Stack architecture, Python, and scalable backend design. Passionate about engineering intelligent web systems with robust performance.",
  location: "Kanpur, Uttar Pradesh, India",
  coordinates: "26.4499° N, 80.3319° E",
  email: "sparshd02@gmail.com",
  phone: "+91 9793307788",
  linkedin: "https://www.linkedin.com/in/sparshdixit/?isSelfProfile=true",
  github: "https://github.com/Developersparsh",
  availability: "Open to Full-Time & Internship Opportunities",
  objective: "Detail-oriented MCA student specializing in MERN-Stack Development and Python. Skilled in Java, React.js, and database management with hands-on experience in building scalable applications. Aspiring to pursue a role as an AI Engineer or MERN-Stack Developer to utilize strong problem-solving and teamwork abilities within a professional environment."
};

export const metrics = [
  { value: "12+", label: "RESTful APIs Engineered", context: "Built for internal production tools at Codsoft" },
  { value: "15%", label: "Query Optimization", context: "Database indexing and execution plan tuning" },
  { value: "77.33%", label: "BCA Aggregate", context: "DAMS CSJM University academic distinction" },
  { value: "100+", label: "Algorithms Solved", context: "Active competitive programming on LeetCode" }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "codsoft-intern",
    role: "Web Developer Intern",
    company: "Codsoft",
    location: "Remote / Hybrid",
    period: "Nov 2023 – Dec 2023",
    type: "Internship",
    description: "Designed, developed, and deployed high-performance server-side services and responsive web interfaces for internal tooling.",
    bullets: [
      "Designed and implemented 12+ RESTful APIs for internal applications using Node.js and Express.",
      "Enhanced server-side performance by 15% through strategic database indexing and query optimization on MongoDB.",
      "Collaborated closely with cross-functional frontend teams to ensure seamless API integration, error-handling uniformity, and strict data consistency.",
      "Authored API documentation and test collections using Postman to expedite frontend integration."
    ],
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Query Optimization", "Postman", "Git"]
  },
  {
    id: "tech-head",
    role: "Technical Head & Event Lead",
    company: "DAMS CSJM University Tech Committee",
    location: "Kanpur, Uttar Pradesh",
    period: "2023 – 2024",
    type: "Leadership",
    description: "Led student developer teams and coordinated university-level technical symposia, coding hackathons, and technical workshops.",
    bullets: [
      "Led the technical core team of 15+ student developers, coordinating event infrastructure and competition platforms.",
      "Organized coding sprints, competitive programming challenges, and web development masterclasses.",
      "Handled technical problem statements, judging rubrics, and automated test-case evaluation systems."
    ],
    skills: ["Team Leadership", "Technical Coordination", "Competitive Programming", "Public Speaking", "Problem Solving"]
  }
];

export const projectsData: Project[] = [
  {
    id: "forestguard-ai",
    title: "ForestGuard-AI: Early Wildfire & Deforestation Detection",
    subtitle: "Computer Vision & IoT ecological monitoring platform",
    role: "AI & Full-Stack Architect",
    duration: "2024",
    category: "AI & Python",
    featured: true,
    description: "An intelligent environmental monitoring platform that leverages computer vision, thermal camera feeds, and real-time telemetry to detect early wildfire ignition and unauthorized heavy machinery logging in protected forests.",
    highlights: [
      "Trained custom vision models to detect early smoke signatures and thermal hot-spots with 94.6% recall.",
      "Constructed a reactive geospatial command dashboard in React.js with live threat telemetry, risk radius maps, and sensor heatmaps.",
      "Engineered high-throughput FastAPI & Node.js ingest microservices handling concurrent streaming telemetry from IoT canopy sensors.",
      "Implemented automated SMS/Webhook incident dispatch alerting forest conservation authorities within seconds of anomaly detection."
    ],
    technologies: ["Python", "Computer Vision", "React.js", "FastAPI", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/Developersparsh",
    liveUrl: "https://github.com/Developersparsh",
    architectureDetails: "Edge-to-cloud AI pipeline integrating vision inference models, asynchronous telemetry queues, and React Mapbox geospatial overlays."
  },
  {
    id: "real-estate-mern",
    title: "Real Estate Management Platform",
    subtitle: "Enterprise property discovery & management web platform",
    role: "Project Lead",
    duration: "May 2024 – Aug 2024",
    category: "Full-Stack",
    featured: true,
    description: "A comprehensive, responsive real estate web application built using the MERN stack that streamlines property discovery, interactive filtering, and agent listing workflows.",
    highlights: [
      "Architected responsive, mobile-first frontend using React.js, Tailwind CSS, and custom hooks.",
      "Implemented full CRUD property listing and management pipeline with MongoDB & Mongoose schemas.",
      "Engineered multi-criteria search filtering by price bracket, property type, square footage, and amenities.",
      "Designed secure RESTful API endpoints in Express.js with input sanitization and image uploads."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Developersparsh",
    architectureDetails: "MERN 3-tier architecture with stateful client-side routing, JWT session verification, and MongoDB index optimization for geospatial/price queries."
  },
  {
    id: "ai-resume-matcher",
    title: "AI Skill Matcher & ATS Resume Engine",
    subtitle: "Intelligent NLP-driven career skill gap evaluator",
    role: "Lead Developer",
    duration: "2024",
    category: "AI & Python",
    featured: false,
    description: "An AI-powered tool leveraging Python and NLP heuristics to parse candidate resumes, extract key technical competencies, and generate similarity benchmarks against modern job descriptions.",
    highlights: [
      "Built natural language tokenization and keyword extraction pipelines using Python.",
      "Constructed interactive React frontend with clean visual diffs showing missing skills and actionable suggestions.",
      "Designed asynchronous REST microservice in Flask/FastAPI communicating with Node.js backend.",
      "Implemented score breakdown across languages, frameworks, and database proficiencies."
    ],
    technologies: ["Python", "NLP", "React.js", "Node.js", "REST APIs", "Tailwind CSS"],
    githubUrl: "https://github.com/Developersparsh",
    architectureDetails: "Hybrid Python microservice + Node.js gateway with vector cosine similarity for text embeddings."
  },
  {
    id: "algorithm-optimization-hub",
    title: "Algorithmic Systems & Data Structures Repository",
    subtitle: "Benchmarked implementations of core algorithms & LeetCode solutions",
    role: "Author",
    duration: "Ongoing",
    category: "Algorithms",
    featured: false,
    description: "A public engineering repository containing benchmarked implementations of advanced data structures, graph search algorithms, dynamic programming patterns, and 100+ LeetCode solutions.",
    highlights: [
      "Implemented comprehensive solutions in Java (Core & Advanced) and Python with time/space complexity analysis.",
      "Covered key patterns: Sliding Window, Two Pointers, DFS/BFS graph traversals, and Binary Search.",
      "Benchmarked memory footprint and JVM execution overhead for complex data structures."
    ],
    technologies: ["Java", "Python", "Data Structures", "Algorithms", "Git"],
    githubUrl: "https://github.com/Developersparsh",
    architectureDetails: "Modular algorithmic repository with JUnit testing and Big-O verification suites."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    description: "Core foundational languages utilized for system architecture, algorithmic logic, and web services.",
    items: [
      { name: "Java (Core & Advanced)", level: "Advanced", proficiency: 88, tags: ["OOP", "Collections", "Multithreading", "JVM"] },
      { name: "Python", level: "Proficient", proficiency: 85, tags: ["Automation", "Data Structures", "AI/ML Libraries", "Scripting"] },
      { name: "JavaScript (ES6+)", level: "Advanced", proficiency: 90, tags: ["Async/Await", "Closures", "Event Loop", "DOM"] },
      { name: "SQL", level: "Proficient", proficiency: 82, tags: ["Joins", "Indexing", "Aggregations", "Schema Design"] }
    ]
  },
  {
    category: "Web & Frontend Technologies",
    description: "Modern frameworks and tooling for crafting responsive, reactive, and fluid user interfaces.",
    items: [
      { name: "React.js", level: "Advanced", proficiency: 88, tags: ["Hooks", "Context API", "Virtual DOM", "Component Lifecycle"] },
      { name: "HTML5 & Semantic Markup", level: "Expert", proficiency: 94, tags: ["SEO", "Accessibility", "Canvas", "Semantics"] },
      { name: "CSS3 & Modern Styling", level: "Advanced", proficiency: 90, tags: ["Flexbox", "CSS Grid", "Keyframes", "Transitions"] },
      { name: "Tailwind CSS", level: "Advanced", proficiency: 92, tags: ["Utility-First", "Responsive Design", "Custom Themes"] },
      { name: "Bootstrap", level: "Proficient", proficiency: 85, tags: ["Grid System", "Responsive Utilities", "Components"] }
    ]
  },
  {
    category: "Backend & Databases",
    description: "Server-side architectures, RESTful API design, database modeling, and performance optimization.",
    items: [
      { name: "Node.js", level: "Advanced", proficiency: 87, tags: ["Event-Driven", "NPM Ecosystem", "Buffers & Streams"] },
      { name: "Express.js", level: "Advanced", proficiency: 89, tags: ["Middleware", "REST Routing", "Error Handling", "Auth"] },
      { name: "MongoDB", level: "Advanced", proficiency: 86, tags: ["NoSQL", "Mongoose", "Indexing", "Aggregations"] },
      { name: "MySQL", level: "Proficient", proficiency: 80, tags: ["Relational Schema", "Transactions", "Foreign Keys"] },
      { name: "RESTful API Architecture", level: "Advanced", proficiency: 91, tags: ["HTTP Verbs", "Status Codes", "API Security"] }
    ]
  },
  {
    category: "Tools & Developer Practices",
    description: "Workflow tooling, version control, API testing, and performance profiling utilities.",
    items: [
      { name: "Git & GitHub", level: "Advanced", proficiency: 88, tags: ["Version Control", "Branches", "PR Reviews", "Workflows"] },
      { name: "Database Indexing & Tuning", level: "Proficient", proficiency: 84, tags: ["Execution Plans", "B-Trees", "15% Optimization"] },
      { name: "Postman", level: "Advanced", proficiency: 90, tags: ["API Testing", "Environments", "Mock Servers"] },
      { name: "VS Code & Terminal CLI", level: "Advanced", proficiency: 92, tags: ["Extensions", "Bash Scripts", "Debugging"] }
    ]
  },
  {
    category: "Interpersonal & Leadership",
    description: "Core professional strengths for high-velocity engineering teamwork and project execution.",
    items: [
      { name: "Analytical Problem Solving", level: "Core Strength", proficiency: 94, tags: ["Algorithmic Optimization", "Debugging", "Logic"] },
      { name: "Technical Team Leadership", level: "Proven Track Record", proficiency: 90, tags: ["College Event Head", "Mentorship", "Coordination"] },
      { name: "Cross-functional Collaboration", level: "High Competency", proficiency: 88, tags: ["Frontend-Backend Sync", "Agile Sprints"] },
      { name: "Technical Documentation", level: "High Competency", proficiency: 87, tags: ["API Specs", "Clean Readmes", "Architecture Notes"] }
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Chandigarh University",
    location: "Uttar Pradesh / Online Campus",
    period: "2026 – 2028",
    score: "Enrolled / In Progress",
    status: "Current Program",
    highlights: [
      "Specialization in Advanced Computer Science, Distributed Systems & Artificial Intelligence.",
      "Focusing on Machine Learning foundations, Cloud Architecture, and Software Engineering methodologies."
    ]
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "DAMS, CSJM University",
    location: "Kanpur, Uttar Pradesh",
    period: "2022 – 2025",
    score: "77.33% Aggregate",
    status: "Graduated with Distinction",
    highlights: [
      "Graduated with 77.33% academic distinction across 6 semesters.",
      "Core Coursework: Object-Oriented Programming (Java), Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Web Technologies.",
      "Served as Technical Head of the University Technical Committee."
    ]
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    institution: "Uttar Pradesh Intermediate Education",
    location: "Kanpur, Uttar Pradesh",
    period: "2022",
    score: "65.8%",
    status: "Completed",
    highlights: [
      "Completed Senior Secondary Education with Science and Mathematics stream."
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    title: "Forecasting Using Model Studio in SAS Viya",
    issuer: "SAS Institute",
    skills: ["Time Series Forecasting", "SAS Viya", "Model Studio", "Predictive Analytics", "Pipeline Automation"]
  },
  {
    title: "Python Programming Masterclass",
    issuer: "Udemy",
    skills: ["Python 3", "OOP", "Data Structures", "Algorithm Design"]
  },
  {
    title: "Complete Java Development & Core Concepts",
    issuer: "Udemy",
    skills: ["Java Core & Advanced", "Collections Framework", "Multithreading", "JDBC"]
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    skills: ["HTML5", "CSS3", "JavaScript ES6+", "React.js", "Node.js", "Express.js", "MongoDB"]
  }
];

export const hobbiesAndInterests = [
  {
    title: "Competitive Programming",
    description: "Active practitioner on LeetCode with continuous focus on algorithm runtime reduction and space complexity optimization."
  },
  {
    title: "Open Source Documentation",
    description: "Contributing to developer-centric UI libraries, refining API documentation, and debugging community open-source repositories on GitHub."
  },
  {
    title: "Full-Stack System Prototyping",
    description: "Architecting end-to-end applications to bridge theoretical algorithmic principles with real-world user applications."
  }
];

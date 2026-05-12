export const portfolioData = {
  name: "Hassan Yosuf",
  title: "BACKEND ENGINEER",
  shortBio: "Building scalable backend systems and robust APIs that power modern applications. Microservices architecture, cloud-native development, Spring Boot, and enterprise-grade infrastructure.",
  
  skills: {
    languages: ["Python", "Java", "SQL", "JavaScript", "XML/JSON", "PySpark"],
    frameworks: ["Spring Boot", "Apache Kafka", "Redis", "Node.js", "J2EE", "REST APIs", "WebSocket/STOMP", "Maven"],
    architectures: ["Microservices Architecture", "MVC Architecture", "OOPS", "Design Patterns", "API Design", "Event-Driven Architecture"],
    dataEngineering: ["ETL/ELT", "Data Pipelines", "Snowpark", "Pandas", "Data Modeling", "Data Quality", "Data Governance"],
    dataTools: ["Snowflake", "PostgreSQL", "MySQL", "Oracle", "MongoDB", "BigQuery", "HVR", "Informatica (IICS)"],
    orchestration: ["Control-M", "Workflow Orchestration"],
    cloudDevOps: ["AWS (Certified)", "GCP (Certified)", "Snowflake (Certified)", "Docker", "CI/CD Pipeline", "Linux", "Git"],
    certifications: ["AWS Certified Cloud Practitioner", "Google Cloud Platform (Associate Cloud Engineer)", "Snowflake SnowPro Certification"],
    visualization: ["Tableau", "Power BI"],
    tools: ["Maven", "JUnit", "JIRA", "Confluence", "Cursor", "Fireblocks"],
    aiExploring: ["LLM APIs (Claude, LLaMA)", "RAG Workflows", "Prompt Engineering", "AI Agents", "OpenText"],
    concepts: ["Data Structures & Algorithms", "Design Patterns", "SDLC", "Agile", "TDD (JUnit)", "JWT", "OAuth2", "Data Governance"]
  },

  whatMovesMe: {
    music: ["Indi Music", "Rain Sound (Always works)", "Soft Jazz"],
    instrument: ["Guitar", "Gimbal"],
    read: ["The Pragmatic Programmer", "Clean Code"],
    wear: "Minimalist Tech Fashion",
    city: "Bengaluru, India",
    now: "Building scalable backend systems. Shipping production code."
  },

  projects: [
    {
      id: 1,
      title: "Resumable Agentic Simulation Pipeline",
      description: "Backend assessment project showcasing Python development skills. Building scalable server-side components and API integration.",
      tags: ["Python", "Backend", "API"],
      year: 2026,
      link: "https://github.com/HassanYosuf/Ikelos-Backend-Assesment",
    },
    {
      id: 2,
      title: "ChatUp",
      description: "A modern chat application with responsive design. Built with clean CSS and JavaScript for real-time messaging experience.",
      tags: ["React", "CSS", "JavaScript", "Frontend"],
      year: 2025,
      link: "https://github.com/HassanYosuf/ChatUp",
    },
    {
      id: 3,
      title: "Weather Application",
      description: "Weather forecasting app that fetches real-time data and displays weather information with an intuitive interface.",
      tags: ["React", "API", "Weather", "JavaScript"],
      year: 2025,
      link: "https://github.com/HassanYosuf/WeatherApp",
    },
    {
      id: 4,
      title: "Threading in Java",
      description: "Comprehensive implementation of threading concepts in Java. Demonstrates multi-threaded programming with best practices.",
      tags: ["Java", "Threading", "Concurrency"],
      year: 2024,
      link: "https://github.com/HassanYosuf/Threading-in-Java",
    },
    {
      id: 5,
      title: "Image Processor",
      description: "Advanced image processing application with encryption support. Features XOR cipher GUI implementation with Java Swing.",
      tags: ["Java", "Encryption", "GUI", "Swing"],
      year: 2021,
      link: "https://github.com/HassanYosuf/Image-Processor",
    },
    {
      id: 6,
      title: "Tic-Tac-Toe Game",
      description: "Interactive Tic-Tac-Toe game built with Java Swing. Features full game logic and graphical interface.",
      tags: ["Java", "Swing", "GUI", "Game"],
      year: 2020,
      link: "https://github.com/HassanYosuf/Tic-Tac-Toe-using-Swing",
    },
  ],

  experience: [
    {
      id: 1,
      company: "Quantiphi Analytics Solution Pvt. Ltd.",
      roles: [
        { title: "Senior Data Engineer", period: "Dec 2022 – Present" },
        { title: "Backend Engineer", period: "Dec 2022 – Present" },
      ],
      location: "Bangalore, India",
      bullets: [
        {
          label: "Real Estate Tokenization Platform",
          detail: "Designed and developed a cloud-based real estate tokenization platform on GCP enabling fractional property investment through Bitcoin. Built 4 core microservices — User Service (auth & user management), Asset Service (token valuation & tracking), Ternas Service (property listing), and Finance Service (payout logic) — deployed on GCP Compute Engine for scalability and high availability.",
        },
        {
          label: "Microservices Architecture (Java)",
          detail: "Architected and maintained robust Java Spring Boot microservices. Applied design patterns to decouple services, improving maintainability and allowing for independent scaling of financial transaction modules.",
        },
        {
          label: "Secure Distributed Systems",
          detail: "Implemented backend workflows to manage user lifecycles, transactions, asset/token valuations, and automated payouts, integrating Fireblocks for secure Bitcoin transactions. Tuned performance through concurrency improvements and query profiling.",
        },
        {
          label: "Cloud Infrastructure (GCP)",
          detail: "Worked on data persistence using Cloud SQL for relational data and GCS for property documents and transaction logs; supported BigQuery integration for analytical queries — contributing to transparent tokenization and transaction handling at scale.",
        },
        {
          label: "Service Integration",
          detail: "Integrated AI-powered speech-to-text and DLP APIs to automate PII redaction workflows, reducing manual compliance overhead and enhancing data security in production.",
        },
        {
          label: "Scalable System Engineering (Python/Snowflake)",
          detail: "Designed and developed production-grade data processing modules using Python and Snowflake. Optimized ingestion logic from 5+ distributed sources to process 200,000+ records in under 15 minutes.",
        },
        {
          label: "GenAI & LLM Integration",
          detail: "Built RAG-based experiments integrating LLM APIs (Anthropic Claude, LLaMA) — exploring retrieval-augmented generation pipelines, prompt engineering, and LLM-powered workflow automation for internal tooling use cases.",
        },
        {
          label: "SDLC & Automation",
          detail: "Streamlined the software delivery process by implementing CI/CD pipelines. Managed complex branching strategies for version control (Git) to ensure code stability across multiple release environments.",
        },
        {
          label: "Production Operations",
          detail: "Conducted Root Cause Analysis (RCA) and remote debugging for complex production issues. Implemented centralized logging and health checks to ensure system reliability.",
        },
        {
          label: "Strategic Problem Solving",
          detail: "Collaborated with cross-functional stakeholders to translate vague business requirements into concrete technical implementations, delivering hotfixes and features in a fast-paced agile environment.",
        },
      ],
    },
    {
      id: 2,
      company: "Quantiphi Analytics Solution Pvt. Ltd.",
      roles: [
        { title: "Data Engineer Intern", period: "Aug 2022 – Dec 2022" },
      ],
      location: "Bangalore, India",
      bullets: [
        {
          label: "Capstone Analytics Project",
          detail: "Delivered a capstone analytics project on Hilton's property rental data, surfacing actionable insights to improve data-driven decision-making. Tech Stack: Java, Python, SQL, Snowflake, Informatica, GCP, Azure, Tableau.",
        },
      ],
    },
  ],

  rightNow: {
    listening: {
      title: "Midnight City Vibes",
      artist: "Various Artists",
      note: "late nights at the office"
    },
    reading: {
      title: "The Data Warehouse Toolkit",
      author: "Ralph Kimball",
      note: "second read through"
    },
    building: {
      title: "Data Ops Framework",
      note: "coming soon"
    },
    wearing: {
      title: "Minimalist Sneakers",
      note: "comfort is key"
    },
    city: {
      place: "Bengaluru, IN",
      note: "for now"
    },
    working: {
      title: "Backend Engineer",
      company: "Quantiphi Analytics Pvt Ltd",
      note: "building scalable backend systems"
    }
  },

  contact: {
    email: "hassanyosuf14@gmail.com",
    resume: "/Hassan_Yosuf_Resume_Backend_Developer.pdf",
    links: [
      { title: "GitHub", url: "https://github.com/HassanYosuf" },
      { title: "LinkedIn", url: "https://www.linkedin.com/in/hassanyosuf/" },
      { title: "Twitter", url: "https://twitter.com/hassanyosuf2" },
      { title: "Blog", url: "https://dev.to/hassanyosuf" },
    ]
  },

  articles: [
    {
      id: 1,
      title: "LLaMA 3.3 AI Assistant to My Spring Boot WebSocket App",
      description: "How to integrate a conversational AI model into a real-time messaging application — intercepting @ai-prefixed messages through a dedicated service layer connected to the Groq API, keeping the human-to-human chat pipeline untouched.",
      tags: ["AI", "LLM", "Spring Boot", "WebSocket"],
      date: "May 11, 2025",
      url: "https://dev.to/hassanyosuf/llama-33-ai-assistant-to-my-spring-boot-websocket-app-hbo",
    },
    {
      id: 2,
      title: "MVC - Model View Controller",
      description: "Understanding the Model-View-Controller architectural pattern and how it separates concerns in application development for better maintainability and scalability.",
      tags: ["Architecture", "Design Patterns", "Backend", "MVC"],
      date: "May 5, 2022",
      url: "https://dev.to/hassanyosuf/mvc-model-view-controller-55hk",
    },
  ]
};

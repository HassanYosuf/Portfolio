export const portfolioData = {
  name: "Hassan Yosuf",
  title: "BACKEND DEVELOPER",
  shortBio: "Building scalable backend systems and robust APIs that power modern applications. Microservices architecture, cloud-native development, Spring Boot, and enterprise-grade infrastructure.",
  
  skills: {
    languages: ["Python", "Java", "SQL", "JavaScript", "XML/JSON"],
    frameworks: ["Spring Boot", "Node.js", "J2EE", "REST APIs"],
    architectures: ["Microservices Architecture", "MVC Architecture", "OOPS", "Design Patterns"],
    dataEngineering: ["ETL/ELT", "Data Pipelines", "Snowpark", "Pandas", "dbt", "Data Modeling", "Data Quality"],
    dataTools: ["Snowflake", "PostgreSQL", "MySQL", "Oracle", "BigQuery", "HVR", "Informatica (IICS)", "Fivetran"],
    orchestration: ["Apache Airflow", "Control-M", "Workflow Orchestration"],
    cloudDevOps: ["AWS", "GCP", "Docker", "CI/CD Pipeline", "Linux", "Git"],
    certifications: ["AWS Certified Cloud Practitioner", "Google Cloud Platform (Associate Cloud Engineer)", "Snowflake SnowPro Certification"],
    visualization: ["Tableau", "Power BI", "Looker Studio"],
    tools: ["Maven", "JUnit", "JIRA", "Confluence", "REST APIs"],
    aiExploring: ["AI Agents", "RAG Workflows"],
    concepts: ["Data Structures & Algorithms", "Design Patterns", "SDLC", "Agile", "TDD", "API Design"]
  },

  whatMovesMe: {
    music: ["Indi Music", "Rain Sound (Always works)", "Soft Jazz"],
    instrument: ["Guitar", "Gimbal"],
    read: ["The Pragmatic Programmer", "Clean Code"],
    wear: "Minimalist Tech Fashion",
    city: "Bengaluru, India",
    now: "Building data infrastructure. Learning in public."
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
        { title: "Backend Developer", period: "Dec 2022 – Present" },
      ],
      location: "Bangalore, India",
      bullets: [
        {
          label: "Microservices Architecture (Java)",
          detail: "Architected and maintained robust Java Spring Boot microservices. Applied design patterns to decouple services, improving maintainability and allowing for independent scaling of financial transaction modules.",
        },
        {
          label: "Secure Distributed Systems",
          detail: "Implemented backend workflows to manage user lifecycles, transactions, asset/token valuations, and automated payouts, integrating Fireblocks for secure Bitcoin transactions. Tuned performance through concurrency improvements and query profiling.",
        },
        {
          label: "SDLC & Automation",
          detail: "Streamlined the software delivery process by implementing CI/CD pipelines. Managed complex branching strategies for version control (Git) to ensure code stability across multiple release environments.",
        },
        {
          label: "Scalable System Engineering (Python/Snowflake)",
          detail: "Designed and developed production-grade data processing modules using Python and Snowflake. Optimized ingestion logic from 5+ distributed sources to process 200,000+ records in under 15 minutes.",
        },
        {
          label: "Service Integration",
          detail: "Integrated AI-powered speech-to-text and DLP APIs to automate PII redaction workflows, reducing manual compliance overhead and enhancing data security in production.",
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
      title: "Senior Data Engineer",
      company: "Quantiphi Analytics Pvt Ltd",
      note: "building tomorrow's data infrastructure"
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
      title: "MVC - Model View Controller",
      description: "Understanding the Model-View-Controller architectural pattern and how it separates concerns in application development for better maintainability and scalability.",
      tags: ["Architecture", "Design Patterns", "Backend", "MVC"],
      date: "Published on Dev.to",
      url: "https://dev.to/hassanyosuf/mvc-model-view-controller-55hk",
    },
  ]
};

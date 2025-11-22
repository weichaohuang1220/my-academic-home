export const config = {
  // --- 基础信息 ---
  profile: {
    name: "Weichao Huang",
    title: "Weichao Huang | Home",
    logoText: "Weichao.H",
    firstName: "Weichao",
    lastName: "Huang",
    cvLink: "assets/Weichao Huang - CV.pdf",
    avatar: "assets/avatar.jpg" 
  },

  // --- 社交链接 ---
  social: [
    { icon: "fas fa-envelope", link: "mailto:Weichaohuang1220@gmail.com" },
    { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/weichao-huang-36079b296" },
    { icon: "fab fa-github", link: "https://github.com/weichaohuang1220" }
  ],

  // --- Hero Section 打字机文字 ---
  typingRoles: [
    "Master Student in CS @ Johns Hopkins University",
    "Software Engineer Intern",
    "LLM Inference Researcher"
  ],

  // --- Hero 简介 ---
  heroDesc: `I am a Master's student in Computer Science at <strong>Johns Hopkins University</strong>. I am passionate about <strong>LLM Inference</strong>, <strong>Distributed Systems</strong>, and Multimodal Speech Recognition.`,

  // --- 关于我 ---
  about: {
    desc: `I received my Bachelor of Arts in Computer Science from the <strong>University of Minnesota, Twin Cities</strong> (GPA 3.65). 
    Currently, I am pursuing my Master of Science in Engineering in Computer Science at <strong>Johns Hopkins University</strong>. 
    My research interests focus on efficient deep learning, Large Language Models (LLM), and backend system architecture.`,
    interests: [
      { icon: "fas fa-brain", title: "LLM & AI", desc: "LLM Inference, RAG, Multimodal Speech Recognition." },
      { icon: "fas fa-server", title: "Distributed Systems", desc: "KV Cache, Raft Algorithm, High Concurrency." },
      { icon: "fas fa-cloud", title: "Cloud Native", desc: "AWS, Docker, Kubernetes, CI/CD pipelines." }
    ]
  },

  // --- 论文发表 ---
  publications: [],

  // --- 项目列表 ---
  projects: [
    {
      title: "Distributed KV Cache",
      desc: "Architected a distributed key-value cache using Go. Implemented LRU caching, singleflight for request merging, and Raft algorithm for consistency. Scaled to 500+ concurrent requests.",
      icon: "fas fa-network-wired",
      link: "https://github.com/weichaohuang1220", 
      linkText: "View Code",
      tags: "Go • Distributed Systems • Raft",
      featured: true
    },
    {
      title: "Automation Test Framework",
      desc: "Developed a scalable data-driven API testing framework with Python. Reduced testing time by ~66% and integrated into Jenkins CI/CD pipeline.",
      icon: "fas fa-vial",
      link: "https://github.com/weichaohuang1220",
      linkText: "View Code",
      tags: "Python • Jenkins • CI/CD",
      featured: true
    },
    {
      title: "Cloud-Go Driver",
      desc: "Constructed a file system using Go & Go-Zero frameworks. Leveraged AWS S3 for scalable object storage and implemented resumable uploads.",
      icon: "fas fa-cloud",
      link: "https://github.com/weichaohuang1220",
      linkText: "View Code",
      tags: "Go • AWS S3 • Docker",
      featured: true
    }
  ],

  // --- 经历 / 服务 ---
  teaching: [
    "<strong>Software Engineer Intern</strong>, Bytefinger.Inc (Jan 2024 - Dec 2025)",
    "<strong>Relevant Coursework</strong>: Distributed Systems, Deep Learning, Cloud Computing",
    "<strong>Skills</strong>: Java, Go, Python, C++, SpringBoot, React, Vue.js, PyTorch"
  ],
  
  // --- 联系信息 ---
  contact: {
    text: "I am actively looking for roles in Machine Learning Engineering, \n especially in LLM inference & evaluation. Open to connect!",
    emailText: "Email Me"
  },

  // =======================================================================
  // --- 样式主题配置 (Theme Configuration) ---
  // =======================================================================
  theme: {
    // 1. Google Fonts 链接
    googleFontsLink: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Inter:wght@300;400;600;700&family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap",

    // 2. 全局默认字体
    mainFont: "'Inter', sans-serif",
    codeFont: "'Fira Code', monospace",
    
    // 头像大小控制 (默认 160px)
    avatarSize: "200px",

    // 3. 各模块独立样式覆盖
    moduleOverrides: {
      home: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem", 
      },
      about: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
      },
      publications: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
      },
      projects: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
      },
      teaching: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
      },
      contact: {
        fontFamily: "'Inter', sans-serif",
        fontSize: "1rem",
      }
    }
  }
};
/* ALL CONTENT LIVES HERE. Edit this file only, then refresh.
   Local files: put them in /media and link as "media/file.pdf" in any `links`.
   Empty url ("") links hide automatically. New sections: see `custom`. */
window.PORTFOLIO = {
  profile: {
    name: "Jeet Chauhan",
    roles: [
      "Full-stack developer",
      "React engineer",
      "API builder",
      "Motion enthusiast",
    ],
    tagline:
      "I turn product ideas into fast, polished web apps, from the pixels on screen to the APIs and data behind them.",
    location: "Ahmedabad, India",
    timezone: "Asia/Kolkata",
    email: "spgtjeet123@gmail.com",
    phone: "+91-9054992802",
    resume: "media/resume.pdf",
    openToWork: true,
    about: [
      "I'm a full-stack developer from Ahmedabad who enjoys the whole life of a feature: shaping the interface, designing the API behind it and getting it live.",
      "Over the past year I've shipped React and Node.js products for real teams, trimmed wasted API traffic and built component libraries that keep interfaces consistent as they grow.",
      "Away from client work I experiment with motion design in GSAP, because a well-timed animation makes software feel considered.",
    ],
    facts: [
      { label: "Based in", value: "Ahmedabad, India" },
      { label: "Focus", value: "MERN stack, REST APIs" },
      { label: "Education", value: "MCA, L.D. College of Engineering" },
      { label: "Currently", value: "Open to full-time roles" },
    ],
  },
  socials: [
    { label: "LinkedIn", url: "https://linkedin.com/in/jeetc2003" },
    { label: "GitHub", url: "https://github.com/jeetchauhan123" },
  ],
  stats: [
    { value: 1, suffix: "+", label: "years building production apps" },
    { value: 15, suffix: "+", label: "reusable components shipped" },
    { value: 500, suffix: "+", label: "API requests an hour served" },
    { value: 20, suffix: "%", label: "fewer redundant API calls" },
  ],
  order: [
    "about",
    "experience",
    "projects",
    "skills",
    "education",
    "certifications",
  ],
  intro: {
    about: "A quick look at who I am and how I work.",
    experience: "Where I've built, shipped and learned.",
    projects: "Things I've designed and built end to end.",
    skills: "Pick a layer of the stack to see what I work with there.",
    education: "The academic foundation behind the work.",
    certifications: "Courses, awards and credentials.",
  },
  experience: [
    {
      title: "Software Developer",
      org: "Engineering Services International",
      location: "Ahmedabad",
      period: "Jul 2025 – Apr 2026",
      bullets: [
        "Built and maintained two React and Node.js applications handling 500+ API requests an hour.",
        "Reworked data fetching and state handling, removing about 20% of redundant API calls and making screens noticeably snappier.",
        "Created a library of 15+ reusable React components so new modules came together faster and looked consistent.",
      ],
      tags: ["React", "Node.js", "REST APIs"],
      links: [{ label: "Letter of recommendation", url: "media/esi_lor.pdf" }],
    },
    {
      title: "Developer Intern",
      org: "Vardhan Insys",
      location: "Ahmedabad",
      period: "Dec 2024 – Apr 2025",
      bullets: [
        "Designed and delivered a complaint management platform with four user roles, covering the path from filing to resolution.",
        "Tuned MongoDB queries and API handlers to cut typical response times by roughly 20%.",
        "Wrote 10+ REST endpoints in Node and Express and deployed the app to AWS.",
      ],
      tags: ["MongoDB", "Express", "AWS"],
      links: [{ label: "Letter of Certificate", url: "media/vi_loc.pdf" }],
    },
  ],
  /* tagline + description + highlights should explain WHAT the project is and does. */
  projects: [
    {
      name: "CineLend",
      featured: true,
      hue: 235,
      tagline: "A movie rental web app for browsing, saving and renting films.",
      description:
        "CineLend is a full MERN platform with a catalogue of 4,300+ movies. Visitors can search and filter titles, react to films they like, and rent what they want to watch.",
      highlights: [
        "Search and filter the catalogue by multiple criteria.",
        "Like and comment on movies, and organise favourites into personal collections.",
        "Add movies to a cart and rent them.",
        "Secure accounts so every user keeps their own activity.",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      links: [
        { label: "Live site", url: "https://cine-lend.vercel.app/" },
        { label: "GitHub", url: "https://github.com/jeetchauhan123/CineLend" },
      ],
      image: "media/cinelend.webp",
    },
    {
      name: "UrbanLux",
      featured: true,
      hue: 340,
      tagline:
        "An online fashion and lifestyle store with secure accounts and checkout.",
      description:
        "UrbanLux is an e-commerce web app where customers sign in, browse products and complete purchases, backed by a REST API that keeps every transaction tied to the right user.",
      highlights: [
        "Secure sign-up and login with token-based authentication.",
        "Product browsing and purchases through a RESTful backend.",
        "Deployed with a React frontend and a separate Node.js API.",
      ],
      tags: ["React", "Node.js", "Express", "JWT"],
      links: [
        { label: "Live site", url: "https://urban-lux.vercel.app/" },
        { label: "GitHub", url: "https://github.com/jeetchauhan123/UrbanLUX" },
      ],
      image: "media/urbanlux.webp",
    },
    {
      name: "Velvet Pour",
      featured: false,
      hue: 20,
      tagline: "A cinematic website for a premium cocktail lounge.",
      description:
        "A frontend showcase that aims to make visitors feel like they've walked into the venue, using scroll-driven storytelling, parallax and smooth transitions.",
      highlights: [
        "Scroll-triggered animation sequences.",
        "Fully responsive layout.",
      ],
      tags: ["GSAP", "ScrollTrigger", "CSS3"],
      links: [
        {
          label: "Live site",
          url: "https://jeetchauhan123.github.io/Gsap_Cocktail/",
        },
        {
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/Gsap_Cocktail",
        },
      ],
      image: "media/velvet-pour.webp",
    },
    {
      name: "Chat Application",
      featured: false,
      hue: 200,
      tagline:
        "A full-stack chat application focused on backend architecture, relational database design and secure user communication.",
      description:
        "A chat application built with React, ASP.NET Core and PostgreSQL, with an emphasis on structured backend development and a maintainable database foundation. The project includes user registration, email-based identity, online status tracking and conversation structure, while laying the groundwork for real-time messaging.",
      highlights: [
        "Implemented user registration with unique email-based identities.",
        "Designed relational database structures for users and conversations, including online status and last-seen tracking.",
        "Improved conversation schema design with last-message references for more efficient message previews.",
        "Focused on database normalization, entity relationships and extensible backend architecture.",
        "Planning message delivery status, typing indicators and real-time communication features.",
      ],
      tags: [
        "React",
        "ASP.NET Core",
        "C#",
        "PostgreSQL",
        "Entity Framework Core",
        "SignalR",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/Chat_App",
        },
      ],
    },
    {
      name: "Notes App",
      featured: false,
      hue: 260,
      tagline:
        "A React-based productivity tool for creating, managing, searching and sharing code snippets and notes.",
      description:
        "Paste A is a lightweight notes and code-snippet management application that makes it easy to save useful information and retrieve it when needed. It combines Redux Toolkit state management, dynamic routing and browser-based persistence in a clean, practical interface.",
      highlights: [
        "Create, edit and delete notes or code snippets with titles and content.",
        "Search saved pastes instantly by title.",
        "Use dynamic routes to view and share individual pastes through their URLs.",
        "Copy snippet content to the clipboard with a single click.",
        "Persist saved data in localStorage without requiring a backend database.",
      ],
      tags: [
        "React",
        "Redux Toolkit",
        "React Router",
        "Tailwind CSS",
        "localStorage",
      ],
      links: [
        {
          label: "Live site",
          url: "https://notes-app-bay-phi.vercel.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/Notes_App",
        },
      ],
    },
    {
      name: "LeetMatric",
      featured: false,
      hue: 145,
      tagline:
        "A LeetCode statistics dashboard that visualizes problem-solving progress through interactive progress indicators.",
      description:
        "LeetMatric is a browser-based statistics visualizer that retrieves LeetCode profile data through its GraphQL API. It presents solved problems by difficulty, submission statistics and progress indicators in a responsive dashboard built with vanilla JavaScript.",
      highlights: [
        "Search for LeetCode users with username validation.",
        "Display solved and total problems across Easy, Medium and Hard difficulties.",
        "Visualize progress using circular indicators created with CSS conic-gradient.",
        "Present submission statistics in organized dashboard cards.",
        "Integrate API requests through a CORS proxy to work around browser cross-origin restrictions.",
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "GraphQL", "REST/API Integration"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/LeetMatric",
        },
      ],
    },
    {
      name: "Razorpay Homepage Clone",
      featured: false,
      hue: 215,
      tagline:
        "A frontend recreation of an earlier Razorpay homepage built to practice responsive layouts and utility-first styling.",
      description:
        "A frontend-only clone of an older Razorpay homepage, created to explore how modern product websites structure navigation, hero sections and reusable interface elements. The project focuses on layout composition, Tailwind CSS utilities and responsive styling rather than payment functionality.",
      highlights: [
        "Recreated the navigation bar and hero section.",
        "Built buttons and reusable interface elements using React and Tailwind CSS.",
        "Practiced layout composition, spacing and CSS styling.",
        "Explored responsive design techniques while recreating a real-world website layout.",
      ],
      tags: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/RazorPay_Clone",
        },
      ],
    },
    {
      name: "Recipe Project",
      featured: false,
      hue: 35,
      tagline:
        "A simple recipe website showcasing structured content, CSS layouts and interactive hover effects.",
      description:
        "A beginner-friendly recipe website developed with HTML and CSS to practice page structure and visual presentation. It combines recipe content, image overlays, gradient backgrounds and card-based layouts to build a clean, organized browsing experience.",
      highlights: [
        "Created a navigation bar and structured recipe sections.",
        "Organized ingredients and recipe instructions into clear layouts.",
        "Applied Flexbox, gradients and box shadows to improve visual presentation.",
        "Implemented image hover effects and overlays.",
        "Added a footer to complete the page layout.",
      ],
      tags: ["HTML5", "CSS3", "Flexbox", "Responsive Layouts"],
      links: [{
          label: "GitHub",
          url: "https://github.com/jeetchauhan123/Recipe",
        },],
    },
    // More projects: copy a block, set featured:false. Extra projects go into the paged "all projects" view with tag filters.
  ],
  /* level (0-100) fills the ring: my estimates, adjust honestly.
     icon = Devicon class (devicon.dev). color = glow colour. No icon? set mono:"AB" for a letter badge. */
  skills: [
    {
      name: "Interface",
      blurb: "What users see and touch",
      items: [
        {
          name: "React.js",
          level: 78,
          note: "Daily driver",
          icon: "devicon-react-original",
          color: "#61dafb",
        },
        {
          name: "JavaScript",
          level: 88,
          note: "ES6+",
          icon: "devicon-javascript-plain",
          color: "#f7df1e",
        },
        {
          name: "Redux Toolkit",
          level: 60,
          note: "State management",
          icon: "devicon-redux-original",
          color: "#764abc",
        },
        {
          name: "Tailwind CSS",
          level: 80,
          note: "Styling",
          icon: "devicon-tailwindcss-original",
          color: "#38bdf8",
        },
        {
          name: "GSAP",
          level: 52,
          note: "Animation",
          mono: "GS",
          color: "#88ce02",
        },
        {
          name: "HTML5",
          level: 90,
          note: "Semantic markup",
          icon: "devicon-html5-plain",
          color: "#e34f26",
        },
        {
          name: "CSS3",
          level: 88,
          note: "Responsive layouts",
          icon: "devicon-css3-plain",
          color: "#1572b6",
        },
      ],
    },
    {
      name: "Server",
      blurb: "Logic, APIs and auth",
      items: [
        {
          name: "Node.js",
          level: 80,
          note: "Runtime",
          icon: "devicon-nodejs-plain",
          color: "#5fa04e",
        },
        {
          name: "Express.js",
          level: 80,
          note: "REST APIs",
          icon: "devicon-express-original",
        },
        {
          name: "GraphQL",
          level: 30,
          note: "Queries",
          icon: "devicon-graphql-plain",
          color: "#e10098",
        },
        {
          name: "ASP.NET",
          level: 40,
          note: "Web framework",
          icon: "devicon-dotnetcore-plain",
          color: "#512bd4",
        },
        {
          name: "C#",
          level: 40,
          note: "Language",
          icon: "devicon-csharp-plain",
          color: "#9b4f96",
        },
        {
          name: "SignalR",
          level: 35,
          note: "Realtime",
          mono: "SR",
          color: "#512bd4",
        },
        {
          name: "JWT",
          level: 82,
          note: "Secure sessions",
          mono: "JWT",
          color: "#d63aff",
        },
      ],
    },
    {
      name: "Data",
      blurb: "Where information lives",
      items: [
        {
          name: "MongoDB",
          level: 85,
          note: "Query tuning",
          icon: "devicon-mongodb-plain",
          color: "#47a248",
        },
        {
          name: "PostgreSQL",
          level: 65,
          note: "Relational",
          icon: "devicon-postgresql-plain",
          color: "#4169e1",
        },
      ],
    },
    {
      name: "Ship",
      blurb: "Tools and deployment",
      items: [
        {
          name: "Git",
          level: 85,
          note: "Version control",
          icon: "devicon-git-plain",
          color: "#f05032",
        },
        {
          name: "GitHub",
          level: 90,
          note: "Collaboration",
          icon: "devicon-github-original",
        },
        {
          name: "AWS",
          level: 32,
          note: "Deployments",
          icon: "devicon-amazonwebservices-plain-wordmark",
          color: "#ff9900",
        },
        {
          name: "Vercel",
          level: 95,
          note: "Frontend hosting",
          icon: "devicon-vercel-original",
        },
        {
          name: "Render",
          level: 90,
          note: "Backend hosting",
          mono: "R",
          color: "#46e3b7",
        },
        {
          name: "Postman",
          level: 80,
          note: "API testing",
          icon: "devicon-postman-plain",
          color: "#ff6c37",
        },
      ],
    },
  ],
  education: [
    {
      level: "Postgraduate degree",
      short: "MCA",
      title: "Master of Computer Applications",
      org: "L.D. College of Engineering",
      location: "Ahmedabad, Gujarat",
      from: "2023",
      to: "2025",
      note: "Postgraduate study in computer applications, completed alongside my first internship.",
      links: [{ label: "Degree certificate", url: "media/mca_degree.pdf" }],
    },
    {
      level: "Undergraduate degree",
      short: "BCA",
      title: "Bachelor of Computer Applications",
      org: "Chimanbhai Patel Institute of Computer Application",
      location: "Ahmedabad, Gujarat",
      from: "2020",
      to: "2023",
      note: "Where I built my foundation in programming, databases and web development.",
      links: [{ label: "Degree certificate", url: "media/bca_degree.pdf" }],
    },
  ],
  /* Add as many as you like. The wall adapts. */
  certifications: [
    {
      title: "Applied Cloud Computing",
      issuer: "Microsoft & Edunet",
      kind: "Certification",
      year: "",
      links: [{ label: "View certificate", url: "media/cloud_computing.pdf" }],
    },
    {
      title: "Smart India Hackathon",
      issuer: "AICTE",
      kind: "Award",
      year: "",
      links: [{ label: "View certificate", url: "media/sih.pdf" }],
    },
    {
      title: "Vibe Coding: Build Faster with AI",
      issuer: "Lets Upgrade",
      kind: "Certification",
      year: "",
      links: [
        { label: "View certificate", url: "media/Vibe_Coding_letsupgrade.pdf" },
      ],
    },
    {
      title: "Roadmap to Data Scientist",
      issuer: "Coding Ninjas",
      kind: "Certification",
      year: "",
      links: [
        {
          label: "View certificate",
          url: "media/Data_Scientist_codingninjas.jpg",
        },
      ],
    },
    {
      title: "JavaScript Bootcamp",
      issuer: "Lets Upgrade",
      kind: "Certification",
      year: "",
      links: [
        { label: "View certificate", url: "media/JS_Bootcamp_letsupgrade.pdf" },
      ],
    },
    {
      title: "Data Science using Python",
      issuer: "SCALER MASTERCLASS",
      kind: "Certification",
      year: "",
      links: [
        { label: "View certificate", url: "media/Data_Science_scaler.png" },
      ],
    },
    {
      title: "Build a Multi-Role Super Agent",
      issuer: "Simplilearn",
      kind: "Certification",
      year: "",
      links: [
        { label: "View certificate", url: "media/Super_Agent_Simplilearn.pdf" },
      ],
    },
    {
      title: "Claude AI",
      issuer: "Skill Nation",
      kind: "Certification",
      year: "",
      links: [
        { label: "View certificate", url: "media/Claude_AI_SkillNation.pdf" },
      ],
    },
    // { title: "Name", issuer: "Issuer", kind: "Certification", year: "2025", links: [{ label: "View certificate", url: "media/file.pdf" }] },
  ],
  custom: {
    // achievements: { title: "Achievements", intro: "Short line.", items: [{ title: "", org: "", period: "", bullets: [], tags: [], links: [] }] }
  },
};

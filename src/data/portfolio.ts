// Dummy data — edit this freely. All copy is in one place so you can swap your real content in fast.

export const profile = {
  name: 'Mohammed Ahmed',
  shortName: 'Mohammed',
  title: 'Software Engineer',
  location: 'Cairo, Egypt',
  email: 'mohammedbahr686@gmail.com',
  phone: '01034284964',
  tagline:
    'I turn ideas into real products building modern Software applications, scalable backend systems, and automated infrastructure with a passion for continuous learning and innovation..',
  bio: `I'm a fullstack developer with 2+ years of experience turning ideas into products people love. I care about the details — type, motion, performance — and I love working at the intersection of design and engineering.`,
  avatar: 'me.jpg',
  resumeUrl: '/CV.pdf',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Mohammed-Bahr', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohammed-bahr/', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://x.com/hamme_m5169', icon: 'twitter' },
  ],
};

export const stats = [
  { label: 'Years experience', value: '3+' },
  { label: 'Projects shipped', value: '10+' },
  { label: 'Happy clients', value: '5+' },
  { label: 'Coffee / week', value: '∞' },
];

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export const skills = {
  Fullstack: [
    { name: 'React / Express.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'framer-motion', level: 85 },
  ],
  Backend: [
    { name: 'Node.js / Express', level: 88 },
    { name: 'Rust', level: 80 },
    { name: 'MySQL', level: 78 },
    { name: 'MongoDB', level: 72 },
  ],
  DevopsTools: [
    { name: 'Git & GitHub', level: 95 },
    { name: 'Kubernetes', level: 80 },
    { name: 'Docker', level: 95 },
    { name: 'AWS', level: 82 },
    { name: 'Terraform', level: 80 },
    { name: 'BashScript', level: 85 },

  ],
};

export const experience = [
  {
    role: 'Full‑Stack Developer',
    period: '2024 — Present',
    location: 'Remote',
    link: 'https://github.com/Mohammed-Bahr/Food_App',
    bullets: [
      'Developed Food_App — a responsive, full‑stack food ordering web application using the MERN stack (React, Node.js, Express, MongoDB). Implemented client-side features for menu browsing, search/filter, cart management, and order checkout to deliver a smooth user experience.',
      'Designed and implemented RESTful APIs and data models with Express and Mongoose for products, orders, and users; added secure user authentication, input validation, role-based access for admin functions, and optimized queries for performance and pagination.',
      'Improved development velocity and reliability by adding linting/formatting, automated tests, and CI/CD workflows; containerized and prepared the app for cloud deployment, reducing deployment friction and supporting scalable delivery.',
    ]
  },
  {
    role: 'Machine Learning Engineer',
    period: '2026 — Present',
    location: 'Remote',
    link: 'https://github.com/Mohammed-Bahr/Vector_Quantization',
    bullets: [
      'Implemented vector quantization algorithms and training/evaluation pipelines in Python using NumPy/PyTorch; produced reproducible experiments and metrics tracking.',
      'Optimized code for speed and memory, modularized components for reuse, and documented usage for integration into downstream ML systems.',
    ],
  },
  {
    role: 'Full‑Stack TypeScript Developer',
    period: '2024 — Present',
    location: 'Remote',
    link: 'https://github.com/Mohammed-Bahr/Ecommerce_project',
    bullets: [
      'Built a type‑safe e‑commerce application in TypeScript with end‑to‑end features: product catalog, cart, orders, and secure auth/API endpoints.',
      'Improved developer velocity with strict typing, automated tests, and CI/CD-ready configuration for reliable deployments.',
    ],
  },
  {
    role: 'Computer Graphics Developer',
    period: '2026 — Present',
    location: 'Remote',
    link: 'https://github.com/Mohammed-Bahr/ComputerGraphics-Project.git',
    bullets: [
      'Engineered real‑time rendering and visualization features in C++, implementing core graphics algorithms and efficient data structures.',
      'Profiled and optimized performance-critical code, producing smooth frame rates and maintainable rendering modules.',
    ],
  },
  {
    role: 'Database / Data Engineer',
    period: '2025 — 2026',
    location: 'Remote',
    link: 'https://github.com/Mohammed-Bahr/DataBase.git',
    bullets: [
      'Designed and implemented database schemas, CRUD operations, and migration scripts in Python to support reliable data storage and access patterns.',
      'Tuned queries and ETL scripts for performance and maintainability, and added documentation to simplify integration with application services.'
    ]
  },
];

export const projects = [
  {
    title: 'Problem Solving',
    description: 'Collection of algorithm and competitive programming solutions implemented in C++, Python, and Rust with optimized implementations and explanations.',
    tags: ['C++', 'Algorithms', 'Competitive Programming', 'Python', 'OOP', 'Rust'],
    image: '/coding.png',
    live: '',
    repo: 'https://leetcode.com/u/YUlmcnVTIY/',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'Courses & Projects',
    description: 'Assortment of coursework and class projects across systems, embedded, and web domains implemented in C, C++, Java, Assembly, and HTML.',
    tags: ['C++', 'Coursework', 'Embedded', 'Projects'],
    image: './Projects.png',
    live: 'https://github.com/Mohammed-Bahr/CoursesProjects',
    repo: 'https://github.com/Mohammed-Bahr/CoursesProjects',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'Data Structures & Algorithms',
    description: 'Implementations of fundamental data structures and algorithms in C++ and Python with tests and usage examples for learning and interview prep.',
    tags: ['C++', 'Data Structures', 'Algorithms', 'OOP', 'Graphs', 'Rust'],
    image: './DataStructures&Algorithms.png',
    live: 'https://github.com/Mohammed-Bahr/DS-Algorithms',
    repo: 'https://github.com/Mohammed-Bahr/DS-Algorithms',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'CPU Scheduler Simulator',
    description: 'Java simulator of multiple CPU scheduling algorithms (Preemptive SJF, Round Robin, Priority, AG) with context switching and performance metrics.',
    tags: ['Java', 'OS', 'Scheduling', 'Simulator'],
    image: './CPU.png',
    live: 'https://github.com/Mohammed-Bahr/CPU-Scheduler-Simulator',
    repo: 'https://github.com/Mohammed-Bahr/CPU-Scheduler-Simulator',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'OS Terminal',
    description: 'Java-based terminal/shell project implementing command parsing, basic process control, and OS-like utilities for educational systems work.',
    tags: ['Java', 'Shell', 'Systems', 'CLI'],
    image: './Terminal.png',
    live: 'https://github.com/Mohammed-Bahr/OS_Terminal',
    repo: 'https://github.com/Mohammed-Bahr/OS_Terminal',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'Pattern Recognition',
    description: 'Python implementations of pattern recognition and ML workflows: preprocessing, feature extraction, model training, and evaluation.',
    tags: ['Python', 'Machine Learning', 'Pattern Recognition', 'Classification'],
    image: './Pattern.png',
    live: 'https://github.com/Mohammed-Bahr/Pattern-Recognition',
    repo: 'https://github.com/Mohammed-Bahr/Pattern-Recognition',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'Digital Signals & Waves',
    description: 'Python notebooks and scripts for digital signal processing — sampling, Fourier analysis, filtering, and waveform visualization.',
    tags: ['Python', 'DSP', 'Signal Processing', 'Visualization'],
    image: './Waves.png',
    live: 'https://github.com/Mohammed-Bahr/DigitalSignals-Waves',
    repo: 'https://github.com/Mohammed-Bahr/DigitalSignals-Waves',
    accent: 'from-indigo-500 to-cyan-400'
  },
  {
    title: 'Digital Clock',
    description: 'Responsive web-based digital clock built with JavaScript, HTML, and CSS featuring smooth animations and time display utilities.',
    tags: ['JavaScript', 'Frontend', 'Clock', 'HTML'],
    image: './Clock.png',
    live: 'https://github.com/Mohammed-Bahr/Digital_Clock',
    repo: 'https://github.com/Mohammed-Bahr/Digital_Clock',
    accent: 'from-indigo-500 to-cyan-400'
  }
];

// export const testimonials = [
//   {
//     name: 'Priya Shah',
//     role: 'Product Lead, Nimbus Labs',
//     avatar: 'https://i.pravatar.cc/120?img=47',
//     quote:
//       "Alex is the rare engineer who can both architect a system and obsess over a 4px gap in a button. Our product is meaningfully better because of him.",
//   },
//   {
//     name: 'Daniel Okafor',
//     role: 'Founder, Pixel Forge',
//     avatar: 'https://i.pravatar.cc/120?img=33',
//     quote:
//       "We hired Alex for a small landing page. By month three he was running point on half our client work. Clients love him, and so do we.",
//   },
//   {
//     name: 'Mei Tanaka',
//     role: 'Design Director, Lumen',
//     avatar: 'https://i.pravatar.cc/120?img=45',
//     quote:
//       "I've never seen an engineer ship a handoff as clean as Alex's. He doesn't just implement the design — he improves it.",
//   },
//   {
//     name: 'Jonas Weber',
//     role: 'CTO, Orbit DS',
//     avatar: 'https://i.pravatar.cc/120?img=11',
//     quote:
//       "The detail in his motion work is next level. Our component library wouldn't feel half as alive without his contributions.",
//   },
// ];

export interface Certification {
  title: string;
  issuer: string;
  issued: string;
  description: string;
  image: string;
  credentialUrl?: string;
  tags: string[];
}

export const certifications: Certification[] = [
  {
    title: 'Front-End Web Development Internship Offer',
    issuer: 'Elevvo',
    issued: '2026-02-07',
    description:
      'An internship offer letter from Elevvo addressed to Mohammed Ahmed for a 1-month remote and self-paced Front-End Web Development internship. The program starts on February 8, 2026, and includes practical tasks, educational resources, and personalized feedback. A certificate is awarded upon completion.',
    image: './elevvo.jpeg',
    credentialUrl: '',
    tags: ['Internship', 'Front-End Web Development', 'Remote', 'Elevvo'],
  },
  {
    title: 'Ubuntu Linux Essentials',
    issuer: 'Mahara-Tech',
    issued: '2026-02-10',
    description:
      'A Certificate of Completion indicating that Mohammed Bahr successfully completed the "Ubuntu Linux Essentials" course. The course duration was 7 hours and 20 minutes. The certificate includes the verification code x9riYFbyUd and features a red checkmark seal and QR code.',
    image: './Obuntu_Course.png',
    credentialUrl: '',
    tags: ['Linux', 'Ubuntu', 'Operating System', 'Mahara-Tech', 'Certificate'],
  },
  {
    title: 'ALX Professional Foundations Month 1 Completed',
    issuer: 'ALX Africa',
    issued: '',
    description:
      'An electronic badge certifying the completion of the first month of the ALX Professional Foundations program. The credential is issued to Mohammed Bahr by ALX Africa. The program is an online, foundational-level achievement spanning a total duration of 5 months.',
    image: 'month.png',
    credentialUrl: '',
    tags: ['ALX Africa', 'Professional Foundations', 'Soft Skills', 'Achievement'],
  },
  {
    title: 'MERN: React, NodeJS, Express & MongoDB in Arabic',
    issuer: 'Udemy',
    issued: '2026-04-22',
    description:
      'A Udemy certificate of completion indicating that Mohammed Bahr successfully completed the "MERN: React, NodeJS, Express & MongoDB in Arabic" course. The course was instructed by Yahya ElAraby and had a total duration of 13 hours.',
    image: './Udemy_MERN_Certificate.jpg',
    credentialUrl: '',
    tags: ['MERN Stack', 'React', 'NodeJS', 'Express', 'MongoDB', 'Web Development', 'Udemy'],
  }
];

export const toolMarquee = [
  'Software Engineering',
  'Software Development',
  'Full Stack Development',
  'React', 'TypeScript', 'Express.js', 'Tailwind', 'Node.js',
  'Rust', 'Linux Adminstration', 'Devops', 'Docker', 'CI/CD',
  'C++', 'AWS', 'Kubernetes', 'OOP', 'Algorithms', 'System Design',
];

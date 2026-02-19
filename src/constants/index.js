import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";
import project10 from "../assets/projects/project-10.png";
import project11 from "../assets/projects/project-11.png";

import frontend from "../assets/cards/frontend.png";
import backend from "../assets/cards/backend.png";
import ux from "../assets/cards/ux.png";
import prototyping from "../assets/cards/prototyping.png";

import stakesmenIcon from "../assets/stakesmen.jpg";
import ecellIcon from "../assets/ecell.jpg";
import bitByBitStudio from "../assets/bitByBitStudio.png";

export const HERO_CONTENT = `I am a pre-final year student at IIIT Gwalior and a passionate full-stack web developer based in India, with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Let's build something amazing together!`;

export const ABOUT_TEXT = `
  I am a final-year computer science student at <a href="https://iiitm.ac.in/index.php/en/" target="_blank" rel="noopener noreferrer" style="color: #1e90ff; text-decoration: underline;">IIIT Gwalior</a>. 
  I’m a full-stack developer with 2 years of experience building dynamic UIs using React, React Native, and Next.js, and backend systems with Node.js, Express.js, and databases like MySQL, PostgreSQL, and MongoDB. 
  I have recently learned Go and am now focused on scalable backend development, microservices, and system design. I also actively practice DSA and competitive programming, and enjoy following politics and geopolitics.
`;

export const EXPERIENCES = [
  {
    title: "Full Stack Developer",
    company_name: "Bit By Bit Studio",
    icon: bitByBitStudio,
    iconBg: "#383E56",
    date: "May 2025 - July 2025",
    points: [
      "Developed and deployed a scalable web platform for dantsri.com using React, SCSS and Supabase.",
      "Improved UX, performance, and SEO through responsive design and structured audits.",
    ],
  },
  {
    title: "React, React-Native Developer",
    company_name: "Stakesmen",
    icon: stakesmenIcon,
    iconBg: "#383E56",
    date: "June 2024 - July 2024",
    points: [
      "Collaborated with Web and Automation teams to optimize processes, enhance performance, and upscale the application using React and React Native.",
      "Redesigned outdated functions for improved efficiency and utilized Expo for mobile development.",
    ],
  },
  {
    title: "Content Member",
    company_name: "ECell, IIIT Gwalior",
    icon: ecellIcon,
    iconBg: "#383E56",
    date: "Feb 2023 - Oct 2023",
    points: [
      "Collaborated with the content department at ECell, writing blogs on various topics.",
      "Managed scripts for events and contributed to content development for community engagement.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "RepoLoop",
    image: project1,
    description:
      "A powerful app for discovering GitHub user profiles and repositories, offering a seamless browsing experience with intuitive design and secure login features to personalize the journey.",
    technologies: ["ReactJs", "NodeJs", "MongoDB", "PassportJs"],
    liveLink: "https://project-mern-github.onrender.com/",
    githubLink: "https://github.com/groot34/project_mern_repoloop",
  },
  {
    title: "Meetx",
    image: project2,
    description:
      "An efficient video conferencing platform supporting multiple rooms and real-time interactions, enabling smooth connections for users in various environments, with high performance and user-friendly features.",
    technologies: ["ReactJs", "NextJs", "TypeScript", "Clerk"],
    liveLink: "https://meetx.vercel.app/",
    githubLink: "https://github.com/groot34/project_mern_meetx",
  },
  {
    title: "5ocial",
    image: project3,
    description:
      "An engaging social media app allowing users to connect, message, form communities, and receive notifications in real time, all in a sleek, responsive interface that enhances user engagement.",
    technologies: ["NextJs", "UploadThing", "MongoDB", "Clerk"],
    liveLink: "https://5ocial.vercel.app/",
    githubLink: "https://github.com/groot34/5ocial",
  },
  {
    title: "Atharvxfolio",
    image: project4,
    description:
      "A personal portfolio showcasing projects and skills in a modern, animated design. Smooth transitions and a visually pleasing layout bring each project to life, making it easy to navigate and explore.",
    technologies: ["React", "Tailwindcss", "Framer Motion"],
    liveLink: "https://atharvx.vercel.app/",
    githubLink: "https://github.com/groot34/myPFrontend",
  },
  {
    title: "Dynamic Malware Analysis",
    image: project5,
    description:
      "A powerful app for discovering GitHub user profiles and repositories, offering a seamless browsing experience with intuitive design and secure login features to personalize the journey.",
    technologies: ["Windows", "ProcMon", "Proc Explorer", "Oracle VM"],
    liveLink: "",
    githubLink: "https://github.com/groot34/MA",
  },
  {
    title: "tknote",
    image: project6,
description:
  "A terminal-based note-taking application built in Go, offering a fast, distraction-free writing experience with an interactive TUI, file management, search, and safe delete confirmations.",
technologies: ["Go", "Bubble Tea", "Lipgloss"],
    liveLink: "",
    githubLink: "https://github.com/groot34/tknote",
  },
  {
  title: "ScrapHire",
  image: project7,
  description:
    "An automated job aggregation platform that collects, deduplicates, and analyses listings from multiple sources, featuring skill extraction, fast search, and a responsive full-stack web interface.",
  technologies: ["Next.js", "Go", "Node.js", "MongoDB"],
  liveLink: "https://scraphire.vercel.app",
  githubLink: "https://github.com/groot34/job-aggregator",
  },
    {
  title: "FinBoard",
  image: project8,
  description:
    "A customisable real-time finance dashboard that lets users build personalised monitoring layouts using live financial APIs, interactive widgets, charts, and persistent local state.",
  technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Zustand"],
  liveLink: "https://finboard-henna-one.vercel.app",
  githubLink: "https://github.com/groot34/FinBoard",
  },
    {
  title: "NewsIQ",
  image: project9,
  description:
    "An AI-powered newsletter generation platform that aggregates RSS feeds, summarises articles, and produces structured, brand-aware newsletters through a modern dashboard and streaming workflows.",
  technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Vercel AI SDK"],
  liveLink: "https://newsiq.vercel.app",
  githubLink: "https://github.com/groot34/NewsIQ",
  },
  {
    title: "Mini CRM Backend",
    image: project10,
    description:
      "A production-ready CRM backend built with NestJS, providing secure user management, customer and task workflows, and role-based access control using JWT authentication.",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "JWT"],
    liveLink: "https://mini-crm-backend-mz35.onrender.com/api",
    githubLink: "https://github.com/groot34/mini-crm-backend",
  },
  {
    title: "Insight Forge",
    image: project11,
    description:
      "An AI-powered data analysis platform that transforms raw CSVs into actionable insights, offering interactive previews, automated visualizations, and intelligent summaries of trends and key findings.",
    technologies: ["Next.js", "TypeScript", "Groq AI", "Chart.js", "Tailwind CSS"],
    liveLink: "https://insight-forge-nu.vercel.app/",
    githubLink: "https://github.com/groot34/insight-forge",
  },
];

export const services = [
  {
    id: "frontend",
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    id: "ux",
    title: "UI/UX Design",
    icon: ux,
  },
  {
    id: "web",
    title: "Web devlopement",
    icon: prototyping,
  },
  {
    id: "backend",
    title: "Backend Developer",
    icon: backend,
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

const styles = {
  innerWidth: "2xl:max-w-[1280px] w-full",
  interWidth: "lg:w-[80%] w-[100%]",

  paddings: "sm:p-16 xs:p-8 px-6 py-12",
  yPaddings: "sm:py-16 xs:py-8 py-12",
  xPaddings: "sm:px-16 px-6",
  topPaddings: "sm:pt-16 xs:pt-8 pt-12",
  bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-start items-start",
  flexEnd: "flex justify-end",
  navPadding: "pt-[98px]",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2",
  heroSubText:
    "text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins",
  sectionHeadTextLight:
    "text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins",
  sectionSubText:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",
  sectionSubTextLight:
    "sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins",
};

export { styles };

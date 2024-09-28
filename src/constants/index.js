import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

import frontend from "../assets/cards/frontend.png";
import backend from "../assets/cards/backend.png";
import ux from "../assets/cards/ux.png";  
import prototyping from "../assets/cards/prototyping.png";

export const HERO_CONTENT = `I am a pre-final year student at IIIT Gwalior and a passionate full-stack web developer based in India, with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences. Let's build something amazing together!`;

export const ABOUT_TEXT = `
I'm a passionate full-stack developer with 2 years of experience in building dynamic user interfaces using React and Next.js, while integrating databases like MySQL, PostgreSQL, and MongoDB. I enjoy solving complex problems, learning new technologies, and working collaboratively to create high-quality solutions. Currently, I’m diving into DevOps and honing my DSA and competitive programming skills. Outside of coding, I stay active and keep up with politics and geopolitics.`;

export const EXPERIENCES = [
  {
    year: "June 2024-July 2024",
    role: "React, React-Native Developer",
    company: "Stakesmen",
    description: `Collaborated with Web and Automation teams to optimize processes, enhance performance, and upscale the application using React and React Native. Redesigned outdated functions for improved efficiency and utilized Expo for mobile development. Focused on testing and debugging to ensure smooth functionality and data accuracy.`,
    technologies: ["Javascript", "React.js", "React Native", "CSS", "Tailwind CSS"]
  },
  {
    year: "Feb 2023 - Oct 2023",
    role: "Content Member",
    company: "ECell, IIIT Gwalior",
    description: `Collaborated with the content department at ECell, writing blogs on various topics and managing scripts for events.`,
    technologies: []
  }
  
  

];

export const PROJECTS = [
  {
    title: "RepoLoop",
    image: project1,
    description:
      "Developed an app using the MERN stack and GitHub API to fetch user profiles and repositories, enhancing scalability by 30%. Integrated Passport.js for authentication, supporting 3000 users. Used Tailwind CSS for a responsive UI, boosting engagement by 40%.",
    technologies: ["ReactJs", "NodeJs", "MongoDB", "PassportJs"],
    liveLink: "https://project-mern-github.onrender.com/",
    githubLink: "https://github.com/groot34/project_mern_repoloop"
  },
  {
    title: "Meetx",
    image: project2,
    description:
      "Built a video conferencing app supporting 600+ rooms and 50 concurrent users using Stream SDK. Used Next.js SSR for better performance and SEO. Integrated Clerk for user authentication, handling 10,000 active users.",
    technologies: ["ReactJs", "NextJs", "TypeScript", "Clerk"],
    liveLink: "https://meetx.vercel.app/",
    githubLink: "https://github.com/groot34/project_mern_meetx"
  },
  {
    title: "5ocial",
    image: project3,
    description:
      "Developed a social media app with messaging, communities, and notifications using MongoDB and Uploadthing. SSR with Next.js improved SEO, while Tailwind CSS created a responsive UI, increasing engagement by 30%.",
    technologies: ["NextJs", "UploadThing", "MongoDB", "Clerk"],
    liveLink: "https://5ocial.vercel.app/",
    githubLink: "https://github.com/groot34/5ocial"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio showcasing projects and skills, built with React and Tailwind CSS, featuring smooth animations with Framer Motion.",
    technologies: ["React", "Tailwindcss", "Framer Motion"],
    liveLink: "https://atharvx.vercel.app/",
    githubLink: "https://github.com/groot34/myPFrontend"
  }
  
  

];

export const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Web devlopement',
    icon: prototyping,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};


const styles = {
  innerWidth: '2xl:max-w-[1280px] w-full',
  interWidth: 'lg:w-[80%] w-[100%]',

  paddings: 'sm:p-16 xs:p-8 px-6 py-12',
  yPaddings: 'sm:py-16 xs:py-8 py-12',
  xPaddings: 'sm:px-16 px-6',
  topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
  bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-start items-start',
  flexEnd: 'flex justify-end',
  navPadding: 'pt-[98px]',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',
  padding: 'sm:px-16 px-6 sm:py-16 py-10',

  heroHeadText:
    'font-black text-eerieBlack lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[90px] mt-2',
  heroSubText:
    'text-eerieBlack font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

  sectionHeadText:
    'text-eerieBlack font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionHeadTextLight:
    'text-timberWolf font-black md:text-[60px] sm:text-[48px] xs:text-[40px] text-[30px] font-poppins',
  sectionSubText:
    'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',
  sectionSubTextLight:
    'sm:text-[18px] text-[16px] text-taupe uppercase tracking-wider font-semibold font-poppins',
};

export { styles };
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I am a pre-final year student at IIIT Gwalior and a passionate full-stack web developer based in India, with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a range of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity about how things work, which has evolved into a career where I continuously strive to learn and adapt to new challenges.

I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Currently, I am exploring the DevOps domain, while also sharpening my skills in Data Structures and Algorithms (DSA) and competitive programming. Outside of coding, I enjoy staying active, exploring new technologies, and collaborating with others.`;

export const EXPERIENCES = [
  {
    year: "June 2023-July 2023",
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
    technologies: ["NextJs", "TypeScript", "UploadThing", "MongoDB", "Clerk"],
    liveLink: "https://5ocial.vercel.app/",
    githubLink: "https://github.com/groot34/5ocial"
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio showcasing projects and skills, built with React and Tailwind CSS, featuring smooth animations with Framer Motion.",
    technologies: ["React", "Tailwindcss", "Framer Motion"],
    liveLink: "http://localhost:5173/",
    githubLink: "https://github.com/user/portfolio"
  }
  
  

];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};

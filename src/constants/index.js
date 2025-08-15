import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with a strong focus on building scalable and high-performance web applications.I have mastered front-end technologies like React.js, along with back-end technologies such as Node.js, Express.js, PostgreSQL and MongoDB. I thrive on creating innovative solutions that enhance user experiences and drive business success.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full-stack developer passionate about building efficient, user-friendly web applications. I have worked with technologies like React.js, Node.js, Prisma, PostgreSQL, MongoDB and AWS, constantly exploring new tools and best practices. My journey in web development started with a deep curiosity for how things work, evolving into a commitment to learning, problem-solving, and creating impactful digital solutions. I actively practice problem-solving on platforms like LeetCode and have a strong foundation in computer science fundamentals, including DBMS, Operating Systems, Computer Networks, and Object-Oriented Programming.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "AI Meeting Summarizer",
    image: project2,
    description:
      "An application that utilizes AI to summarize meeting discussions and action items, enhancing productivity and collaboration.",
    link:"https://melodious-profiterole-c3de27.netlify.app/",  
    technologies: ["React", "Node.js","Express.js", "Gemini","AssemblyAI"],
  },
  {
    title: "Real-Time Chat App",
    image: project1,
    description:
      "A fully functional real-time chat application with features like instant messaging, online status and user authentication.",
    link:"https://mern-chat-app-1-o8e1.onrender.com",  
    technologies: ["React", "Node.js","Express.js", "MongoDB","Socket.io"],
  },
  {
    title: "Transact Ease",
    image: project2,
    description:
      "An application for money transfer with features like secure user authentication, seamless peer-to-peer transactions. It includes MongoDB transactions for ensuring data consistency.",
    link:"https://clinquant-cupcake-5e0704.netlify.app/",  
    technologies: ["React", "Node.js","Express.js", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Loan Status Prediction System",
    image: project4,
    description:
      "A loan status prediction system using SVM (Support Vector Machine) to analyze financial data and predict loan approval chances with high accuracy.",
    link:"https://github.com/ManiChaturvedi/Loan-Prediction-Model",  
    technologies: ["Python", "Pandas", "Numpy", "Streamlit", "Scikit-learn", "Google Colab"],
  },
];

export const CONTACT = {
  address: "Hostel 10A Manit Campus Bhopal",
  phoneNo: "+91 9653084514 ",
  email: "manichaturvedi17@gmail.com",
};

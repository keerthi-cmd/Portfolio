import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from "../types/section";
import { resumeFileName } from "./config";
import { StringKeyValueType } from "../types";
import { getId } from "./helper";

export const author = {
  firstName: "Keerthi",
  lastName: "Appasani",
  email: "keerthi.appasani1@gmail.com",
};

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: "about", url: "/#about" },
    { name: "skills", url: "/#skills" },
    { name: "experience", url: "/#experience" },
    { name: "projects", url: "/#projects" },
    { name: "contact", url: "/#contact" },
  ],
  cta: {
    title: "resume",
    url: `/${resumeFileName}`,
  },
};

export const socialLinks: StringKeyValueType = {
  facebook: "https://www.facebook.com/",
  instagram: "https://www.instagram.com/",
  github: "https://github.com/keerthi-cmd",
  linkedin: "https://www.linkedin.com/in/keerthi-appasani/",
};

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: "tabler:brand-github",
      url: socialLinks.github,
    },
    {
      icon: "mdi:instagram",
      url: socialLinks.instagram,
    },
    {
      icon: "lucide:twitter",
      url: socialLinks.twitter,
    },
    {
      icon: "lucide:linkedin",
      url: socialLinks.linkedin,
    },
    {
      icon: "lucide:facebook",
      url: socialLinks.facebook,
    },
  ],
};

export const profileSection: HeroSectionType = {
  subtitle: "Hi, This is",
  title: "Keerthi Appasani",
  tagline: "I create visually pleasing interfaces for the web.",
  description: `I am a passionate Frontend web developer having an experience of developing web applications using
     React.js, Redux, Angular, HTML5, CSS3, SASS, Bootstrap, .net MVC, SQL Server. I have a strong interest in learning new technologies and implementing them in my projects.`,
  specialText: "My interest is to learn while doing projects.",
  // either button or simple text (information)
  cta: {
    title: "see my resume",
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

export const profileLottie: any = {
  codingLottiePath: "/lotties/coding.json",
};

export const aboutSection: AboutSectionType = {
  title: "about me",
  list: {
    title: "Here are a few technologies I’ve experienced in:",
    items: [
      "ReactJs",
      "NextJs",
      "TailwindCSS",
      "Redux",
      "Angular",
      "Javascript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "SQL Server",
    ],
  },
  img: "/img.jpg",
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: "what i do",
  skills: [
    {
      id: getId(),
      title: "full stack development",
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: "/lotties/frontend.json",
        dark: "/lotties/frontend-dark.json",
      },
      points: [
        "Building responsive static websites using Next.js",
        "Building responsive Single Page Apps in React.js",
        "Building database connections with firebase",
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: "html-5", icon: "vscode-icons:file-type-html" },
        { name: "CSS-3", icon: "vscode-icons:file-type-css" },
        { name: "sass", icon: "vscode-icons:file-type-sass" },
        { name: "javaScript", icon: "vscode-icons:file-type-js-official" },
        {
          name: "typeScript",
          icon: "vscode-icons:file-type-typescript-official",
        },
        { name: "nodejs", icon: "logos:angular" },
        { name: "reactjs", icon: "logos:react" },
        { name: "nextjs", icon: "logos:nextjs-icon" },
        { name: "tailwindcss", icon: "logos:tailwindcss-icon" },
        { name: "redux", icon: "logos:redux" },
        { name: "database", icon: "vscode-icons:file-type-sql" },
        { name: "jest", icon: "vscode-icons:file-type-jest" },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: "Elbaite",
      companyUrl: "https://app.elbaite.com/",
      role: "Frontend developer",
      started: "March 2023",
      upto: "Nov 2023",
      tasks: [
        "Developed reusable components using React and maintain state of application using Redux.",
        "Involved in end to end development.",
        "Contributed to static page development using Webflow and actively participated in enhancing overall performance and SEO",
        "Ensured cross-browser compatibility, crafting websites that perform consistently across various browsers",
      ],
    },
    {
      company: "Accenture",
      companyUrl: "https://www.accenture.com/",
      role: "frontend developer",
      started: "july 2022",
      upto: "April 2021",
      tasks: [
        "Allied with designers and QA departments to better meet overall business goals.",
        "Communicated directly with project stakeholders, providing timely updates on project advancement.",
        "Developed reusable components using React and maintain state of application using Redux.",
        "Learned and shared knowledge of new technologies to support technically challenging projects and assume various responsibilities.",
      ],
    },
    {
      company: "Infosys",
      companyUrl: "https://www.infosys.com/",
      role: "developer",
      started: "April 2021",
      upto: "feb 2017",
      tasks: [
        "Developed reusable components using Angular and responsive design using bootstrap and CSS.",
        "Involved in end to end development.",
        "Resolved typical bugs in both front end and backend of the application.",
        "Used Git as version controller and regularly pushed code to Microsoft azure DevOps repository.",
      ],
    },
  ],
};

export const projectsSection: ProjectsSectionType = {
  title: "my projects",
  projects: [
    {
      id: getId(),
      name: "Simple UI",
      url: "https://keerthiappasanitailwindapp.netlify.app/",
      repo: "https://github.com/keerthi-cmd/",
      img: "/UI.png",
      year: 2023,
      tags: ["Html", "Tailwind", "JS"],
    },

    {
      id: getId(),
      name: "todo app",
      url: "https://todoapp-9bfe9.web.app/",
      repo: "https://github.com/keerthi-cmd/",
      img: "/todo.png",
      year: 2023,
      tags: ["React", "Sass", "JS"],
    },
    {
      id: getId(),
      name: "Netflix GPT",
      url: "https://netflix-1890b.web.app/",
      repo: "https://github.com/keerthi-cmd/",
      img: "/netflix.png",
      year: 2025,
      tags: ["React", "Redux", "Tailwind"],
    },
  ],
};

export const contactSection: ContactSectionType = {
  title: "get in touch",
  subtitle: "what's next",
  paragraphs: [
    "I’m currently looking for a job or any new opportunities.",
    "Whether you have a project to discuss or just want to say hi, my inbox is open for all!",
  ],
  link: `mailto:${author.email}`,
};

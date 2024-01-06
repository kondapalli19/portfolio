import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ShopImg from "@/public/Project1.png";
import textUtilsImg from "@/public/textUtils12.png";
import funTimeImg from "@/public/funTime12.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Adityapur Autocluster",
    location: "Adityapur, Jamshedpur",
    description:
      "Learned and developed the ShopWithUs website using HTML, CSS, JavaScript and deployed on vercel.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "Oasis Infobyte",
    description:
      "I created websites such as temperature converter, calculator and portfolio fully responsive and with both light and dark theme.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Open-source contribution",
    location: "HacktoberFest 2023",
    description:
    "Successfully merged 4 pull requests by adding features and solving bugs to the remote repository. Also, learned to work in a team with a tech stack focused on React and JavaScript.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ShopWithUs",
    description:
      "I developed a fully responsive e-commerce website frontend using pure HTML, CSS, and Javascript for both medium and small screen devices.",
    tags: ["HTML", "CSS", "JavaScript", "github", "vercel"],
    imageUrl: ShopImg,
  },
  {
    title: "FunTime",
    description:
      "It is designed to provide an engaging and festive experience, centered around a true/false trivia game with questions related to Material-UI and React.",
    tags: ["React", "Material UI", "yarn", "github", "vercel"],
    imageUrl: funTimeImg,
  },
  {
    title: "TextUtils",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and many more functionalities.",
    tags: ["React","JSON", "npm", "github", "vercel"],
    imageUrl: textUtilsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Java",
  "Express",
  "MySQL",
  "Material UI",
  "Python",
  "Django",
  "Framer Motion",
  "Docker"
] as const;
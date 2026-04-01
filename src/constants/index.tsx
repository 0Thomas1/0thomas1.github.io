import { CardProps } from "../components/Card";
import { InfoProps } from "../components/Experience";
export const projects: CardProps[] = [
  {
    img: "assets/Mcp_Icon.png",
    title: "Kanban MCP",
    tech: ["Node.js", "TypeScript", "MongoDB"],
    category: "AI/ML",
    description:
      "Kanban-style task manager with Node.js, TypeScript, and MongoDB. Features MCP server for agent automation, robust APIs, Zod validation, JSON caching, and real-time updates.",
    gitLink: "https://github.com/0Thomas1/Kanban-MCP",
    link: "",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Vancouver Trails API",
    tech: ["Node.js", "Express", "Supabase","Docker","Rest API"],
    category: "Web Development",
    description:
      "A simple API for Vancouver trails, providing information about various hiking trails in the Vancouver area.",
    gitLink: "",
    link: "https://vancouver-trails-api-5apnr.ondigitalocean.app/",
  },{
    img: "assets/kanban.jpg",
    title: "Kanban Board",
    tech: ["React", "TypeScript", "MongoDB"],
    category: "Web Development",
    description:
      "A simple Kanban board website for tracking tasks. Features include account systems using MongoDB.",
    gitLink: "https://github.com/0Thomas1/kanban",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Pixoo kanban",
    tech: ["Node.js", "TypeScript", "MongoDB"],
    category: "Web Development",
    description:
      "A simple kanban board display on a Pixoo 64 Led display. Using DB from the previous project.",
    gitLink: "https://github.com/0Thomas1/Pixoo-Kanban",
  },
  {
    img: "assets/PCBee_logo.png",
    title: "PCBee",
    tech: ["Node.js", "Express", "MongoDB","eBay API","OpenAI API","Unit Testing"],
    category: "Web Development",
    description:
      "An AI-assisted PC part picker website utilizing eBay's API and OpenAI API, developed to simplify the PC building process while adhering to proper SDLC methodologies.",
    link: "https://pcbee.onrender.com/",
    gitLink: "https://github.com/Team-Lorem-Ipsum/PCBee",
  },
  {
    img: "assets/mhw-weapon.png",
    title: "MHW Check List",
    tech: ["React", "TypeScript", "MongoDB"],
    category: "Web Development",
    description:
      "A simple to-do list website for tracking desired weapons in Monster Hunter World. Features include account systems using MongoDB, full access to MHW weapons via API, and total material tracking for your weapons.",
    gitLink: "https://github.com/Scansy/mhw-checklist",
  },
  
];

export const experience: InfoProps[] = [
  {
    title: "Computer Science Tutor",
    date: "2024-current",
  },
];

export const education: InfoProps[] = [
  {
    title: "Associate of Science in Computer Science",
    date: "2022-2024",
    institution: "Langara College",
  },
  {
    title: "Bachelor of Science in Computer Science",
    date: "2024",
    institution: "Simon Fraser University",
  },
];

import { CardProps } from "../components/Card";
import { InfoProps } from "../components/Experience";
export const projects: CardProps[] = [
  {
    img: "assets/exit-logo.jpg",
    title: " Exit Cafe & Lounge webpage design",
    description: "Responsive design for a cafe & lounge using Bootstrap and js",
    gitLink: "https://github.com/0Thomas1/Exit-Lounge-Webpage",
    link: "https://0thomas1.github.io/Exit-Lounge-Webpage/",
  },
  {
    title: "Prime Number",
    description: "A simple application about prime number using Python.",
    gitLink: "https://github.com/0Thomas1/prime_no.",
    img: "https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2018/08/pythonfeature.png",
  },
  {
    img: "assets/PCBee_logo.png",
    title: "PCBee",
    description:
      "An AI-assisted PC part picker website utilizing eBay's API and GPT API, developed to simplify the PC building process while adhering to proper SDLC methodologies.",
    link: "https://pcbee.onrender.com/",
    gitLink: "https://github.com/Team-Lorem-Ipsum/PCBee",
  },
  {
    img: "assets/mhw-weapon.png",
    title: "MHW Check List",
    description:
      "A simple to-do list website for tracking desired weapons in Monster Hunter World. Features include account systems using MongoDB, full access to MHW weapons via API, and total material tracking for your weapons.",
    gitLink: "https://github.com/Scansy/mhw-checklist",
  },
  {
    img: "assets/kanban.jpg",
    title: "Kanban Board",
    description:
      "A simple Kanban board website for tracking tasks. Features include account systems using MongoDB.",
    gitLink: "https://github.com/0Thomas1/kanban",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Pixoo kanban",
    description:
      "A simple kanban board display on a Pixoo 64 Led display. Using DB from the previous project.",
    gitLink: "https://github.com/0Thomas1/Pixoo-Kanban",
  },
  {
    img: "https://placehold.co/600x400",
    title: "Vancouver Trails API",
    description:
      "A simple API for Vancouver trails, providing information about various hiking trails in the Vancouver area.",
    gitLink: "",
    link: "https://vancouver-trails-api-5apnr.ondigitalocean.app/",
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

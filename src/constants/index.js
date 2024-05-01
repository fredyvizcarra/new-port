import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  python,
  git,
  figma,
  threejs,
  olyvia,
  bitmon,
  ascent,
  upick,
  upickjam,
  quickjobs,
  instagram,
  linkedin,
  github,
  twitter,
} from "../assets";

export const navLists = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "project",
    title: "Proyects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const footerLinks = [
  {
    name: "Github",
    icon: github,
    path: "https://github.com/fredyvizcarra",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    path: "https://www.linkedin.com/in/fredy-vizcarra-9b0616247/",
  },
  {
    name: "Instagram",
    icon: instagram,
    path: "https://www.instagram.com/fredyvizcarra/",
  },
  {
    name: "Twitter",
    icon: twitter,
    path: "https://twitter.com/fredyeth",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Next js",
    icon: nextjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

export const projects = [
  {
    name: "Upick Sportbook",
    description:
      "An online platform offering pre-match and live sports betting, allowing users to place bets, manage wagers, and perform deposits and withdrawals while accessing real-time sporting events.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: upick,
    source_code_link: "https://github.com/",
  },
  {
    name: "Upick Jam",
    description:
      "A promotional feature within the Upick app, enabling users to participate in NBA prediction pools. Users' eligibility was contingent upon meeting specific criteria, and the app tracked participants' results throughout the duration of the promotion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: upickjam,
    source_code_link: "https://github.com/",
  },
  {
    name: "Upick International",
    description:
      "An international version of Upick in its initial development phase, tailored for use in Spain. This version is currently under construction, aiming to provide Spanish users with access to the Upick platform for sports prediction pools.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: upick,
    source_code_link: "https://github.com/",
  },
  {
    name: "Quickjobs",
    description:
      "An employment application that operates similarly to dating apps, allowing users to post job listings and search for opportunities based on their preferences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: quickjobs,
    source_code_link: "https://github.com/",
  },
  {
    name: "Ascent",
    description:
      "A dashboard for QuickJobs designed to efficiently manage job vacancies and user accounts. This platform provides administrators with tools to oversee job postings and review user accounts.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: ascent,
    source_code_link: "https://github.com/",
  },
];

import { IconEmail, IconWeb } from "~/components/common/Icons";
import NewsletterForm from "~/components/home/components/NewsletterForm";
import PortfolioList from "~/components/home/components/PortfolioList";
import TechTabs from "~/components/home/components/TechTabs";

export const NavList = [
  {
    id: 0,
    label: "About",
    url: "#about",
  },
  {
    id: 1,
    label: "Work",
    url: "#work",
  },
  {
    id: 2,
    label: "Portfolio",
    url: "#portfolio",
  },
  {
    id: 3,
    label: "Blog",
    url: "#blog",
  },
  {
    id: 4,
    label: "Contact",
    url: "#contact",
  },
];

export const TechStackData = [
  {
    id: 0,
    label: "Javascript",
    description:
      "Programming language used for creating interactive and dynamic web apps.",
  },
  {
    id: 1,
    label: "React",
    description: "JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    label: "Next.js",
    description:
      "React framework with server-side rendering for web applications.",
  },
  {
    id: 3,
    label: "Figma",
    description:
      "A tool for creating, prototyping, and iterating on digital designs.",
  },
  {
    id: 4,
    label: "TailwindCSS",
    description:
      "Utility-first CSS framework to build designs directly in your markup.",
  },
  {
    id: 5,
    label: "Framer motion",
    description: "React animation library.",
  },
];

export const ServiceData = [
  {
    id: 0,
    label: "My expertise",
    title: "Coding & Writing",
    component: (
      <p>
        I began coding 2 years ago and have worked a React developer for over a
        year. It's been a great journey so far as I was exposed to various
        tools, frameworks, and processes to improve my coding skills and
        mindset. Moving forward, I hope to dedicate more time to building my own
        projects and writing about what I learn.
      </p>
    ),
  },
  {
    id: 1,
    label: "Toolkit",
    title: "My tools for making things happen",
    component: <TechTabs />,
  },
];

export const WritingPortfolioData = [
  {
    id: 0,
    project: "Tailwind Dark Mode",
    image: "/writing.png",
    postLink:
      "https://dev.to/naomipham_/how-to-create-darklight-mode-with-react-and-tailwind-59e0",
    description:
      "Step-to-step guide to create Dark/Light Mode with React and TailwindCSS",
  },
  {
    id: 1,
    project: "Glassmorphism",
    image: "/writing.png",
    postLink:
      "https://naomi-pham.medium.com/how-to-create-a-glassmorphic-playlist-with-html-css-and-javascript-67b981282e7e?sk=bff23f2e1cb9e055a395f20c088f726c",
    description:
      "Tutorial to create a glassmorphic effect for your card component",
  },
];

export const DevelopmentPortfolioData = [
  {
    id: 0,
    project: "Naomi's blog",
    image: "/writing.png",
    description:
      "A blog demo built with Refine, Hygraph CMS, and Framer Motion. Refine is a React framework for building data-driven web app. Hygraph is a headless content management system which also provides a API endpoint for data fetching. Framer Motion enables many cool animation effects in React apps",
    demoLink: "https://naomi-blog.vercel.app/posts",
    githubLink: "https://github.com/naomi-pham/refine-blog/tree/main",
    technologies: ["React", "Tailwind", "Headless CMS", "Framer Motion"],
  },
  {
    id: 2,
    project: "World Cuisine",
    image: "/writing.png",
    description:
      "A blog template with A web app that allows you to search for favorite recipes by categories, cuisines, and ingredients. 🥐  Through this project, I have practiced data fetching with React and navigating/creating new pages with react-router. I also have a lot of fun playing around with DaisyUI, a TailwindCSS plugin to shorten codes for component styling. I loved the DaisyUI’s color themes and naming convention.",
    demoLink: "https://all-world-cuisines.netlify.app/",
    githubLink: "https://github.com/naomi-pham/world-cuisines",
    technologies: ["React", "Tailwind", "Daisy UI"],
  },
  {
    id: 3,
    project: "Travel Log",
    image: "/writing.png",
    description:
      "A blog template with responsive design and newspaper-style columns. Through this project, I have learned about creating subpages in Next.js (pages/posts/[slug]) and fetching GraphQL API within a headless CMS (Hygraph).",
    demoLink: "https://my-travel-logs.vercel.app/",
    githubLink:
      "https://github.com/naomi-pham/my-travel-logs/blob/main/README.md",
    technologies: ["React", "Tailwind", "Headless CMS"],
  },
];

export const PortfolioAccordionData = [
  {
    id: 0,
    title: "Development",
    content: <PortfolioList data={DevelopmentPortfolioData} />,
  },
  {
    id: 1,
    title: "Writing",
    content: <PortfolioList data={WritingPortfolioData} />,
  },
];

export const ContactData = [
  {
    id: 0,
    title: "Have a question?",
    icon: <IconEmail />,
    label: "Email",
    url: "mailto:phambaonguyendn@gmail.com",
    linkText: "Send me a message",
  },
  {
    id: 1,
    title: "Find me elsewhere",
    icon: <IconWeb />,
    label: "Hashnode",
    url: "https://naomipham.hashnode.dev/",
    linkText: "Read my blog",
  },
  {
    id: 2,
    title: "Subscribe to newsletter",
    content: <NewsletterForm />,
    label: "Newsletter",
  },
];

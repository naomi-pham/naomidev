import { IconEmail, IconWeb } from "~/components/common/Icons";
import NewsletterForm from "~/components/home/components/NewsletterForm";
import PortfolioList from "~/components/home/components/PortfolioList";
import TechTabs from "~/components/home/components/TechTabs";

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
    project: "Naomi's blog",
    image: "/writing.png",
  },
  {
    id: 1,
    project: "Viet Travels",
    image: "/writing.png",
  },
  {
    id: 2,
    project: "Travel logs",
    image: "/writing.png",
  },
  {
    id: 3,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 4,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 5,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 6,
    project: "Guest Post",
    image: "/writing.png",
  },
];

export const DevelopmentPortfolioData = [
  {
    id: 0,
    project: "Naomi's blog",
    image: "/writing.png",
  },
  {
    id: 1,
    project: "Viet Travels",
    image: "/writing.png",
  },
  {
    id: 2,
    project: "Travel logs",
    image: "/writing.png",
  },
  {
    id: 3,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 4,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 5,
    project: "Guest Post",
    image: "/writing.png",
  },
  {
    id: 6,
    project: "Guest Post",
    image: "/writing.png",
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

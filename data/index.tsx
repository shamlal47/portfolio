import React, { JSX, ReactNode } from "react";
import { Icons } from "../components/ui/Icons";
import Image from 'next/image';

interface Item {
    title: string;
    description: string;
    header: ReactNode;
    icon: ReactNode | null;
    url?: string;
}

interface Skill {
    name: string;
    icon: string;
}

interface NavigationItem {
    name: string;
    link: string;
    icon?: JSX.Element;
}

export const items: Item[] = [{
    title: "subscription tracker",
    description: "A production ready api to track your subscriptions and send automated email reminders.",
    header: (
      <div className="w-full h-32 relative">
        <Image
          src="/projects/subscription.jpg"
          alt="Subscription Tracker"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    ),
    icon: null,
    url: "https://github.com/shamlal47/subscription-tracker"
},{
    title:"Portfolio",
    description: "A showcase of my projects and skills.",
    header: (
      <div className="w-full h-32 relative">
        <Image
          src="/projects/portfolio.jpg"
          alt="Portfolio"
          fill
          className="object-cover"
          priority
        />
      </div>
    ),
    icon: null,
    url: "https://github.com/shamlal47/portfolio"
},{
    title: "Papermorph",
    description: "A tool to convert images into pdf documents.",
    header: (
      <div className="flex w-full h-32 relative rounded-lg overflow-hidden">
        <Image
          src="/projects/papermorph.jpg"
          alt="Papermorph"
          fill
          className="object-cover"
          priority
        />
      </div>
    ),
    icon: null,
    url: "https://github.com/shamlal47/papermorph"
},{
    title: "Planto",
    description: "An AI-powered plant commercial platform.",
    header: (
      <div className="flex w-full h-32 relative rounded-lg overflow-hidden">
        <Image
          src="/projects/planto.jpg"
          alt="Planto"
          fill
          className="object-cover"
          priority
        />
      </div>
    ),
    icon: null,
    url: "https://github.com/shamlal47/planto"
},{
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: (
      <div className="flex w-full h-32 relative rounded-lg overflow-hidden">
        <Image
          src="/projects/dawn.jpg"
          alt="Innovation"
          fill
          className="object-cover"
          priority
        />
      </div>
    ),
    icon: null,
    url: "https://github.com/shamlal47/innovation"
},];

export const skills: Skill[] = [{name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
{name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},
{name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
{name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},
{name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
{name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"},
{name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"},
{name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
{name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
{name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
{name: ".NET", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"},
{name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
{name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
{name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"},
{name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
{name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
{name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"},];

export const navigationItems: NavigationItem[] = [{
    name: "Home",
    link: "#home",
    icon: undefined,
}, {
    name: "Projects",
    link: "#projects",
    icon: undefined,
}, {
    name: "Skills",
    link: "#skills",
    icon: undefined,
}, {
    name: "Contact",
    link: "#about",
    icon: undefined,
}]

export const socialLinks = [{
    title: "GitHub",
    href: "https://github.com/shamlal47",
    icon: React.createElement(Icons.GitHub, { className: "h-6 w-6 text-neutral-400" }),
  },
  {
    title: "LinkedIn",
    href: "https://linkedin.com/in/mohammed-shamlal-kp",
    icon: React.createElement(Icons.LinkedIn, { className: "h-6 w-6 text-neutral-100" }),
  },
  {
    title: "Twitter",
    href: "https://twitter.com/_shamlal_",
    icon: React.createElement(Icons.Twitter, { className: "h-6 w-6 text-neutral-100" }),
  },
  {
    title: "Instagram",
    href: "https://instagram.com/_shamlal_",
    icon: React.createElement(Icons.Instagram, { className: "h-6 w-6 text-neutral-100" }),
  },
  {
    title: "Email",
    href: "mailto:Shamlalthegreat@gmail.com",
    icon: React.createElement(Icons.Mail, { className: "h-6 w-6 text-neutral-100" }),   
  },
]
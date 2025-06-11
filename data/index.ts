import { ReactNode } from "react";

interface Item {
    title: string;
    description: string;
    header: ReactNode | null;
    icon: ReactNode | null;
}
/**
 * 
 */
export const items: Item[] = [{
    title: "subscription tracker",
    description: "A production ready api to track your subscriptions and send automated email reminders.",
    header: null,
    icon: null,
},{
    title:"Portfolio",
    description: "A showcase of my projects and skills.",
    header: null,
    icon: null,
},{
    title: "Papermorph",
    description: "A tool to convert images into pdf documents.",
    header: null,
    icon: null,
},{
    title: "Planto",
    description: "An AI-powered plant commercial platform.",
    header: null,
    icon: null,
},{
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: null,
    icon: null,
},];
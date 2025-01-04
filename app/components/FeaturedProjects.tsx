'use client'
import React from 'react';
import ProjectCard from './ProjectCard';
import tms from '../../public/tagmystock.webp'
import { StaticImageData } from 'next/image';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    tech: string[];
    image?: string | StaticImageData;
}

const projectsData: Project[] = [
    {
        title: "Tag My Stock",
        subtitle: "AI-Powered Stock Image Tagging",
        description: "Tag My Stock is an AI-powered tool that helps photographers easily generate accurate tags for their stock images. Boost your visibility on stock image agencies with our simple, user-friendly tagging solution.",
        link: "https://tagmystock.com",
        tech: ["Next.js", "Claude AI", "TailwindCSS", "Freemium"],
        image: tms
    },
    {
        title: "Dunnot",
        subtitle: "AI-Powered Discord Bot",
        description: "Sad because Discord removed Clyde? Dunnot is here to help. Dunnot is an AI-powered Discord bot that can help you with any code-related questions.",
        link: "https://github.com/mathiasclari/Dunnot",
        tech: ["Discord.js", "Deepseek", "Open Source"],
        image: tms
    }
];

const FeaturedProjects = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-4 sm:px-12 py-16">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-light text-zinc-800 mb-12">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
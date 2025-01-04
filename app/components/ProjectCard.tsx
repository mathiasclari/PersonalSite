'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Pin } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    tech: string[];
    image?: string | StaticImageData;
}

const ProjectCard = ({ project }: { project: Project }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isGithubLink = project.link.toLowerCase().includes('github');
    
    // Random rotation between -2 and 2 degrees
    const rotation = React.useMemo(() => Math.random() * 3 - 3, []);
    // Random pastel color
    const bgColor = React.useMemo(() => {
        const colors = [
            'bg-amber-50',
            'bg-emerald-50',
            'bg-sky-50',
            'bg-rose-50',
            'bg-violet-50',
            'bg-orange-50',
            'bg-pink-50',
            'bg-indigo-50',
            'bg-teal-50',
            'bg-lime-50',
            'bg-fuchsia-50',
            'bg-cyan-50'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }, []);

    return (
        <Link 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Pin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-zinc-700 shadow-lg flex items-center justify-center transform -rotate-45">
                    <Pin className="w-4 h-4 text-zinc-300" />
                </div>
            </div>

            {/* Paper Shadow */}
            <div className={`absolute inset-0 bg-black/20 rounded-lg blur-sm transform transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`} 
                style={{ transform: `rotate(${rotation}deg)` }} 
            />

            {/* Card Container */}
            <div 
                className={`relative rounded-lg ${bgColor} transition-all duration-300 group-hover:-translate-y-1 overflow-hidden`}
                style={{ transform: `rotate(${rotation}deg)` }}
            >
                {/* Paper Texture Overlay */}
                <div className="absolute inset-0 bg-paper-texture opacity-50 mix-blend-soft-light" />
                
                {/* Content Container */}
                <div className="relative">
                    {/* Preview Section */}
                    <div className="aspect-[16/9] relative">
                        <div className="absolute inset-2 rounded-md overflow-hidden ring-1 ring-black/5">
                            {isGithubLink ? (
                                <div className="absolute inset-0 flex items-center justify-center bg-[#24292e]">
                                    <svg 
                                        className={`w-12 h-12 text-white transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
                                        viewBox="0 0 98 96"
                                        fill="currentColor"
                                    >
                                        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                                    </svg>
                                </div>
                            ) : project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
                                />
                            ) : (
                                <iframe
                                    src={project.link}
                                    className="absolute inset-0 w-full h-full border-0 transform scale-[0.65] origin-top-left"
                                    style={{
                                        width: '154%',
                                        height: '154%',
                                        pointerEvents: 'none',
                                        overflow: 'hidden'
                                    }}
                                    loading="lazy"
                                    scrolling="no"
                                />
                            )}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                        {/* Title Section */}
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-handwriting text-zinc-800">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-600 font-handwriting">
                                    {project.subtitle}
                                </p>
                            </div>
                            <ArrowUpRight className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'text-zinc-800 -translate-y-1 translate-x-1' : 'text-zinc-400'}`} />
                        </div>

                        {/* Description */}
                        <p className="text-sm text-zinc-600 font-handwriting leading-relaxed mb-6">
                            {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-white/50 backdrop-blur-sm text-zinc-700 text-xs rounded-md font-handwriting shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectCard;
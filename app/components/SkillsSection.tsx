'use client'
import React from 'react';

interface Skill {
    name: string;
    level: number;
    description: string;
    category: 'development' | 'design' | 'tools' | 'other';
    tags: string[];
}

const skills: Skill[] = [
    {
        name: "Frontend Development",
        level: 90,
        description: "Building responsive and interactive web applications",
        category: "development",
        tags: ["React", "Next.js","SvelteKit" ,"TypeScript"]
    },
    {
        name: "UI/UX Design",
        level: 87,
        description: "Creating intuitive and beautiful user interfaces",
        category: "design",
        tags: ["Prototyping"]
    },
    {
        name: "Backend Development",
        level: 75,
        description: "Developing scalable server-side applications",
        category: "development",
        tags: ["Node.js", "NextJS"]
    },
    {
        name: "Cloud Services",
        level: 72,
        description: "Deploying and managing cloud infrastructure",
        category: "tools",
        tags: ["AWS", "Vercel"]
    },
    {
        name: "AI Development",
        level: 45,
        description: "Implementing and integrating AI solutions",
        category: "development",
        tags: ["OpenAI", "LangChain", "Vector DBs"]
    }
];

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="group relative transform transition-all duration-300 hover:-translate-y-1">
            {/* Paper card effect */}
            <div className="relative bg-white rounded-sm p-8 
                          transform rotate-[0.5deg] transition-transform duration-300 group-hover:rotate-0
                          shadow-[2px_2px_10px_rgba(0,0,0,0.05)]
                          before:absolute before:inset-0 before:bg-gradient-to-br 
                          before:from-white before:to-zinc-50/80 before:opacity-90">
                
                {/* Content */}
                <div className="relative space-y-5">
                    <h3 className="text-lg font-light text-zinc-800">
                        {skill.name}
                    </h3>

                    {/* Progress bar */}
                    <div className="relative h-[2px] w-full bg-zinc-100 overflow-hidden">
                        <div
                            className="absolute inset-y-0 left-0 bg-zinc-800 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                        />
                    </div>

                    <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        {skill.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {skill.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-xs text-zinc-600 bg-zinc-50 
                                         border border-zinc-100 rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Level indicator */}
                    <div className="absolute top-0 right-0 p-4">
                        <span className="text-sm font-light text-zinc-400">
                            {skill.level}%
                        </span>
                    </div>
                </div>

                {/* Paper edge effect */}
                <div className="absolute inset-0 border border-zinc-100 rounded-sm" />
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/[0.02]" />
            </div>

            {/* Subtle paper shadow */}
            <div className="absolute inset-0 -z-10 bg-zinc-100/30 rounded-sm 
                          transform translate-y-2 translate-x-1 rotate-[0.5deg]" />
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-light text-zinc-800">
                        Skills & Expertise
                    </h2>
                    <div className="h-px w-24 bg-zinc-200" />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                {/* Background decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 
                              bg-gradient-to-br from-zinc-100/50 to-transparent 
                              rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
                <div className="absolute right-0 bottom-0 w-72 h-72 
                              bg-gradient-to-tr from-zinc-100/50 to-transparent 
                              rounded-full blur-3xl opacity-40 mix-blend-multiply -z-10" />
            </div>
        </section>
    );
};

export default SkillsSection;
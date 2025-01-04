import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-6 sm:px-12 py-16 sm:py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-light text-zinc-800">
                        Let's Connect
                    </h2>
                    <div className="h-px w-24 bg-zinc-200" />
                    <p className="text-zinc-600 font-light max-w-xl">
                        Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                {/* Email Link */}
                <div className="group relative transform transition-all duration-300 hover:-translate-y-1">
                    <a
                        href="mailto:mathiasclari@icloud.com"
                        className="relative block w-full sm:w-auto"
                    >
                        <div className="relative bg-white rounded-sm p-8 
                                      transform rotate-[0.5deg] transition-transform duration-300 group-hover:rotate-0
                                      shadow-[2px_2px_10px_rgba(0,0,0,0.05)]
                                      before:absolute before:inset-0 before:bg-gradient-to-br 
                                      before:from-white before:to-zinc-50/80 before:opacity-90">
                            
                            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-8">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-5 h-5 text-zinc-400" />
                                    <span className="text-base sm:text-lg text-zinc-800 font-light break-all sm:break-normal">
                                        mathiasclari@icloud.com
                                    </span>
                                </div>
                                <ArrowUpRight
                                    className="hidden sm:block w-5 h-5 text-zinc-400 transition-all duration-300 
                                             group-hover:rotate-45 group-hover:text-zinc-800"
                                />
                            </div>

                            {/* Paper edge effect */}
                            <div className="absolute inset-0 border border-zinc-100 rounded-sm" />
                            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/[0.02]" />
                        </div>
                    </a>

                    {/* Subtle paper shadow */}
                    <div className="absolute inset-0 -z-10 bg-zinc-100/30 rounded-sm 
                                  transform translate-y-2 translate-x-1 rotate-[0.5deg]" />
                </div>

                {/* Background decorations */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 
                              bg-gradient-to-br from-zinc-100/50 to-transparent 
                              rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
                <div className="absolute left-0 bottom-0 w-72 h-72 
                              bg-gradient-to-tr from-zinc-100/50 to-transparent 
                              rounded-full blur-3xl opacity-40 mix-blend-multiply -z-10" />
            </div>
        </section>
    );
};

export default ContactSection;
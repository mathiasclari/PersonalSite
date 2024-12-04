import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-24">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-light text-zinc-800">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's Connect
                    </h2>
                    <div className="h-px w-24 bg-zinc-200" />
                    <p className="text-zinc-600 font-light max-w-xl">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Have a project in mind or want to collaborate? I'm always open to discussing new opportunities and ideas.
                    </p>
                </div>

                {/* Email Link */}
                <a
                    href="mailto:mathiasclari@icloud.com"
                    className="group relative inline-block"
                >
                    <div className="relative bg-white rounded-lg p-8 transition-all duration-150 group-hover:-translate-y-1">
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-zinc-400" />
                                <span className="text-lg text-zinc-800 font-light">
                                    mathiasclari@icloud.com
                                </span>
                            </div>
                            <ArrowUpRight
                                className="w-5 h-5 text-zinc-400 transition-all duration-300 group-hover:rotate-45 group-hover:text-zinc-800"
                            />
                        </div>

                        {/* Subtle border */}
                        <div className="absolute inset-0 rounded-lg border border-zinc-200" />

                        {/* Hover border effect */}
                        <div className="absolute inset-0 rounded-lg border-2 border-zinc-800 opacity-0 scale-[1.02] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                    </div>

                    {/* Simple shadow */}
                    <div className="absolute inset-0 -z-10 rounded-lg bg-zinc-200/50 transform translate-y-1 blur-sm transition-transform duration-300 group-hover:translate-y-2" />
                </a>

                {/* Background decoration */}
                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-zinc-100 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
            </div>
        </section>
    );
};

export default ContactSection;
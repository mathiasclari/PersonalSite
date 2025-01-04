import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
    content: string;
    author: string;
    role: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        content: "Want to be my first client? I'm a great designer, I promise!",
        author: "This can be you",
        role: "Best Client",
        company: "Your Company"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-24 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-light text-zinc-800 mb-16">
                    Client Words
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Paper card effect */}
                            <div className="relative bg-white rounded-sm p-8 transition-all duration-300 
                                          transform rotate-[-1deg] group-hover:rotate-0
                                          shadow-[2px_2px_10px_rgba(0,0,0,0.05)]
                                          before:absolute before:inset-0 before:bg-gradient-to-br 
                                          before:from-white before:to-zinc-50/80 before:opacity-90">
                                {/* Quote icon */}
                                <Quote
                                    className="absolute -top-3 -left-3 text-zinc-200"
                                    size={42}
                                />

                                <div className="relative space-y-6">
                                    <p className="text-lg text-zinc-600 font-light leading-relaxed italic">
                                        &quot;{testimonial.content}&quot;
                                    </p>

                                    <div className="border-t border-zinc-100 pt-4">
                                        <div className="font-medium text-zinc-800">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-zinc-500">
                                            {testimonial.role} · {testimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Paper edge effect */}
                                <div className="absolute inset-0 border border-zinc-100 rounded-sm" />
                                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent to-black/[0.02]" />
                            </div>

                            {/* Subtle paper shadow */}
                            <div className="absolute inset-0 -z-10 bg-zinc-100/30 rounded-sm 
                                          transform translate-y-2 translate-x-1 rotate-[-1deg]" />
                        </div>
                    ))}
                </div>

                {/* Decorative elements */}
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

export default TestimonialsSection;
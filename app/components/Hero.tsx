import React from 'react';

const Hero = () => {
    return (
        <main className="bg-gradient-to-b from-white to-[#faf9f6] min-h-screen">
            <div className="w-full h-full pt-32">
                <div className="px-6 md:px-12 py-24">
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-16 relative">
                            {/* Header with animated gradient */}
                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-7xl font-light tracking-tight bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-800 bg-clip-text text-transparent animate-gradient-x">
                                    Mathias Clari Drenik
                                </h1>
                                <div className="h-px w-24 md:w-48 bg-gradient-to-r from-zinc-400 to-transparent" />
                                <p className="text-xl md:text-2xl text-zinc-600 font-light">
                                    Full-Stack Developer & Digital Craftsman
                                </p>
                            </div>

                            {/* Description with enhanced typography */}
                            <div className="max-w-2xl space-y-8">
                                <p className="text-base md:text-lg text-zinc-600 font-light leading-relaxed">
                                    Crafting digital experiences at the intersection of design and technology. 
                                    <span className="block mt-4">
                                        From Slovenia to the world, building the future of the web — one pixel at a time.
                                    </span>
                                </p>
                                
                            
                            </div>

                            {/* Enhanced background elements */}
                            <div className="absolute -right-20 top-0 w-96 h-96 bg-gradient-to-br from-zinc-100 via-zinc-50 to-transparent
                                          rounded-full blur-3xl opacity-70 mix-blend-multiply -z-10 animate-pulse-slow" />
                            <div className="absolute -left-20 bottom-0 w-72 h-72 bg-gradient-to-tr from-zinc-100 via-zinc-50 to-transparent
                                          rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10 animate-pulse-slow" />
                        </div>
                    </div>
                </div>

                {/* Enhanced grid texture */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply"
                     style={{
                         backgroundImage: `radial-gradient(circle at center, #000 1px, transparent 1px)`,
                         backgroundSize: '32px 32px',
                         maskImage: 'linear-gradient(to bottom, transparent, black, transparent)'
                     }}
                />
            </div>
        </main>
    );
};

export default Hero;
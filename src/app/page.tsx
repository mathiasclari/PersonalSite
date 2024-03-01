import Image from "next/image";
import {BiLogoGithub, BiLogoInstagramAlt} from "react-icons/bi";
import {FaXTwitter} from "react-icons/fa6";
import {Analytics} from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/next"


export default function Home() {
    return (
        <>
            <div
                className="absolute inset-0 -z-10 h-min-full w-full bg-background bg-[radial-gradient(#181F3A81_1px,transparent_1px)] [background-size:16px_16px]">
            </div>
            <div
                className="absolute top-0 z-[-2] h-screen w-screen bg-white
            bg-[radial-gradient(ellipse_50%_80%_at_50%_-20%,rgba(30,67,187,0.3),rgba(255,255,255,0))]"/>
            <section className="flex flex-col items-center justify-center h-screen">
                <div
                    className="flex flex-col items-center justify-center h-screen shadow-md w-3/4">
                    <Image src="/logoicon.svg" alt="logo" width="350" height="350"/>
                    <section className="flex flex-col items-center ">
                        <h1 className="text-6xl font-bold text-text mt-3.5 shadow-text">Mathias Clari Drenik</h1>
                        <h2 className="text-3xl font-semibold mt-1.5 text-primary shadow-lg">Software
                            Engineer</h2>
                    </section>
                    <div className="flex flex-row space-x-4 mt-3.5">
                        <a href="https://github.com/mathiasclari/" className="hover:scale-110 ease-in-out duration-500"
                           target="_blank"
                           rel="noreferrer">
                            <BiLogoGithub size={50} color="#e0e3e8"/>
                        </a>
                        <a href="https://x.com/MathiasClariOff" className="hover:scale-110 ease-in-out duration-500"
                           target="_blank" rel="noreferrer">
                            <FaXTwitter size={50} color="#e0e3e8"/>
                        </a>
                        <a href="https://instagram.com/claridrenikmathias"
                           className="hover:scale-110 ease-in-out duration-500"
                           target="_blank" rel="noreferrer">
                            <BiLogoInstagramAlt size={50} color="#e0e3e8"/>
                        </a>
                    </div>
                </div>
                <section
                    className="absolute bottom-10 border-10 overflow-auto m-2 h-auto w-auto bg-accent rounded-2xl items-center justify-center text-center">
                    <h1 className="text-2xl font-bold text-text">PROJECTS</h1>
                    <a href="https://noximity.com" className="ease-in-out duration-500 rounded-md">
                        <div className="flex flex-row items-center m-1 hover:bg-accent hover:shadow-md">
                            <Image src="logo.svg" alt="logo" width="50" height="50"/>
                            <h3 className="text-xl font-semibold text-text ml-1.5">Noximity:</h3>
                            <p className="text-text ml-1">
                                Slovenian creators of unique, sustainable wooden products.
                            </p>
                        </div>
                    </a>
                </section>
            </section>
            <Analytics/>
            <SpeedInsights/>
        </>
    );
}

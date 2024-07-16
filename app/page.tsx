/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { HoverEffect } from "./components/ui/card-hover-effect";
import image from "../public/me.svg";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden">
        <BackgroundGradientAnimation />
      </div>
      <div className="relative flex-1 flex flex-col items-center justify-center z-10 min-h-screen px-4">
        <div className="flex flex-col items-center justify-center h-screen text-center">
          <Image 
            src={image} 
            alt="logo" 
            width={150} 
            height={150} 
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-4"
          />
          <section className="flex flex-col items-center mb-4 sm:mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mt-3.5">Mathias Clari Drenik</h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mt-1.5 text-red-500">Software Engineer</h2>
          </section>
          <CardContainer className="inter-var">
            <CardBody className="bg-transparent relative group/card dark:hover:transparent dark:transparent:shadow-transparent dark:bg-transparent dark:border-transparent border-transparent w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-10 space-y-2 sm:space-y-0 sm:space-x-4">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://github.com/mathiasclari"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black[0.9] dark:bg-white hover:bg-white hover:text-black dark:text-black text-white text-xs font-bold transition-transform transform hover:scale-105 neon-effect"
                >
                  Check out :: GitHub
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://twitter.com/mathiasclari"
                  target="__blank"
                  className="px-4 py-2 rounded-xl bg-black[0.9] dark:bg-white hover:bg-white hover:text-black dark:text-black text-white text-xs font-bold transition-transform transform hover:scale-105 neon-effect"
                >
                  Check out :: X
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </>
  );
}
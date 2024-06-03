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
      <div className="relative flex-1 flex flex-col items-center justify-center z-10 min-h-screen">
      <div
                    className="flex flex-col items-center justify-center h-screen">
                    <Image src={image} alt="logo" width="350" height="350"/>
                    <section className="flex flex-col items-center ">
                        <h1 className="text-6xl font-bold text-white mt-3.5">Mathias Clari Drenik</h1>
                        <h2 className="text-3xl font-semibold mt-1.5 text-red">Software
                            Engineer</h2>
                            </section>
                            <CardContainer className="inter-var">
      <CardBody className="bg-transparent relative group/card  dark:hover:transparent dark:transparent:shadow-transparent dark:bg-transparent dark:border-transparent border-transparent w-auto sm:w-[30rem] h-auto rounded-xl p-6  ">
        <a href="https://github.com/mathiasclari" target="__blank">
        <div className="flex justify-between items-center mt-10">
        <CardItem
  translateZ={20}
  as="a"
  href="https://github.com/mathiasclari"
  target="__blank"
  className="px-4 py-2 rounded-xl bg-black[0.9] dark:bg-white hover:bg-white hover:text-black dark:text-black text-white text-xs font-bold transition-transform transform hover:scale-105 neon-effect"
>
  Check out :: GitHub
</CardItem>
          </a>
          <a href="https://twitter.com/mathiasclari" target="__blank">
<CardItem
  translateZ={20}
  as="a"
  href="https://twitter.com/mathiasclari"
  target="__blank"
  className="px-4 py-2 rounded-xl bg-black[0.9] dark:bg-white hover:bg-white hover:text-black dark:text-black text-white text-xs font-bold transition-transform transform hover:scale-105 neon-effect"
>
Check out :: X
</CardItem>
            </a>
          </div>
      </CardBody>
    </CardContainer>
      </div>
                            </div>
    </>
  );
}

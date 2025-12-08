"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/my-image.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      
      {/* ================= BACKGROUND + ORBITS ================= */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Grain Background */}
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}
        />
        
        {/* Hero Items */}
        <div className="size-[620px] hero-item pointer-events-none"></div>
        <div className="size-[820px] hero-item pointer-events-none"></div>
        <div className="size-[1020px] hero-item pointer-events-none"></div>
        <div className="size-[1220px] hero-item pointer-events-none"></div>

        {/* Hero Orbits */}
        <HeroOrbit size={430} rotation={79} shouldOrbit orbitDuration="30s" shouldspin spinDuration="6s">
          <SparkleIcon className="size-8 text-emerald-300/5 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={-14} shouldOrbit orbitDuration="32s" shouldspin spinDuration="6s">
          <SparkleIcon className="size-5 text-emerald-300/5 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" shouldspin spinDuration="6s">
          <div className="size-3 rounded-full bg-emerald-300/15 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldspin spinDuration="6s">
          <SparkleIcon className="size-10 text-emerald-300/20 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={98} shouldOrbit orbitDuration="38s" shouldspin spinDuration="6s">
          <StarIcon className="size-8 text-white pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={20} shouldOrbit orbitDuration="40s" shouldspin spinDuration="6s">
          <StarIcon className="size-12 text-white pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-51} shouldOrbit orbitDuration="42s" shouldspin spinDuration="6s">
          <div className="size-2 rounded-full bg-emerald-300/15 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldspin spinDuration="6s">
          <SparkleIcon className="size-14 text-emerald-300/20 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s" shouldspin spinDuration="6s">
          <div className="size-3 rounded-full bg-emerald-300/15 pointer-events-none" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldspin spinDuration="6s">
          <StarIcon className="size-28 text-white pointer-events-none" />
        </HeroOrbit>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Memoji */}
        <Image src={memojiImage} className="w-20 sm:w-24 md:w-24 rounded-full" alt="my picture" />
        
        {/* Availability Badge */}
        <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg mt-4">
          <div className="relative">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-ping absolute inset-0"></div>
            <div className="bg-green-500 w-3 h-3 rounded-full relative"></div>
          </div>
          <div className="text-sm font-medium">Available for new projects</div>
        </div>

        {/* Heading & Subtext */}
        <div className="max-w-lg mx-auto mt-8">
          <h1 className="font-serif text-3xl md:text-5xl text-center tracking-wide">
            Crafting intuitive digital products.
          </h1>
          <p className="mt-4 text-center text-white/68 md:text-lg">
            Engineering next-generation user experiences into resilient, high-speed applications.
          </p>
        </div>

   <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">

    <a
      href="#contact"
      className="inline-flex items-center gap-2 h-12 px-6 rounded-xl relative z-20 
                border border-white/15 bg-white text-gray-900"
    >
      <span className="font-semibold">Let&apos;s  Connect</span>
      👋
    </a>


    <a
    href="#project"
    className="inline-flex items-center gap-2 h-12 px-6 rounded-xl relative z-20 
               border border-white/15 text-white"
      >
        <span className="font-semibold">Explore My Work</span>
        <ArrowDown className="size-4" />
      </a>

</div>

      </div>
    </div>
  );
};

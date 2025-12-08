"use client";
import Image from "next/image";
import memojiImage from "@/assets/images/my-image.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDownIcon from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <section className="relative py-32 md:py-48 lg:py-60 overflow-x-clip">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        {/* Grain Background */}
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{ backgroundImage: `url(${grainImage.src})`, backgroundSize: "cover" }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="container max-w-5xl mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        {/* Memoji */}
        <Image src={memojiImage} className="w-24 md:w-28 rounded-full" alt="my picture" />

        {/* Availability Badge */}
        <div className="mt-4 inline-flex items-center gap-4 bg-gray-950 border border-gray-800 px-4 py-1.5 rounded-full">
          <div className="relative">
            <div className="bg-green-500 w-3 h-3 rounded-full animate-ping absolute inset-0" />
            <div className="bg-green-500 w-3 h-3 rounded-full relative" />
          </div>
          <span className="text-sm font-medium">Available for new projects</span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide">
          Crafting Intuitive Digital Products
        </h1>

        <p className="mt-4 max-w-xl text-white/70 text-lg md:text-xl">
          Engineering next-generation user experiences into resilient, high-speed applications.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Preview CV */}
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 h-12 rounded-xl bg-white text-gray-900 font-semibold border border-white hover:bg-gray-100 transition"
          >
            📄 Preview CV
          </a>

          {/* Explore Work */}
          <a
            href="#project"
            className="inline-flex items-center gap-2 px-6 py-3 h-12 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            <span className="inline-flex items-center gap-2">
              Explore My Work
              <ArrowDownIcon className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

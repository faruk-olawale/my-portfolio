"use client";

import { useState } from "react";
import { Header } from "@/sections/Header"; 
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import Preloader from "@/sections/Preloader";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div>
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}
      {showContent && (
        <div>
          <Header/>
          <HeroSection/>
          <ProjectsSection/>
          <TapeSection/>
          <TestimonialsSection/>
          <AboutSection/>
          <ContactSection />
          <Footer/>
        </div>
      )}
    </div>
  );
}
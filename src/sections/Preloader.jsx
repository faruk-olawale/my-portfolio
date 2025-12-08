"use client";

import { useEffect, useState } from "react";

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [displayedText, setDisplayedText] = useState("");
  const fullName = "Faruk";

  useEffect(() => {
    // Start spelling immediately with a short delay
    setTimeout(() => {
      let currentIndex = 0;
      const spellingInterval = setInterval(() => {
        if (currentIndex <= fullName.length) {
          setDisplayedText(fullName.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(spellingInterval);
        }
      }, 150); // 150ms between each letter

      return () => clearInterval(spellingInterval);
    }, 200); // Reduced from implicit delay to just 200ms

    const handleLoad = () => {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => {
          onComplete?.();
        }, 1000);
      }, 1500); // Reduced total time
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black z-50 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="relative">
        {/* Subtle glow effect */}
        <div className="absolute inset-0 blur-3xl bg-white/5"></div>
        
        {/* Text container */}
        <div className="relative flex">
          {fullName.split("").map((letter, index) => (
            <span
              key={index}
              className={`text-7xl md:text-9xl font-serif text-white transition-all duration-500 ${
                index < displayedText.length
                  ? "opacity-100 translate-y-0 blur-0"
                  : "opacity-0 translate-y-8 blur-sm"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {letter}
            </span>
          ))}
          
          {/* Blinking cursor */}
          <span
            className={`text-7xl md:text-9xl font-serif text-white/70 ml-2 ${
              displayedText.length === fullName.length ? "opacity-0" : "animate-pulse"
            }`}
          >
            |
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-0.5 bg-white/10 rounded-full mt-12 overflow-hidden">
          <div
            className="h-full bg-white/80 transition-all duration-200 ease-out"
            style={{
              width: `${(displayedText.length / fullName.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
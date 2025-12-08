"use client";

import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg"
import { Card } from "@/components/Card";
import { Fragment, useState } from "react";

const testimonials = [
  {
    name: "Marcus Johnson",
    position: "Founder @ LocalEats",
    text: "I'm not technical at all, and Faruk made the whole process painless. He explained things in plain English and delivered exactly what I sketched on a napkin. Our mobile orders went up 3x in the first month after launch.",
    avatar: memojiAvatar1,
  },
  {
    name: "Priya Sharma",
    position: "Engineering Manager @ HealthTrack AI",
    text: "We needed someone who could jump into our messy React codebase and not complain. Faruk refactored our most problematic components, wrote actual tests, and documented everything. Our bug reports dropped by 60% after his changes went live.",
    avatar: memojiAvatar2,
  },
  {
    name: "James Mitchell",
    position: "Creative Director @ BrandCraft Studio",
    text: "Most developers tell me my designs are 'impossible to build' or water them down. Faruk actually figured out how to make the animations work smoothly on mobile without killing performance. The client was blown away at the presentation.",
    avatar: memojiAvatar4,
  },
  {
    name: "David Okonkwo",
    position: "CTO @ EduConnect Nigeria",
    text: "We hired Faruk for a 2-week contract and ended up extending it to 3 months. He spotted issues in our API integration that our backend team missed, and his suggestions improved our overall architecture. Rare to find a frontend dev who thinks full-stack.",
    avatar: memojiAvatar3,
  },
  {
    name: "Michael Brown",
    position: "Director of IT @ MegaCorp",
    text: "Faruk's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
  },
];

export const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-12 lg:py-20">
      <div className="container max-w-5xl mx-auto px-4">
        <SectionHeader 
          eyebrow="Happy Client's" 
          title="What Clients Say about Me" 
          description="Don't just take my word for it. See what my clients have to say about my work." 
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div 
            className="flex gap-8 pr-8 flex-none"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ 
              animation: 'moveLeft 90s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map(testimonial => (
                  <Card 
                    key={testimonial.name} 
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0"> 
                        <Image 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div> 
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes moveLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
};
import StarIcon from "@/assets/icons/star.svg"
import React, { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes moveLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}} />
      
      <div className="py-16 lg:py-24 overflow-x-clip">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
          <div 
            className="flex"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div 
              className="flex flex-none gap-4 pr-4 py-3"
              style={{ animation: 'moveLeft 20s linear infinite' }}
            >
              {[...Array(2)].map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div key={`${word}-${idx}`} className="inline-flex gap-4 items-center">
                      <span className="text-gray-900 uppercase font-extrabold text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-6 text-gray-900 -rotate-12"/>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
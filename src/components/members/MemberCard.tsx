import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MemberCardProps {
  name: string;
  role: string;
  image: string;
  department?: string;
  linkedin?: string;
  email?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({
  name,
  role,
  image,
  department,
  linkedin,
  email,
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={cn(
        // Base Layout - Fixed Width & Minimum Height for uniformity
        "relative group flex flex-col items-center text-center",
        "w-full max-w-[320px] h-full min-h-[450px]", // FIXED SIZE ENFORCED HERE
        "p-8 rounded-3xl overflow-hidden",
        
        // Glassmorphism
        "bg-gray-900/40 backdrop-blur-xl border border-white/10",
        
        // Hover Border & Shadow
        "hover:border-white/20 transition-all duration-300",
        "shadow-2xl shadow-black/20"
      )}
    >
      {/* --- 1. Center Glow Effect --- */}
      <div 
        className={cn(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-48 h-48 rounded-full blur-[100px]",
          "bg-blue-600",
          "opacity-0 group-hover:opacity-50 transition-opacity duration-500",
          "pointer-events-none"
        )} 
      />

      {/* --- 2. Image Section --- */}
      <div className="relative w-40 h-40 mx-auto mb-6 flex-shrink-0 group-inner transform transition-transform duration-300 group-hover:scale-105 border-4 border-white/10 rounded-full overflow-hidden shadow-lg">
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md group-hover:blur-xl transition-all duration-300" />
        <img
          src={image}
          alt={name}
          className="relative w-full h-full object-cover rounded-full border border-white/10 shadow-inner bg-gray-800"
        />
      </div>

      {/* --- 3. Text Content (Flex-grow to push footer down) --- */}
      <div className="relative z-10 flex flex-col flex-grow w-full">
        {/* Name: Fixed height to accommodate 2 lines if needed */}
        <div className="h-16 flex items-center justify-center mb-1">
            <h3 className="text-xl font-bold text-white transition-all group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 line-clamp-2 leading-tight">
            {name}
            </h3>
        </div>
        
        {/* Role: Fixed height for 1-2 lines */}
        <div className="h-10 flex items-start justify-center mb-1">
            <p className="text-blue-400 font-medium tracking-wide text-sm line-clamp-2">
            {role}
            </p>
        </div>
        
        {/* Department */}
        <div className="h-6 mb-6">
            {department && (
            <p className="text-xs text-gray-400 font-light truncate">
                {department}
            </p>
            )}
        </div>

        {/* --- 4. Social Actions (Always at bottom) --- */}
        <div className="mt-auto flex justify-center gap-4">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          
          {email && (
            <a
              href={`mailto:${email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;

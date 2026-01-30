import React from 'react';

interface Member {
  name: string;
  role: string;
  image: string;
}

interface HierarchyTreeProps {
  hod?: Member[]; // New Prop for HOD
  faculty: Member[];
  sbm: Member[];
  ebm: Member[];
}

const HierarchyTree: React.FC<HierarchyTreeProps> = ({ hod, faculty, sbm, ebm }) => {
  
    // Card Component - Transparent & Blended
  const MemberNode: React.FC<{ member: Member; isCompact?: boolean; align?: 'left' | 'right' | 'center' }> = ({ member, isCompact, align = 'center' }) => {
    
    // Default Mobile Styles (Image Left, Text Right)
    let wrapperClass = "relative flex z-10 group items-center";
    let textMarginClass = "";

    if (isCompact) {
      // --- EBM Logic ---
      wrapperClass += " flex-row text-left"; // Mobile Default
      textMarginClass += " ml-4";            // Mobile Default Gap

      // Desktop Overrides
      if (align === 'right') {
        // Left Column on Desktop: Image on Right, Text on Left
        wrapperClass += " md:flex-row-reverse md:text-right"; 
        textMarginClass += " md:ml-0 md:mr-4"; // Swap margin to right side
      }
    } else {
      // --- Faculty/SBM Logic ---
      wrapperClass += " flex-col text-center";
      textMarginClass += " mt-3";
    }

    return (
      <div className={wrapperClass}>
        {/* Image with subtle glow */}
        <div className="relative flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
          <img
            src={member.image}
            alt={member.name}
            className={`${isCompact ? 'w-16 h-16' : 'w-24 h-24'} relative rounded-full border-2 border-blue-400/50 object-cover shadow-lg`}
          />
        </div>

        {/* Text Content */}
        <div className={textMarginClass}>
          <p className={`${isCompact ? 'text-lg' : 'text-0.5xl'} font-semibold text-white tracking-wide drop-shadow-md whitespace-normal break-words max-w-[200px] md:max-w-none`}>
            {member.name}
          </p>
          <p className="text-sm text-blue-200 font-medium uppercase tracking-wider opacity-80">{member.role}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col items-center py-10 overflow-x-hidden">
      
      {/* ================= LEVEL 0: HOD ================= */}
      {hod && hod.length > 0 && (
        <div className="flex flex-col items-center w-full mb-12">
           {/* You can change this title or remove it if you want it merged with Faculty */}
          <h3 className="text-xl font-bold text-blue-200 mb-8 uppercase tracking-[0.2em] drop-shadow-sm">Head of The Department</h3>
          <div className="flex justify-center relative z-10">
            {hod.map((member, index) => (
              <MemberNode key={index} member={member} />
            ))}
          </div>
          {/* Connector Line to Faculty */}
          <div className="w-0.5 h-12 bg-blue-500/30 mt-4"></div>
        </div>
      )}

      {/* ================= LEVEL 1: FACULTY ================= */}
      <div className="flex flex-col items-center w-full mb-16">
        <h3 className="text-xl font-bold text-blue-200 mb-8 uppercase tracking-[0.2em] drop-shadow-sm">Faculty</h3>
        <div className="flex flex-wrap justify-center gap-16 md:gap-32 relative z-10">
          {faculty.map((member, index) => (
            <MemberNode key={index} member={member} />
          ))}
        </div>
      </div>

      {/* ================= LEVEL 2: SENIOR BODY ================= */}
      <div className="flex flex-col items-center w-full mb-16">
        <h3 className="text-xl font-bold text-blue-200 mb-8 uppercase tracking-[0.2em] drop-shadow-sm px-4">Senior Body Members</h3>
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 relative w-full">
          {sbm.map((member, index) => (
            <MemberNode key={index} member={member} />
          ))}
        </div>
      </div>

      {/* ================= LEVEL 3: EXECUTIVE BODY (Fixed Pairs) ================= */}
      <div className="relative flex flex-col items-center w-full max-w-6xl px-2 md:px-4">
        <h3 className="text-xl font-bold text-blue-200 mb-12 uppercase tracking-[0.2em] drop-shadow-sm z-20 text-center">Executive Body Members</h3>

        {/* Central Spine */}
        <div className="absolute top-20 bottom-0 left-4 md:left-1/2 w-0.5 bg-blue-600/30 md:-translate-x-1/2" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-12 relative">
          {ebm.map((member, index) => {
            const isLeftColumn = index % 2 === 0;
            
            return (
              <div key={index} className={`relative flex items-center
                ${isLeftColumn 
                  ? 'md:justify-end md:pr-16' 
                  : 'md:justify-start md:pl-16' 
                }
                justify-start pl-8 md:pl-0`}
              >
                <MemberNode 
                  member={member} 
                  isCompact={true} 
                  align={isLeftColumn ? 'right' : 'left'}
                />
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default HierarchyTree;

import React from 'react';

interface Member {
  name: string;
  role: string;
  image: string;
}

interface HierarchyTreeProps {
  faculty: Member[];
  sbm: Member[];
  ebm: Member[];
}

const HierarchyTree: React.FC<HierarchyTreeProps> = ({ faculty, sbm, ebm }) => {
  
  // Card Component - Transparent & Blended
  const MemberNode: React.FC<{ member: Member; isCompact?: boolean; align?: 'left' | 'right' | 'center' }> = ({ member, isCompact, align = 'center' }) => (
    <div className={`relative flex ${isCompact ? `flex-row items-center ${align === 'right' ? 'flex-row-reverse text-right' : 'text-left'}` : 'flex-col items-center text-center'} z-10 group`}>
      
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
      <div className={isCompact ? (align === 'right' ? 'mr-4' : 'ml-4') : 'mt-3'}>
        <p className={`${isCompact ? 'text-lg' : 'text-10xl'} font-semibold text-white tracking-wide drop-shadow-md whitespace-nowrap`}>
          {member.name}
        </p>
        <p className="text-sm text-blue-200 font-medium uppercase tracking-wider opacity-80">{member.role}</p>
      </div>
    </div>
  );

  return (
    <div className="w-full flex flex-col items-center py-10 overflow-x-hidden">
      
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
      <div className="relative flex flex-col items-center w-full max-w-6xl px-4">
         <h3 className="text-xl font-bold text-blue-200 mb-12 uppercase tracking-[0.2em] drop-shadow-sm z-20">Executive Body Members</h3>

         {/* Central Spine (Only for EBM) */}
         <div className="absolute top-20 bottom-0 left-8 md:left-1/2 w-0.5 bg-blue-600/30 md:-translate-x-1/2" />

         {/* 
            Grid Logic Fixed: 
            - grid-cols-2 allows items to naturally flow Left -> Right -> Left -> Right
            - Index 0 = Left Col, Index 1 = Right Col
         */}
         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-0 relative">
            {ebm.map((member, index) => {
              const isLeftColumn = index % 2 === 0; 
              
              return (
                <div key={index} className={`relative flex items-center
                  ${isLeftColumn 
                    ? 'md:justify-end md:pr-16'  // Left Column: Align content to right (towards spine)
                    : 'md:justify-start md:pl-16' // Right Column: Align content to left (towards spine)
                  }
                  justify-start pl-20 md:pl-0`} // Mobile: Always align left with padding
                >
                  
                
                 

                  {/* Member Card */}
                  <MemberNode 
                    member={member} 
                    isCompact={true} 
                    // Left Column members text-align Right. Right Column members text-align Left.
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

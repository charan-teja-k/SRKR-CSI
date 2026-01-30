import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { MemberCard, HierarchyTree } from '../components/members';
import facultyData from '../data/faculty.json';
import sbmData from '../data/sbm_members.json';
import ebmData from '../data/ebm_members.json';

type TabType = 'hierarchy' | 'sbm' | 'ebm' | 'faculty';

const Members: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('hierarchy');

  const tabs: { key: TabType; label: string }[] = [
    { key: 'hierarchy', label: 'Hierarchy' },
    { key: 'faculty', label: 'Faculty' },
    { key: 'sbm', label: 'Senior Body' },
    { key: 'ebm', label: 'Executive Body' },
  ];

  // --- Logic to separate HOD from other Faculty ---
  // Assuming the HOD's role contains "Head" (e.g., "Head of Department").
  // If your JSON uses a different role title, adjust the string "Head" below.
  const hodMembers = facultyData.filter(f => f.role.toLowerCase().includes("head"));
  const facultyCoordinators = facultyData.filter(f => !f.role.toLowerCase().includes("head"));

  return (
    <div className="relative min-h-screen w-full bg-[#111828]">
      
      {/* Background Layers */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="gradient-layer-1 absolute inset-0" />
        <div className="gradient-layer-2 absolute inset-0" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-24 pb-16">
        
        {/* Header Section */}
        <div className="text-white mb-8 px-4">
          <div className="text-center">
            <h1 className="text-3xl mt-8 md:text-5xl font-bold font-['Poppins'] mb-4 tracking-tight drop-shadow-lg leading-tight">
              Leadership & <br className="md:hidden" /> Core Committee
            </h1>
            <p className="text-sm md:text-xl text-gray-300 font-['Inter'] max-w-2xl mx-auto leading-relaxed">
              The governing team of SRKR CSI Student Chapter
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          
          {/* Responsive Tab Switcher */}
          <div className="flex justify-center mb-12">
            <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 inline-flex relative max-w-full overflow-x-auto no-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`
                    relative z-10 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold rounded-xl transition-colors duration-200 whitespace-nowrap flex-shrink-0
                    ${activeTab === tab.key ? 'text-[#111828]' : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="active-tab"
                      className="absolute inset-0 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-xl"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-20">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'hierarchy' && (
              <div className="text-white-100 overflow-x-hidden"> 
                <HierarchyTree
                  // Pass HOD members separately
                  hod={hodMembers.map((f) => ({ name: f.name, role: f.role, image: f.image }))}
                  // Pass remaining faculty
                  faculty={facultyCoordinators.map((f) => ({ name: f.name, role: f.role, image: f.image }))}
                  sbm={sbmData.map((m) => ({ name: m.name, role: m.role, image: m.image }))}
                  ebm={ebmData.map((m) => ({ 
                    name: m.name, 
                    role: m.branch, // Maps branch to role for display in tree
                    image: m.image 
                  }))}
                />
              </div>
            )}

            {activeTab === 'faculty' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-md font-['Poppins']">
                  Faculty Coordinators
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                  {facultyData.map((faculty) => (
                    <MemberCard
                      key={faculty.id}
                      name={faculty.name}
                      role={faculty.role}
                      image={faculty.image}
                      department={faculty.department}
                      email={faculty.email}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'sbm' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-md font-['Poppins']">
                  Senior Body Members
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  {sbmData.map((member) => (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      role={member.role}
                      image={member.image}
                      department={member.department}
                      linkedin={member.linkedin}
                      email={member.email}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'ebm' && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center drop-shadow-md font-['Poppins']">
                  Executive Body Members
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {ebmData.map((member) => (
                    <MemberCard
                      key={member.id}
                      name={member.name}
                      role="Executive Body Member" 
                      department={member.branch}
                      image={member.image}
                      linkedin={member.linkedin}
                      email={member.email}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Members;

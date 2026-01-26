import React, { useState } from 'react';
import { PageHeader } from '../components/layout';
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

  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Meet the people behind SRKR CSI"
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {activeTab === 'hierarchy' && (
          <HierarchyTree
            faculty={facultyData.map((f) => ({ name: f.name, role: f.role, image: f.image }))}
            sbm={sbmData.map((m) => ({ name: m.name, role: m.role, image: m.image }))}
            ebm={ebmData.map((m) => ({ name: m.name, role: m.role, image: m.image }))}
          />
        )}

        {activeTab === 'faculty' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Faculty Coordinators
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Senior Body Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Executive Body Members
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ebmData.map((member) => (
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
      </div>
    </div>
  );
};

export default Members;

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
  const MemberNode: React.FC<{ member: Member }> = ({ member }) => (
    <div className="flex flex-col items-center">
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 rounded-full border-4 border-blue-200 object-cover"
      />
      <p className="mt-2 font-medium text-white-100 text-sm text-center">{member.name}</p>
      <p className="text-xs text-white-600">{member.role}</p>
    </div>
  );

  return (
    <div className="flex flex-col items-center space-y-12">
      {/* Faculty */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white-700 mb-4">Faculty Coordinators</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {faculty.map((member, index) => (
            <MemberNode key={index} member={member} />
          ))}
        </div>
      </div>

      {/* Connector Line */}
      <div className="w-px h-8 bg-gray-300" />

      {/* SBM */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white-700 mb-4">Senior Body Members</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {sbm.map((member, index) => (
            <MemberNode key={index} member={member} />
          ))}
        </div>
      </div>

      {/* Connector Line */}
      <div className="w-px h-8 bg-gray-300" />

      {/* EBM */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-white-700 mb-4">Executive Body Members</h3>
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl">
          {ebm.map((member, index) => (
            <MemberNode key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HierarchyTree;

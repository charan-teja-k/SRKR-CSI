import React from 'react';
import rawAboutData from '../data/about_csi.json'; 
import { type AboutData } from '../types';

// Cast the json import to the interface
const aboutData: AboutData = rawAboutData as unknown as AboutData;

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
      </div>

      {/* CSI National History */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          {/* Placeholder for Image */}
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            CSI National Image
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">History of CSI</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {aboutData.csiHistory}
          </p>
        </div>
      </section>

      {/* SRKR Chapter History */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
         <div className="md:w-1/2">
          {/* Placeholder for Image */}
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
            SRKR Chapter Image
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-orange-600 mb-4">SRKR CSI Chapter</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {aboutData.srkrHistory}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

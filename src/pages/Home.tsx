import React from 'react';
import { Link } from 'react-router-dom';
import PixelBlast from '../components/PixelBlast';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      
      {/* --- 1. Fixed Interactive Background --- */}
      <div className="fixed inset-0 z-0 bg-gray-900 pointer-events-auto">
        <PixelBlast
          variant="square"
          pixelSize={6}
          color="#2f6de8"
          patternScale={4}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={4}
          speed={0.3}
          edgeFade={0.15}
          transparent
        />
        <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none" />
      </div>

      {/* --- 2. Scrollable Content Wrapper --- */}
      <div className="relative z-10 pointer-events-none">
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
          
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight drop-shadow-2xl">
              SRKR <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#002a94] to-[#9a429e]">CSI</span>
              <br />
              <span className="text-4xl md:text-6xl text-[#d4defa] font-semibold">Student Chapter</span>
            </h1>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-[#d4defa]/80 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Empowering students with technical skills, leadership, and innovation through hands-on experiences.
            </p>
            
            {/* Interactive Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pointer-events-auto">
              
              {/* UPDATED BUTTON HERE */}
              <Link 
                to="/events" 
                className="group relative px-8 py-4 bg-white text-black font-bold rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-100 shadow-[0_0_20px_rgba(255,255,255,0.4)] overflow-hidden"
              >
                <span className="relative z-10">Explore Events</span>
                {/* Shine effect (Darkened for white bg) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              </Link>
              
              <Link 
                to="/about" 
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-[#d4defa]/20 text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10 hover:border-[#9a429e]/50 hover:scale-105"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Cards Section */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">Why Join CSI?</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group p-8 rounded-2xl bg-black/15 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:-translate-y-2 pointer-events-auto">
              <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Technical Workshops</h3>
              <p className="text-gray-300 leading-relaxed">
                Gain hands-on experience with the latest technologies through expert-led bootcamps and coding sessions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group p-8 rounded-2xl bg-black/15 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:-translate-y-2 pointer-events-auto">
              <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500/30 transition-colors">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Networking</h3>
              <p className="text-gray-300 leading-relaxed">
                Connect with industry professionals, successful alumni, and like-minded peers to build your career.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group p-8 rounded-2xl bg-black/15 backdrop-blur-md border border-white/5 shadow-2xl hover:bg-black/40 transition-all duration-300 hover:-translate-y-2 pointer-events-auto">
              <div className="w-14 h-14 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500/30 transition-colors">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Leadership</h3>
              <p className="text-gray-300 leading-relaxed">
                Develop essential soft skills by organizing large-scale events and leading student teams.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;

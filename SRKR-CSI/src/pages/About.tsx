import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Lightbulb, 
  Users, 
  Globe, 
  Award, 
  BookOpen,
  
} from 'lucide-react';

// --- Animations ---
import { easeOut } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: easeOut   // ✅ correct
    } 
  }
};


const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#111828] overflow-hidden text-white font-['Inter']">
      
      {/* Background Layers */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 pt-32 pb-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
        
        {/* --- HERO SECTION --- */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center mb-32"
        >
          <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase">
            EST. 1965
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Architecting the Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Technology in India
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The Computer Society of India (CSI) is the premier professional body for IT professionals. 
            We bridge the gap between academia, industry, and government to drive digital innovation and technical excellence.
          </motion.p>
        </motion.div>


        {/* --- MISSION & VISION GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"
        >
          {/* Vision Card */}
          <motion.div variants={fadeInUp} className="group relative p-10 rounded-3xl bg-gray-900/50 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="mb-6 w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To make Information Technology the driver of national development and accessible to every section of society. 
              We believe in "IT for Masses"—leveraging technology for inclusive growth and societal transformation.
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div variants={fadeInUp} className="group relative p-10 rounded-3xl bg-gray-900/50 border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="mb-6 w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                Facilitate research and professional development in IT.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                Foster collaboration between industry, academia, and government.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                Drive innovation in areas of national importance.
              </li>
            </ul>
          </motion.div>
        </motion.div>


        {/* --- WHO WE ARE (Split Section) --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          <div className="lg:w-1/2">
             <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 group">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
                    <img 
                      src="images/faculty/itreddy.JPG" 
                      alt="CSI Conference" 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                    />
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Legacy of Technical Excellence</h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Established in 1965, the Computer Society of India (CSI) has grown to become the largest network of IT professionals in the country. 
                Operating as a non-profit professional society, we provide a neutral platform for industry leaders, researchers, and students to exchange ideas.
              </p>
              <p>
                With a robust network of regional chapters and student branches, CSI is instrumental in setting professional standards, 
                advocating for ethical practices, and driving the continuous evolution of the Indian IT sector.
              </p>
            </div>
            
            <div className="mt-8 flex gap-8">
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">50+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Years of Legacy</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">70+</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wider">Student Chapters</p>
               </div>
            </div>
          </div>
        </div>


        {/* --- CORE PILLARS (Objectives) --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Objectives</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our roadmap for advancing the theory and practice of computer science across the nation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Knowledge Advancement",
                desc: "Advancing the theory and practice of computer science, engineering, and information systems through structured learning."
              },
              {
                icon: Award,
                title: "Professional Standards",
                desc: "Promoting professional competence, ethical conduct, and technical excellence within the IT workforce."
              },
              {
                icon: Globe,
                title: "Innovation Ecosystem",
                desc: "Providing forums for discussion on emerging trends, fostering research, and supporting technical innovation."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors duration-300"
              >
                <item.icon className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* --- STUDENT BRANCH FOCUS --- */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl p-8 md:p-16 border border-white/5 mb-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full" />
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-2/3">
                 <h2 className="text-3xl font-bold mb-4">CSI Student Branch</h2>
                 <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                   Operating within academic institutions, our Student Branch bridges the gap between formal education and industry reality. 
                   We organize hackathons, expert lectures, and technical workshops to prepare the next generation of IT leaders.
                 </p>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                    <li className="flex items-center gap-2">
                       <Users size={16} className="text-blue-400"/> Professional Networking
                    </li>
                    <li className="flex items-center gap-2">
                       <Award size={16} className="text-blue-400"/> Technical Competitions
                    </li>
                    <li className="flex items-center gap-2">
                       <Lightbulb size={16} className="text-blue-400"/> Skill Development
                    </li>
                    <li className="flex items-center gap-2">
                       <Globe size={16} className="text-blue-400"/> Industry Exposure
                    </li>
                 </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                 {/* Decorative Icon Graphic */}
                 <div className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/20">
                    <img src="/logos/csi_logo.png" alt="CSI Logo" className="w-40 h-40 " />
                    {/* Note: Replace src with actual CSI logo path if available, or keep as stylized text */}
                    <span className="sr-only">CSI Logo</span>
                 </div>
              </div>
           </div>
        </div>


        {/* --- CSI STUDENT BRANCH AT SRKR --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-semibold tracking-wide uppercase">
              SRKR Chapter
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
              CSI Student Branch at <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">SRKR</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-400 max-w-3xl mx-auto text-lg">
              Empowering students at Sagi Rama Krishnam Raju Engineering College through technical excellence and professional development
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Establishment & Mission */}
            <div className="group relative p-8 md:p-12 rounded-3xl bg-gray-900/50 border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Establishment & Purpose</h3>
                <p className="text-gray-300 leading-relaxed">
                  The CSI Student Branch at SRKR was established as part of the institution's initiative to promote professional engagement and technical development among students in computing and information technology disciplines. We function as a platform for organizing technical, academic, and co-curricular activities that extend beyond the regular curriculum.
                </p>
              </div>
            </div>

            {/* Activities & Focus */}
            <div className="group relative p-8 md:p-12 rounded-3xl bg-gray-900/50 border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Core Activities</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    Technical workshops and skill development programs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    Coding competitions and technical contests
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    Guest lectures and expert talks
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    Project exhibitions and hackathons
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Flagship Events */}
          <motion.div variants={fadeInUp} className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-center">Flagship Events</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hack N Clash */}
              <div className="group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300">
                <div className="mb-4 w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">Hack 'N' Clash</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  A coding competition focused on improving programming skills, logical thinking, and competitive problem-solving abilities. The event brings together students from multiple departments for collaborative and time-bound coding challenges.
                </p>
              </div>

              {/* Prakriti Quest */}
              <div className="group relative p-8 md:p-10 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-green-500/30 transition-all duration-300">
                <div className="mb-4 w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-xl font-bold mb-3">Prakriti Quest</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Smart Farming Innovation Expo encouraging students to develop technology-based solutions for agriculture and sustainability. Highlights the application of data analysis, automation, and system design to real-world societal problems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Impact & Contributions */}
          <motion.div variants={fadeInUp} className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-10 md:p-12 border border-white/5">
            <h3 className="text-2xl font-bold mb-6">Our Impact & Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-semibold mb-2 text-purple-300">Technical Learning</h4>
                <p className="text-sm leading-relaxed">
                  Regular workshops on programming, web development, data analytics, machine learning, and emerging technologies to supplement classroom learning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Professional Engagement</h4>
                <p className="text-sm leading-relaxed">
                  Guest lectures and expert talks by industry professionals and academicians providing insights into emerging trends and career opportunities.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-purple-300">Skill Enhancement</h4>
                <p className="text-sm leading-relaxed">
                  Coding contests, technical quizzes, and project demonstrations aimed at enhancing analytical skills and fostering peer learning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-300">Innovation & Collaboration</h4>
                <p className="text-sm leading-relaxed">
                  Project exhibitions encouraging innovation and interdisciplinary collaboration among students of different programmes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Forward */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              The CSI Student Branch at SRKR continues to function as an active professional body, supporting student participation in technical events and contributing to the institution's academic and professional ecosystem through sustained and structured activities. We remain committed to bridging the gap between education and industry, preparing the next generation of IT leaders.
            </p>
          </motion.div>
        </motion.div>

        

      </div>
    </div>
  );
};

export default About;
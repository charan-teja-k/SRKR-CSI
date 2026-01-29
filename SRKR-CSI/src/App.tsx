import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, } from './components/layout';
import { Home, About, Events, EventDetails, Members, NotFound } from './pages';
import { useScrollToTop } from './hooks';
import JoinCSI from './pages/JoinCSI';
import './App.css';
import KineticFooter from './components/KineticFooter';

const ScrollToTop: React.FC = () => {
  useScrollToTop();
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      {/* 
         FIXED: Changed 'overflow-hidden' to 'overflow-x-hidden'. 
         'overflow-hidden' prevents scrolling completely. 
      */}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/members" element={<Members />} />
            <Route path="/join" element={<JoinCSI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <KineticFooter />
      </div>
    </Router>
  );
};

export default App;

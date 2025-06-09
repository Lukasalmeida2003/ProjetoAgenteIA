import React from 'react';
import Hero from './components/Hero';
import ProofInAction from './components/ProofInAction';
import AgentCards from './components/AgentCards';
import WhatYouGet from './components/WhatYouGet';
import PricingPlans from './components/PricingPlans';
import Guarantee from './components/Guarantee';
import FinalCTA from './components/FinalCTA';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#0B0B0B] to-[#1B1B1B] font-sans">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <ProofInAction />
      <AgentCards />
      <WhatYouGet />
      <PricingPlans />
      <Guarantee />
      <FinalCTA />
    </div>
  );
}

export default App;
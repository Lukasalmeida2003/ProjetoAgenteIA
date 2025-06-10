import React from 'react';
import Hero from './components/Hero';
import PanelShowcase from './components/PanelShowcase';
import ValueStack from './components/ValueStack';
import Dashboard from './components/Dashboard';
import Demonstration from './components/Demonstration';
import Benefits from './components/Benefits';
import Guarantee from './components/Guarantee';
import PricingCard from './components/PricingCard';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#0B0B0B] to-[#1B1B1B] font-sans">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <PanelShowcase />
      <ValueStack />
      <Dashboard />
      <Demonstration />
      <Benefits />
      <Guarantee />
      <PricingCard />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
}

export default App;
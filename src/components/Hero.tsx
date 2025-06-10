import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Zap, Target, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Seem pensar, sem errar, sem enrolar.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, []);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  const floatingCards = [
    { icon: <BrainCircuit className="w-6 h-6" />, title: "Coach Relacionamento", delay: 0 },
    { icon: <Zap className="w-6 h-6" />, title: "Copy que Vende", delay: 0.5 },
    { icon: <Target className="w-6 h-6" />, title: "Day Trade Pro", delay: 1 },
    { icon: <Clock className="w-6 h-6" />, title: "Produtividade", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden" id="início">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-light to-background-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent opacity-10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary opacity-15 rounded-full blur-[100px] animate-float"></div>
      
      {/* Digital grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content - Centered */}
            <motion.div 
              className="space-y-8 text-center lg:text-left flex flex-col justify-center"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* Problem Statement Headline */}
              <motion.h1 
                variants={item}
                className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="text-white">Você ainda usa o ChatGPT</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                  digitando prompts no chute?
                </span>
              </motion.h1>
              
              {/* Subheadline */}
              <motion.div 
                variants={item}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Você está <span className="text-accent font-semibold">desperdiçando tempo, resultados e oportunidades.</span>
                </p>
                
                <div className="bg-background-light/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 mx-auto lg:mx-0 max-w-2xl">
                  <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                    Conheça o <span className="text-primary font-semibold">Painel de Agentes Inteligentes:</span>
                    <br />
                    <span className="text-accent">15 agentes prontos</span> pra executar com exatidão o que você precisa —
                  </p>
                  
                  <div className="mt-4 h-8">
                    <p className="text-lg md:text-xl text-white font-medium">
                      {typedText}
                      <span className="animate-pulse text-primary">|</span>
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Button */}
              <motion.div 
                variants={item}
                className="pt-4 flex flex-col items-center lg:items-start"
              >
                <motion.a
                  href="https://go.disruptybr.shop/escbpcnlgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(253, 216, 53, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-accent to-primary text-background-dark font-bold text-xl px-12 py-6 rounded-lg shadow-2xl hover:shadow-accent/30 transition-all duration-300"
                >
                  Quero acessar agora
                </motion.a>
                
                <p className="text-gray-400 text-sm mt-4 text-center lg:text-left">
                  ✓ Acesso imediato • ✓ Garantia de 7 dias • ✓ Suporte incluído
                </p>
                
                {/* New immediate access line */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="text-accent text-lg mt-3 text-center lg:text-left font-medium"
                >
                  → Receba acesso imediato. Em menos de 3 minutos você já estará operando sua IA.
                </motion.p>
              </motion.div>
            </motion.div>
            
            {/* Right Visual - Dashboard Mockup - Centered */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Main Dashboard Container */}
              <div className="relative bg-gradient-to-br from-background-light to-background-dark rounded-2xl border border-primary/30 shadow-2xl overflow-hidden max-w-md w-full">
                {/* Dashboard Header */}
                <div className="bg-background-dark/80 backdrop-blur-sm border-b border-primary/20 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-primary text-sm font-mono">Painel Agentes.IA</div>
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">15 Agentes Ativos</h3>
                    <div className="w-full bg-background-dark rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>
                  
                  {/* Agent Cards Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Coach Relacionamento", status: "Ativo", color: "primary" },
                      { name: "Copy que Vende", status: "Ativo", color: "accent" },
                      { name: "Day Trade Pro", status: "Ativo", color: "primary" },
                      { name: "Produtividade", status: "Ativo", color: "accent" },
                      { name: "Nutrição", status: "Ativo", color: "primary" },
                      { name: "Estudos", status: "Ativo", color: "accent" },
                    ].map((agent, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        className={`bg-background-dark/60 backdrop-blur-sm border border-${agent.color}/20 rounded-lg p-3`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white text-sm font-medium">{agent.name}</div>
                            <div className={`text-${agent.color} text-xs`}>{agent.status}</div>
                          </div>
                          <div className={`w-2 h-2 bg-${agent.color} rounded-full animate-pulse`}></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">92%</div>
                      <div className="text-xs text-gray-400">Precisão</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">6h</div>
                      <div className="text-xs text-gray-400">Economia/sem</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">15</div>
                      <div className="text-xs text-gray-400">Especialistas</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Agent Cards */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + card.delay, duration: 0.5 }}
                  className={`absolute bg-background-light/90 backdrop-blur-sm border border-primary/30 rounded-lg p-3 shadow-lg ${
                    index === 0 ? '-top-4 -left-4' :
                    index === 1 ? '-top-4 -right-4' :
                    index === 2 ? '-bottom-4 -left-4' :
                    '-bottom-4 -right-4'
                  }`}
                  style={{
                    animation: `float ${6 + index}s ease-in-out infinite`,
                    animationDelay: `${card.delay}s`
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="text-primary">{card.icon}</div>
                    <div className="text-white text-sm font-medium">{card.title}</div>
                  </div>
                </motion.div>
              ))}
              
              {/* Glow effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50"></div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
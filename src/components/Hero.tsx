import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "­EEspecialistas prontos para trabalhar por você.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);
    
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden" id="início">
      <div className="container mx-auto px-4 md:px-6 z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={item}
            className="flex justify-center mb-6"
          >
            <BrainCircuit className="w-16 h-16 text-primary animate-pulse-slow" />
          </motion.div>
          
          <motion.h1 
            variants={item}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Transforme Seu ChatGPT em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              69 Especialistas
            </span>
            {" "}em Apenas 1 Minuto
          </motion.h1>
          
          <motion.div 
            variants={item}
            className="h-8 mb-8"
          >
            <p className="text-xl text-gray-300 inline-block overflow-hidden whitespace-nowrap border-r-4 border-primary">
              {typedText}
            </p>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="relative inline-block"
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-secondary blur opacity-30 animate-pulse-slow"></div>
            <button className="relative bg-background-dark text-white py-4 px-8 rounded-lg font-semibold text-lg border border-primary hover:bg-primary hover:text-background-dark transition-all duration-300 flex items-center">
              <Sparkles className="mr-2 h-5 w-5" />
              Quero Ativar Meus Agentes
            </button>
          </motion.div>
          
          <motion.div 
            className="mt-16 relative"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.8, 
              duration: 0.8,
              type: 'spring',
              stiffness: 50
            }}
          >
            <img 
              src="https://images.pexels.com/photos/7567529/pexels-photo-7567529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="AI Assistants Dashboard" 
              className="rounded-lg shadow-2xl border border-gray-800 max-w-full mx-auto"
            />
            <div className="absolute -top-4 -left-4 h-16 w-16 bg-secondary rounded-full flex items-center justify-center animate-float">
              <span className="font-bold text-xl">69x</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
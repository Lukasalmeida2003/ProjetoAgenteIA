import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ArrowRight, MousePointer2, Zap } from 'lucide-react';

const ProofInAction: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { 
      title: "1. Clique no Agente", 
      description: "Selecione o agente especializado",
      visual: "Selecionando 'Copy que Vende'..."
    },
    { 
      title: "2. Receba o Plano Pronto", 
      description: "ChatGPT gera resposta estruturada",
      visual: "Gerando estratégia de vendas..."
    },
    { 
      title: "3. Aja com Precisão", 
      description: "Execute com confiança total",
      visual: "Plano completo entregue!"
    }
  ];

  React.useEffect(() => {
    if (inView && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [inView, currentStep, steps.length]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-dark to-background-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent opacity-5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Veja os Agentes em <span className="text-accent">ação</span> no ChatGPT
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Clique em um agente. Receba o plano pronto. Aja com precisão.
          </motion.p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-start space-x-4 p-6 rounded-lg transition-all duration-500 ${
                  index === currentStep 
                    ? 'bg-background-light border-l-4 border-accent shadow-lg' 
                    : index < currentStep 
                      ? 'bg-background-light/50 opacity-80' 
                      : 'bg-background-dark/50 opacity-40'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                  index === currentStep 
                    ? 'bg-accent text-background-dark animate-pulse' 
                    : index < currentStep 
                      ? 'bg-primary text-background-dark' 
                      : 'bg-gray-700 text-gray-400'
                }`}>
                  {index < currentStep ? '✓' : index + 1}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${
                    index === currentStep ? 'text-accent' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                  {index === currentStep && (
                    <p className="text-accent text-sm mt-2 animate-pulse">
                      {step.visual}
                    </p>
                  )}
                </div>
              </div>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(0)}
              className="bg-accent text-background-dark font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 flex items-center"
            >
              <Play className="w-4 h-4 mr-2" />
              Ver Demonstração Novamente
            </motion.button>
          </motion.div>
          
          {/* Right Side - ChatGPT Simulation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* ChatGPT Interface Mockup */}
            <div className="bg-background-dark rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-background-light p-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-background-dark" />
                    </div>
                    <span className="text-white font-semibold">ChatGPT + Agentes.IA</span>
                  </div>
                  <div className="text-xs text-gray-400">GPT-4</div>
                </div>
              </div>
              
              {/* Chat Content */}
              <div className="p-6 space-y-4 h-96 overflow-hidden">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-primary text-background-dark p-3 rounded-lg max-w-xs">
                    <p className="text-sm">Preciso criar uma copy para vender meu curso online</p>
                  </div>
                </div>
                
                {/* Agent Selection */}
                {currentStep >= 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center space-x-2 text-accent"
                  >
                    <MousePointer2 className="w-4 h-4" />
                    <span className="text-sm">Agente "Copy que Vende" ativado...</span>
                  </motion.div>
                )}
                
                {/* ChatGPT Response */}
                {currentStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-background-light p-4 rounded-lg"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-background-dark text-xs font-bold">AI</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm mb-2">
                          <strong>COPY ESTRATÉGICA PARA SEU CURSO ONLINE</strong>
                        </p>
                        <div className="text-gray-300 text-sm space-y-2">
                          <p>📋 <strong>HEADLINE PRINCIPAL:</strong></p>
                          <p className="text-accent">"Domine [Sua Área] em 30 dias - Mesmo começando do zero"</p>
                          
                          <p>🎯 <strong>ESTRUTURA DE VENDAS:</strong></p>
                          <ul className="list-disc list-inside space-y-1 text-xs">
                            <li>Problema identificado</li>
                            <li>Solução apresentada</li>
                            <li>Prova social incluída</li>
                            <li>Oferta irresistível</li>
                          </ul>
                          
                          {currentStep >= 2 && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <p className="text-primary">✅ Copy completa gerada com sucesso!</p>
                            </motion.div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-background-dark p-3 rounded-lg shadow-lg"
            >
              <span className="text-sm font-semibold">1 Clique = Resultado</span>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="text-center mt-16">
          <motion.a
            href="#agentes"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-background-dark font-semibold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center text-lg"
          >
            Ver Todos os 15 Agentes
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProofInAction;
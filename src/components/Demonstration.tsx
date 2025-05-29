import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, ArrowRight } from 'lucide-react';

const Demonstration: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    { 
      title: "Selecione um Agente", 
      command: "> Selecionar Agente: Coach de Relacionamento...",
      response: "[OK] Agente selecionado com sucesso."
    },
    { 
      title: "Ative o Prompt", 
      command: "> Ativando Prompt de Coach de Relacionamento...",
      response: "[SUCESSO] Prompt ativado. ChatGPT transformado em Coach."
    },
    { 
      title: "Faça sua Pergunta", 
      command: "> Enviando pergunta: Como melhorar comunicação no relacionamento?",
      response: "[PROCESSANDO] Gerando resposta especializada..."
    },
    { 
      title: "Receba Resposta Especializada", 
      command: "> Resposta gerada com sucesso.",
      response: "[COMPLETO] Resposta de especialista pronta para visualização."
    }
  ];

  React.useEffect(() => {
    if (inView && currentStep < steps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [inView, currentStep, steps.length]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="demonstração">
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary opacity-10 blur-[100px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Processo simples, rápido e intuitivo para ativar seus agentes inteligentes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-col space-y-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex ${index > currentStep ? 'opacity-40' : 'opacity-100'} transition-opacity duration-500`}
                >
                  <div className="mr-4 relative">
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center z-10 relative ${
                        index === currentStep 
                          ? 'bg-primary text-background-dark animate-pulse' 
                          : index < currentStep 
                            ? 'bg-primary text-background-dark' 
                            : 'bg-background-light text-gray-400 border border-gray-700'
                      }`}
                    >
                      {index < currentStep ? (
                        <svg className="w-4 h-4\" fill="none\" stroke="currentColor\" viewBox="0 0 24 24\" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round\" strokeLinejoin="round\" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div 
                        className={`absolute top-8 left-4 w-0.5 h-16 ${
                          index < currentStep ? 'bg-primary' : 'bg-gray-700'
                        }`}
                      ></div>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      index === currentStep ? 'text-primary' : 'text-white'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mt-1">
                      {index <= currentStep ? step.command : '...'}
                    </p>
                    {index <= currentStep && (
                      <p className="text-green-400 mt-1">
                        {step.response}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentStep(0)}
              className="bg-background-light text-white font-semibold py-3 px-6 rounded-lg border border-gray-700 hover:border-primary transition-all duration-300 flex items-center"
            >
              <Play className="w-4 h-4 mr-2" />
              Reiniciar Demonstração
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-background-dark p-6 rounded-lg border border-gray-800 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-xs text-gray-400">terminal-ai-agent</div>
            </div>
            
            <div className="font-mono text-sm space-y-2">
              <div className="text-gray-400">$ ai-agent --activate coach-relacionamento</div>
              <div className="text-green-400">✓ Agente "Coach de Relacionamento" carregado com sucesso.</div>
              <div className="h-1"></div>
              
              <div className="text-gray-400">$ agent.config --view</div>
              <div className="text-white">
                ┌────────────────────────────────────┐<br />
                │ Agente: Coach de Relacionamento    │<br />
                │ Status: ATIVO                      │<br />
                │ Precisão: 92%                      │<br />
                │ Treinamento: Avançado              │<br />
                └────────────────────────────────────┘
              </div>
              <div className="h-1"></div>
              
              {currentStep >= 2 && (
                <>
                  <div className="text-gray-400">$ agent.query "Como melhorar a comunicação no meu relacionamento?"</div>
                  <div className="text-primary">Processando consulta...</div>
                </>
              )}
              
              {currentStep >= 3 && (
                <>
                  <div className="text-white mt-2">
                    Para melhorar a comunicação no seu relacionamento:<br />
                    <br />
                    1. Pratique escuta ativa sem interrupções<br />
                    2. Use "eu" em vez de "você" nas discussões<br />
                    3. Estabeleça momentos dedicados para conversas importantes<br />
                    4. Reconheça e valide os sentimentos do parceiro(a)<br />
                    <br />
                    <div className="text-primary">Deseja um plano detalhado em 7 dias? [S/N]</div>
                  </div>
                  <div className="flex items-center text-white mt-1">
                    <span className="text-primary mr-1">❯</span> S <span className="animate-pulse">_</span>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
        
        <div className="text-center mt-16">
          <motion.a
            href="#preços"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-background-dark font-semibold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center"
          >
            Experimentar Agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Demonstration;
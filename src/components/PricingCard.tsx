import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, X, ArrowRight } from 'lucide-react';

const PricingCard: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [activePlan, setActivePlan] = useState<'essential' | 'premium'>('essential');
  
  const plans = {
    essential: {
      name: "Pacote Essencial",
      price: "19,90",
      monthlyEquivalent: "Equivalente a R$0,66 por dia",
      features: [
        "15 Agentes Prontos para uso",
        "Atualizações gratuitas por 6 meses",
        "Ativação com 1 clique",
        "Suporte por e-mail",
        "Compatível com ChatGPT 3.5"
      ],
      notIncluded: [
        "Agentes personalizados",
        "Integrações com outras IAs",
        "Compatibilidade com GPT-4"
      ]
    },
    premium: {
      name: "Pacote Premium",
      price: "39,90",
      monthlyEquivalent: "Equivalente a R$1,33 por dia",
      features: [
        "25 Agentes Premium",
        "Atualizações vitalícias",
        "Ativação com 1 clique",
        "Suporte prioritário",
        "Compatível com ChatGPT 3.5 e GPT-4",
        "Agentes personalizados ilimitados",
        "Integrações com Claude e outras IAs",
        "Acesso a novas versões antes"
      ],
      notIncluded: []
    }
  };
  
  const activePlanData = plans[activePlan];
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="preços">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary opacity-5 blur-[150px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o <span className="text-primary">Plano</span> Ideal
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Opções flexíveis para atender suas necessidades com o melhor custo-benefício
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background-light p-2 rounded-lg inline-flex mb-8 mx-auto">
            <button
              onClick={() => setActivePlan('essential')}
              className={`px-6 py-2 rounded ${
                activePlan === 'essential' 
                  ? 'bg-primary text-background-dark' 
                  : 'text-gray-400 hover:text-white'
              } transition-all duration-300`}
            >
              Essencial
            </button>
            <button
              onClick={() => setActivePlan('premium')}
              className={`px-6 py-2 rounded ${
                activePlan === 'premium' 
                  ? 'bg-primary text-background-dark' 
                  : 'text-gray-400 hover:text-white'
              } transition-all duration-300`}
            >
              Premium
            </button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl rounded-xl"></div>
            <div className="absolute inset-0 border border-primary opacity-50 rounded-xl"></div>
            
            <div className="relative bg-background-dark rounded-xl overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{activePlanData.name}</h3>
                    <p className="text-gray-400">{activePlanData.monthlyEquivalent}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-4xl font-bold">
                      R$ <span className="text-primary">{activePlanData.price}</span>
                      <span className="text-gray-400 text-xl ml-1">única vez</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-4 flex items-center">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      O que está incluído
                    </h4>
                    <ul className="space-y-3">
                      {activePlanData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2 mt-0.5">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {activePlanData.notIncluded.length > 0 && (
                    <div>
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <X className="h-5 w-5 text-gray-500 mr-2" />
                        O que não está incluído
                      </h4>
                      <ul className="space-y-3">
                        {activePlanData.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-gray-500 mr-2 mt-0.5">✕</span>
                            <span className="text-gray-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center ${
                    activePlan === 'premium' 
                      ? 'bg-gradient-to-r from-primary to-secondary text-background-dark' 
                      : 'bg-primary text-background-dark'
                  }`}
                >
                  Escolher {activePlanData.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Pagamento único. Sem assinatura. Garantia de satisfação de 7 dias.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
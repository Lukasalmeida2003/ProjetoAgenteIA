import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const PricingCard: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const features = [
    "15 Agentes Prontos para uso",
    "Ativação com 1 clique",
    "Suporte prioritário",
    "Compatível com ChatGPT 3.5 e GPT-4",
    "Integrações com outras IAs",
    "Agentes ajustados para uso estratégico"
  ];
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="preços">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary opacity-5 blur-[150px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece Agora <span className="text-primary">Mesmo</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforme seu ChatGPT em uma equipe completa de especialistas
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
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
                    <h3 className="text-2xl font-bold mb-2">Pacote Completo</h3>
                    <p className="text-gray-400">Equivalente a R$1,23 por dia</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="text-4xl font-bold">
                      R$ <span className="text-primary">37,00</span>
                      <span className="text-gray-400 text-xl ml-1">única vez</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    Tudo que você precisa
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <motion.a
                  href="https://go.disruptybr.shop/escbpcnlgw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-background-dark"
                >
                  Ativar Agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                
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
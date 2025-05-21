import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

const PricingCard: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const features = [
    "15 agentes otimizados para TikTok, vendas, concursos, relacionamentos e mais",
    "Ativação com 1 clique direto no ChatGPT",
    "Interface responsiva com acesso vitalício",
    "Uso diário inteligente para foco, sem desperdício de tempo"
  ];

  const glowAnimation = {
    initial: { opacity: 0.4 },
    animate: {
      opacity: [0.4, 0.8, 0.4],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1, boxShadow: "0 0 0 rgba(0, 255, 255, 0)" },
    hover: { 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="preços">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <motion.div
              variants={glowAnimation}
              initial="initial"
              animate="animate"
              className="absolute -inset-0.5 bg-primary opacity-40 blur-sm rounded-xl"
            />
            
            <div className="relative bg-[#1B1B1B] rounded-xl overflow-hidden border border-primary/30">
              <div className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4 text-primary">
                    Pacote Completo – Agentes Inteligentes para ChatGPT
                  </h3>
                  <p className="text-xl text-white mb-2">
                    Acesse 15 agentes prontos para transformar o seu ChatGPT em uma central de especialistas com apenas 1 clique.
                  </p>
                  <div className="text-3xl font-bold mt-6">
                    <span className="text-primary">R$ 37,90</span>
                    <span className="text-gray-400 text-xl ml-1">pagamento único</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-white text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-background-dark/50 p-4 rounded-lg mb-8">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-yellow-500">
                      Os agentes funcionam com lógica de uso diário inteligente. Você acessa com foco e propósito, sem sobrecarga ou confusão.
                    </p>
                  </div>
                </div>
                
                <motion.a
                  href="https://app.cakto.com.br/checkout-builder/317365"
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full py-5 rounded-lg font-semibold text-xl flex items-center justify-center bg-gradient-to-r from-primary to-primary/80 text-background-dark relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Quero Ativar por R$37,90
                    <ArrowRight className="ml-2 h-6 w-6 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"></div>
                </motion.a>
                
                <p className="text-center text-gray-400 text-sm mt-4">
                  Garantia de satisfação de 7 dias ou seu dinheiro de volta
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
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle2, Clock, RefreshCw } from 'lucide-react';

const Guarantee: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const guaranteeFeatures = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7 dias completos",
      description: "Tempo suficiente para testar todos os agentes"
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "100% do dinheiro de volta",
      description: "Reembolso total, sem desconto de taxas"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Sem perguntas",
      description: "Processo simples e sem burocracia"
    }
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-dark to-background-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent opacity-10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Shield Icon */}
          <div className="mb-8">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto shadow-2xl"
            >
              <Shield className="w-12 h-12 text-background-dark" />
            </motion.div>
          </div>

          {/* Main Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-accent">Garantia incondicional</span> de 7 dias
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
          >
            Se você não amar o Painel Agentes.IA, devolvemos 100% do seu dinheiro.<br />
            <span className="text-accent font-semibold">Sem perguntas. Sem burocracia. Sem enrolação.</span>
          </motion.p>

          {/* Guarantee Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {guaranteeFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-background-light rounded-2xl flex items-center justify-center mx-auto mb-4 border border-accent/20">
                  <div className="text-accent">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </motion.div>

          {/* Guarantee Seal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-background-light to-background-dark rounded-2xl border-2 border-accent/30 p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-background-dark font-bold text-xl">✓</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold">100% Reembolso Garantido</h3>
                  <p className="text-gray-400">Selo de confiança e segurança</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Estamos tão confiantes na qualidade dos nossos agentes que oferecemos esta garantia incondicional. 
                Teste por 7 dias completos e, se não estiver satisfeito, basta solicitar o reembolso.
              </p>
            </div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm">Pagamento Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm">Processo Automatizado</span>
            </div>
            <div className="flex items-center space-x-2">
              <RefreshCw className="w-5 h-5 text-accent" />
              <span className="text-sm">Reembolso em 24h</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
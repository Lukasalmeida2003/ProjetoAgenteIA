import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket, Clock, Zap } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-light to-background-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-accent opacity-15 rounded-full blur-[120px] -translate-x-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary opacity-10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Urgency Icon */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <Rocket className="w-10 h-10 text-background-dark" />
            </div>
          </motion.div>

          {/* Emotional Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Você pode continuar escrevendo <span className="text-gray-500">prompts ruins</span>…<br />
            ou pode <span className="text-accent">começar agora</span> com tudo pronto.
          </motion.h2>

          {/* Encouraging Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <div className="bg-background-light/50 backdrop-blur-sm rounded-2xl p-8 border border-accent/20 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed mb-4">
                O <span className="text-accent font-semibold">Painel Agentes.IA</span> já está pronto.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Em menos de <span className="text-primary font-semibold">3 minutos</span> você estará operando o ChatGPT no piloto automático.<br />
                <span className="text-accent">A decisão é sua. Mas o tempo não volta.</span>
              </p>
            </div>
          </motion.div>

          {/* Urgency Elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-12"
          >
            <div className="flex items-center space-x-2 text-accent">
              <Clock className="w-6 h-6" />
              <span className="font-semibold">Acesso Imediato</span>
            </div>
            <div className="flex items-center space-x-2 text-primary">
              <Zap className="w-6 h-6" />
              <span className="font-semibold">Resultados em Minutos</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Rocket className="w-6 h-6" />
              <span className="font-semibold">Transformação Total</span>
            </div>
          </motion.div>

          {/* Main CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-8"
          >
            <motion.a
              href="https://go.disruptybr.shop/escbpcnlgw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(253, 216, 53, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-accent to-primary text-background-dark font-bold text-2xl px-16 py-6 rounded-2xl shadow-2xl hover:shadow-accent/40 transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Quero meu painel agora
                <ArrowRight className="ml-3 h-6 w-6" />
              </span>
              
              {/* Pulsing effect */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-white/20 rounded-2xl"
              />
            </motion.a>
          </motion.div>

          {/* Final Guarantee */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-gray-400 text-lg"
          >
            ✓ Garantia de 7 dias • ✓ Acesso imediato • ✓ Suporte incluído
          </motion.p>

          {/* Countdown or Urgency Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 bg-background-dark/50 backdrop-blur-sm rounded-xl p-6 border border-accent/20 max-w-2xl mx-auto"
          >
            <p className="text-accent font-semibold mb-2">⚡ Oferta por tempo limitado</p>
            <p className="text-gray-300 text-sm">
              Milhares de pessoas já estão usando os agentes para transformar seus resultados no ChatGPT. 
              Não fique para trás.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle2, Lock, Award, RefreshCw } from 'lucide-react';

const Guarantee: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main guarantee box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="bg-background-light rounded-2xl p-8 md:p-12 border border-gray-800 shadow-2xl relative overflow-hidden"
          >
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Main guarantee seal */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary to-secondary rounded-full mb-8 shadow-lg"
              >
                <Shield className="h-12 w-12 text-white" />
              </motion.div>

              {/* Main title */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                <span className="text-primary">Garantia incondicional</span> de 7 dias
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
              >
                Se você não amar o Painel Agentes.IA, devolvemos 100% do seu dinheiro.<br />
                <span className="text-white font-semibold">Sem perguntas. Sem burocracia. Sem enrolação.</span>
              </motion.p>

              {/* Guarantee badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-8"
              >
                <Award className="h-6 w-6 mr-2" />
                100% Reembolso Garantido
              </motion.div>

              {/* Features grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
              >
                <div className="flex flex-col items-center p-6 bg-background-dark rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Sem Perguntas</h3>
                  <p className="text-gray-400 text-sm text-center">
                    Não precisa justificar o motivo do reembolso
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-background-dark rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">Processo Rápido</h3>
                  <p className="text-gray-400 text-sm text-center">
                    Reembolso processado em até 48 horas
                  </p>
                </div>

                <div className="flex flex-col items-center p-6 bg-background-dark rounded-lg border border-gray-700">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">100% Seguro</h3>
                  <p className="text-gray-400 text-sm text-center">
                    Pagamento protegido e dados criptografados
                  </p>
                </div>
              </motion.div>

              {/* Bottom message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/30"
              >
                <p className="text-gray-300 text-lg">
                  <span className="text-primary font-semibold">Nossa confiança é total:</span> sabemos que você vai amar os resultados que o Painel Agentes.IA vai trazer para sua produtividade. Por isso, assumimos todo o risco para você.
                </p>
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-primary opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary opacity-20 rounded-full blur-xl"></div>
          </motion.div>

          {/* Additional trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12 text-gray-400"
          >
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Pagamento Seguro</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">SSL Criptografado</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm">Garantia Verificada</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
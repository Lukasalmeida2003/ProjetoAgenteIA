import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight, Frown, Smile } from 'lucide-react';

const UserIdentification: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const frustrations = [
    "Já usou o ChatGPT e se frustrou com respostas ruins?",
    "Perde horas tentando escrever prompt e não consegue o que quer?",
    "Quer usar IA, mas acha complicado demais?",
    "Vê outras pessoas usando IA e se sente travado?"
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-dark to-background-light">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(155,93,229,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Se você se identifica com isso, o{" "}
            <span className="text-primary">problema não é você.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left side - Frustrations list */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            {frustrations.map((frustration, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start space-x-4 p-4 bg-background-dark rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">{frustration}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Visual comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Problem illustration */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6 mb-6 relative">
              <div className="flex items-center mb-4">
                <Frown className="h-8 w-8 text-red-400 mr-3" />
                <h3 className="text-lg font-semibold text-red-300">Jeito Antigo (Frustrante)</h3>
              </div>
              <div className="bg-background-dark p-4 rounded border border-gray-700">
                <div className="text-gray-400 text-sm mb-2">ChatGPT</div>
                <div className="text-gray-300 mb-2">Como fazer um plano de negócios?</div>
                <div className="text-gray-500 text-sm">
                  Resposta genérica e superficial...
                  <br />Sem contexto específico...
                  <br />Você fica perdido...
                </div>
              </div>
            </div>

            {/* Arrow transition */}
            <div className="flex justify-center mb-6">
              <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
            </div>

            {/* Solution illustration */}
            <div className="bg-primary/20 border border-primary/50 rounded-lg p-6 relative">
              <div className="flex items-center mb-4">
                <Smile className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-lg font-semibold text-primary">Com Agentes.IA (1 Clique)</h3>
              </div>
              <div className="bg-background-dark p-4 rounded border border-primary/30">
                <div className="text-primary text-sm mb-2">Agente: Consultor de Negócios</div>
                <div className="text-gray-300 mb-2">Como fazer um plano de negócios?</div>
                <div className="text-green-400 text-sm">
                  ✓ Plano detalhado em 7 etapas
                  <br />✓ Específico para seu nicho
                  <br />✓ Pronto para executar
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-4">
            O problema não é você. É o jeito errado de usar.
          </p>
          <p className="text-2xl font-semibold">
            E o <span className="text-primary">Painel Agentes.IA</span> resolve isso com{" "}
            <span className="text-secondary">1 clique.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UserIdentification;
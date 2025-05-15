import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Lightbulb, Zap, RefreshCw, Target, BarChart3 } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefits: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const benefits: Benefit[] = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Respostas Imediatas",
      description: "Economize tempo com respostas rápidas e altamente especializadas, sem pesquisas extensas."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "15 Áreas de Suporte",
      description: "Da saúde aos negócios, tenha especialistas cobrindo todas as áreas importantes da sua vida."
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Atualizações Inclusas",
      description: "Receba novos recursos e melhorias sem custos adicionais ao longo do tempo."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Otimizado para Resultados",
      description: "Agentes treinados especificamente para fornecer soluções práticas e aplicáveis."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Personalização Avançada",
      description: "Adapte os agentes às suas necessidades específicas com instruções simples."
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Melhoria Contínua",
      description: "Os agentes evoluem com o tempo, aprimorando suas respostas com base em feedback."
    }
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
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="benefícios">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_center,rgba(155,93,229,0.05)_0,rgba(0,0,0,0)_70%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Benefícios</span> Exclusivos
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforme sua experiência com ChatGPT e desfrute destes benefícios incríveis
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-background-light rounded-lg p-6 border border-gray-800 hover:border-primary transition-all duration-300 group"
            >
              <div className="mb-4 p-3 bg-background-dark rounded-lg inline-block text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
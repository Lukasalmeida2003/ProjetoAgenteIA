import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, BarChart3, CheckCircle, Brain } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const stats = [
    { label: "Agentes Utilizados", value: "11/15", icon: <Brain className="h-5 w-5 text-primary" /> },
    { label: "Economia de tempo", value: "6h por semana", icon: <Clock className="h-5 w-5 text-primary" /> },
    { label: "Precisão de resposta", value: "92%", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { label: "Produtividade", value: "+40%", icon: <BarChart3 className="h-5 w-5 text-primary" /> }
  ];

  const progressVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({
      width: `${i === 0 ? 73 : i === 1 ? 65 : i === 2 ? 92 : 84}%`,
      transition: { 
        duration: 1.5,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Monitore seu <span className="text-primary">Progresso</span>
            </h2>
            <p className="text-lg text-gray-300">
              Com nossos agentes inteligentes, você desbloqueará todo o potencial do ChatGPT, 
              transformando-o em uma equipe de especialistas trabalhando exclusivamente para você.
            </p>
            
            <div className="space-y-4">
              {['Economia de tempo', 'Insights valiosos', 'Respostas precisas'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-background-dark font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300"
            >
              Ver todos os benefícios
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background-light p-6 md:p-8 rounded-lg border border-gray-800 shadow-xl"
          >
            <div className="text-xl font-semibold mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-2"></span>
              Dashboard de Desempenho
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-background-dark p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    {stat.icon}
                    <span className="text-sm text-gray-400 ml-2">{stat.label}</span>
                  </div>
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-5">
              {['Economia de tempo', 'Qualidade da resposta', 'Precisão', 'Satisfação'].map((label, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <span className="text-primary">
                      {i === 0 ? '73%' : i === 1 ? '65%' : i === 2 ? '92%' : '84%'}
                    </span>
                  </div>
                  <div className="h-2 bg-background-dark rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      custom={i}
                      variants={progressVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
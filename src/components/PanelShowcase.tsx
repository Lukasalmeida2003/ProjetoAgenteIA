import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Video, 
  MessageSquareText, 
  GraduationCap, 
  Briefcase, 
  Brain, 
  BookHeart,
  ArrowRight,
  Sparkles,
  MousePointer
} from 'lucide-react';

const PanelShowcase: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const featuredAgents = [
    { 
      icon: <Video className="h-6 w-6" />, 
      title: "Explosão no TikTok", 
      description: "roteiros virais prontos",
      color: "from-pink-500 to-red-500"
    },
    { 
      icon: <MessageSquareText className="h-6 w-6" />, 
      title: "Copy que Vende", 
      description: "anúncios, e-mails e VSL",
      color: "from-green-500 to-emerald-500"
    },
    { 
      icon: <GraduationCap className="h-6 w-6" />, 
      title: "TCC & Estudo", 
      description: "resumos, redações e explicações",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Briefcase className="h-6 w-6" />, 
      title: "Marca Pessoal no LinkedIn", 
      description: "bio e posicionamento",
      color: "from-purple-500 to-indigo-500"
    },
    { 
      icon: <Brain className="h-6 w-6" />, 
      title: "Mindset & Foco", 
      description: "produtividade guiada por IA",
      color: "from-orange-500 to-yellow-500"
    },
    { 
      icon: <BookHeart className="h-6 w-6" />, 
      title: "Fé Diária", 
      description: "orações e reflexões personalizadas",
      color: "from-teal-500 to-green-500"
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
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const cardHover = {
    y: -10,
    scale: 1.05,
    boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.2), 0 10px 10px -5px rgba(0, 255, 255, 0.1)"
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(155,93,229,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                O Painel que faz o{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  ChatGPT trabalhar
                </span>{" "}
                por você
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                15 agentes prontos para executar tarefas específicas no ChatGPT.<br />
                Criados para gerar resultados reais — com apenas{" "}
                <span className="text-primary font-semibold">1 clique</span>.
              </p>
            </div>

            <div className="flex items-center space-x-3 text-gray-300">
              <MousePointer className="h-5 w-5 text-primary" />
              <span>Ativação instantânea</span>
              <Sparkles className="h-5 w-5 text-secondary" />
              <span>Resultados garantidos</span>
            </div>

            <motion.a
              href="#preços"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-background-dark font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Ver planos de acesso
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          {/* Right side - Panel mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Panel container */}
            <div className="bg-background-light rounded-2xl p-6 border border-gray-800 shadow-2xl relative overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400 font-mono">agentes.ia/panel</div>
              </div>

              {/* Panel title */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Painel Agentes.IA</h3>
                <p className="text-gray-400 text-sm">Selecione um agente para ativar no ChatGPT</p>
              </div>

              {/* Agents grid */}
              <motion.div 
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                className="grid grid-cols-2 gap-4"
              >
                {featuredAgents.map((agent, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={cardHover}
                    className="bg-background-dark rounded-lg p-4 border border-gray-700 hover:border-primary transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  >
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className={`mb-3 p-2 rounded-lg bg-gradient-to-br ${agent.color} text-white inline-block`}>
                        {agent.icon}
                      </div>
                      <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-primary transition-colors duration-300">
                        {agent.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-tight">
                        {agent.description}
                      </p>
                    </div>

                    {/* Activation indicator */}
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Panel footer */}
              <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
                <div className="text-xs text-gray-400">
                  6 de 15 agentes mostrados
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-xs text-primary">Sistema ativo</span>
                </div>
              </div>

              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary opacity-20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary opacity-20 rounded-full blur-xl"></div>
            </div>

            {/* Floating action indicators */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-6 -left-6 bg-primary text-background-dark px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              1 clique
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -8, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
              className="absolute -bottom-4 -right-8 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
            >
              Resultados reais
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PanelShowcase;
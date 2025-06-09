import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Video, 
  Instagram, 
  MessageSquareText, 
  GraduationCap, 
  Briefcase, 
  Brain, 
  BookHeart,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  Zap
} from 'lucide-react';

interface Agent {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

const AgentCards: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const agents: Agent[] = [
    { 
      id: 1, 
      icon: <Video className="h-6 w-6" />, 
      title: "Explosão no TikTok", 
      description: "Roteiros virais prontos",
      category: "Social Media"
    },
    { 
      id: 2, 
      icon: <MessageSquareText className="h-6 w-6" />, 
      title: "Copy que Vende", 
      description: "Anúncios, e-mails e VSL",
      category: "Marketing"
    },
    { 
      id: 3, 
      icon: <GraduationCap className="h-6 w-6" />, 
      title: "TCC & Estudo", 
      description: "Resumos, redações e explicações",
      category: "Educação"
    },
    { 
      id: 4, 
      icon: <Briefcase className="h-6 w-6" />, 
      title: "Marca Pessoal no LinkedIn", 
      description: "Bio e posicionamento",
      category: "Profissional"
    },
    { 
      id: 5, 
      icon: <Brain className="h-6 w-6" />, 
      title: "Mindset & Foco", 
      description: "Produtividade guiada por IA",
      category: "Desenvolvimento"
    },
    { 
      id: 6, 
      icon: <BookHeart className="h-6 w-6" />, 
      title: "Fé Diária", 
      description: "Orações e reflexões personalizadas",
      category: "Espiritualidade"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background-light to-background-dark" id="agentes">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary opacity-10 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            O Painel que faz o ChatGPT <span className="text-accent">trabalhar por você</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            15 agentes prontos para executar tarefas específicas no ChatGPT.<br />
            <span className="text-accent font-semibold">Criados para gerar resultados reais — com apenas 1 clique.</span>
          </motion.p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {agents.map((agent) => (
            <motion.div 
              key={agent.id}
              variants={item}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(253, 216, 53, 0.2)"
              }}
              className="group relative bg-gradient-to-br from-background-light to-background-dark rounded-xl p-8 border border-gray-800 hover:border-accent/50 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Category badge */}
              <div className="absolute top-4 right-4 bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                {agent.category}
              </div>
              
              <div className="relative z-10">
                <div className="mb-6 bg-background-dark/60 p-4 rounded-xl inline-block group-hover:bg-accent/20 transition-colors duration-300">
                  <div className="text-accent group-hover:text-accent transition-colors duration-300">
                    {agent.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {agent.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {agent.description}
                </p>
                
                <div className="flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold">Ativar Agente</span>
                  <Zap className="w-4 h-4 ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional agents preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center bg-background-light/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-4">
            + 9 Agentes Adicionais Inclusos
          </h3>
          <p className="text-gray-300 mb-6">
            Reconquista & DR, Day Trade, Treino Personalizado, Renda Extra, Criação de Ebooks, 
            Afiliado Pro, Controle Emocional, Nutrição e muito mais...
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Relacionamentos', 'Finanças', 'Saúde', 'Negócios', 'Educação'].map((tag, index) => (
              <span 
                key={index}
                className="bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgentCards;
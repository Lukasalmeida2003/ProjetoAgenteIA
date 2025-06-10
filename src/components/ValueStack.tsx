import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle2, 
  Video, 
  Instagram, 
  MessageSquareText, 
  Briefcase, 
  Brain, 
  BookHeart,
  Package,
  Shield,
  Users,
  RefreshCw,
  FileText,
  Sparkles
} from 'lucide-react';

const ValueStack: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const valueItems = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Acesso ao Painel com 15 Agentes Inteligentes",
      description: "Interface moderna e intuitiva para ativar qualquer agente com 1 clique"
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Organização visual moderna e fácil de usar",
      description: "Design profissional que torna a experiência simples e eficiente"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "PDF com instruções de uso simples (incluso no painel)",
      description: "Guia completo para você começar a usar imediatamente"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Atualizações futuras (varia conforme plano)",
      description: "Novos agentes e melhorias contínuas sem custo adicional"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Suporte via comunidade (nos planos PRO e MASTER)",
      description: "Acesso exclusivo à comunidade de usuários e suporte especializado"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Garantia incondicional de 7 dias",
      description: "Satisfação garantida ou seu dinheiro de volta, sem perguntas"
    }
  ];

  const featuredAgents = [
    { 
      icon: <Video className="h-5 w-5" />, 
      title: "Explosão no TikTok",
      gradient: "from-pink-500 to-red-500"
    },
    { 
      icon: <Instagram className="h-5 w-5" />, 
      title: "Conteúdo para Reels",
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      icon: <MessageSquareText className="h-5 w-5" />, 
      title: "Copy que Vende",
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      icon: <Briefcase className="h-5 w-5" />, 
      title: "Renda Extra e Negócios",
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      icon: <Brain className="h-5 w-5" />, 
      title: "Mindset e Foco",
      gradient: "from-orange-500 to-yellow-500"
    },
    { 
      icon: <BookHeart className="h-5 w-5" />, 
      title: "Fé Diária",
      gradient: "from-teal-500 to-green-500"
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

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,255,255,0.05)_0%,rgba(155,93,229,0.05)_100%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            O que você recebe ao acessar o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Painel Agentes.IA
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Um pacote completo com 15 agentes otimizados, criados para gerar resultado com 1 clique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Value items */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            {valueItems.map((item, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-start space-x-4 p-6 bg-background-light rounded-lg border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start mb-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <h3 className="font-semibold text-white group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Featured agents showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Bundle container */}
            <div className="bg-background-dark rounded-2xl p-8 border border-gray-800 shadow-2xl relative overflow-hidden">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full mb-4">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Kit Completo</h3>
                <p className="text-gray-400">Agentes em destaque inclusos</p>
              </div>

              {/* Featured agents grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featuredAgents.map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="bg-background-light rounded-lg p-4 border border-gray-700 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${agent.gradient} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {agent.icon}
                    </div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-primary transition-colors duration-300">
                      {agent.title}
                    </h4>
                  </motion.div>
                ))}
              </div>

              {/* Bundle info */}
              <div className="text-center">
                <div className="inline-flex items-center bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Sparkles className="h-4 w-4 mr-2" />
                  + 9 agentes adicionais
                </div>
                <p className="text-gray-400 text-sm">
                  Todos organizados em um painel intuitivo e fácil de usar
                </p>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary opacity-10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary opacity-10 rounded-full blur-xl"></div>
            </div>

            {/* Floating value indicators */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Valor: R$ 497
            </motion.div>

            <motion.div
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
              className="absolute -bottom-6 -right-8 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
            >
              Entrega imediata
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Não é apenas um produto digital — é uma{" "}
            <span className="text-primary font-semibold">transformação completa</span>{" "}
            na sua produtividade com IA
          </p>
          <motion.a
            href="#preços"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-gradient-to-r from-primary to-secondary text-background-dark font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Ver todos os planos
            <CheckCircle2 className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueStack;
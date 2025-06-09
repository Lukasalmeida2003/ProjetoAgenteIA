import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle2, 
  Package, 
  FileText, 
  RefreshCw, 
  Users, 
  Shield,
  Zap,
  Crown,
  Gift
} from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const benefits = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Acesso ao Painel com 15 Agentes Inteligentes",
      description: "Interface moderna e intuitiva com todos os agentes organizados por categoria"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Organização visual moderna e fácil de usar",
      description: "Design futurista com ativação em 1 clique para máxima produtividade"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "PDF com instruções de uso simples",
      description: "Guia completo para configurar e usar cada agente com eficiência máxima"
    },
    {
      icon: <RefreshCw className="h-8 w-8" />,
      title: "Atualizações futuras (conforme plano)",
      description: "Novos agentes e melhorias incluídas sem custo adicional"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Suporte via comunidade (PRO e MASTER)",
      description: "Acesso exclusivo à comunidade de usuários e suporte especializado"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Garantia incondicional de 7 dias",
      description: "Teste sem riscos com reembolso total garantido"
    }
  ];

  const featuredAgents = [
    { name: "TikTok", icon: "🎬", color: "from-pink-500 to-red-500" },
    { name: "Reels", icon: "📱", color: "from-purple-500 to-pink-500" },
    { name: "Copy que Vende", icon: "✍️", color: "from-accent to-yellow-400" },
    { name: "Mindset", icon: "🧠", color: "from-blue-500 to-cyan-500" },
    { name: "Fé Diária", icon: "🙏", color: "from-green-500 to-emerald-500" },
    { name: "Renda Extra", icon: "💰", color: "from-accent to-orange-500" }
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
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-dark to-background-light">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent opacity-5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            O que você recebe ao acessar o <span className="text-accent">Painel Agentes.IA</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Um pacote completo com 15 agentes otimizados, criados para gerar resultado com 1 clique.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Side - Benefits List */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                variants={item}
                className="flex items-start space-x-4 p-6 bg-background-light/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-accent/30 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Package Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Main Package Container */}
            <div className="relative bg-gradient-to-br from-background-light to-background-dark rounded-2xl border border-accent/30 p-8 shadow-2xl">
              {/* Package Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-background-dark" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Painel Completo</h3>
                <p className="text-gray-400">Bundle digital entregue</p>
              </div>

              {/* Featured Agents Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {featuredAgents.map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`bg-gradient-to-r ${agent.color} p-4 rounded-lg text-white text-center relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="text-2xl mb-2">{agent.icon}</div>
                      <div className="text-sm font-semibold">{agent.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Package Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">15</div>
                  <div className="text-xs text-gray-400">Agentes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">1</div>
                  <div className="text-xs text-gray-400">Clique</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">∞</div>
                  <div className="text-xs text-gray-400">Resultados</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-accent text-background-dark p-3 rounded-lg shadow-lg"
            >
              <Crown className="w-6 h-6" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-primary text-background-dark p-3 rounded-lg shadow-lg"
            >
              <Zap className="w-6 h-6" />
            </motion.div>

            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold mb-4">
              Tudo isso por apenas <span className="text-accent">R$ 37,00</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Investimento único. Sem mensalidades. Acesso imediato.
            </p>
            <motion.a
              href="#preços"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-background-dark font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 transition-all duration-300 inline-flex items-center text-lg"
            >
              Ver Planos Completos
              <CheckCircle2 className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Heart, 
  Video, 
  Instagram, 
  MessageSquareText, 
  GraduationCap, 
  LineChart, 
  Dumbbell, 
  Rocket, 
  Brain, 
  BookOpen, 
  Share2, 
  Briefcase, 
  Smile, 
  Apple, 
  BookHeart 
} from 'lucide-react';

interface Agent {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AgentCards: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const agents: Agent[] = [
    { 
      id: 1, 
      icon: <Heart className="h-6 w-6 text-primary" />, 
      title: "Reconquista & DR", 
      description: "Recupere o controle no relacionamento com mensagens certas, técnicas de reconquista e conversas bem conduzidas." 
    },
    { 
      id: 2, 
      icon: <Video className="h-6 w-6 text-primary" />, 
      title: "Explosão no TikTok", 
      description: "Roteiros virais, ganchos certeiros e ideias de vídeos com potencial real de viralizar." 
    },
    { 
      id: 3, 
      icon: <Instagram className="h-6 w-6 text-primary" />, 
      title: "Conteúdo para Instagram/Reels", 
      description: "Ideias, copy e legendas pra atrair seguidores reais e aumentar seu alcance diariamente." 
    },
    { 
      id: 4, 
      icon: <MessageSquareText className="h-6 w-6 text-primary" />, 
      title: "Copy que Vende", 
      description: "Crie textos, anúncios e títulos irresistíveis. Vendas com lógica, não sorte." 
    },
    { 
      id: 5, 
      icon: <GraduationCap className="h-6 w-6 text-primary" />, 
      title: "Concursos & ENEM Turbo", 
      description: "Plano de estudos, revisão guiada e simulado inteligente pra sua prova." 
    },
    { 
      id: 6, 
      icon: <LineChart className="h-6 w-6 text-primary" />, 
      title: "Day Trade & Price Action", 
      description: "Análises, gerenciamento de risco e plano tático de operação com IA." 
    },
    { 
      id: 7, 
      icon: <Dumbbell className="h-6 w-6 text-primary" />, 
      title: "Treino pra Ganho de Massa ou Definição", 
      description: "Montagem de treinos personalizados em casa ou academia com divisão profissional." 
    },
    { 
      id: 8, 
      icon: <Rocket className="h-6 w-6 text-primary" />, 
      title: "Renda Extra & Negócios Online", 
      description: "Comece no digital com ideias testadas, validação de nicho e planejamento básico." 
    },
    { 
      id: 9, 
      icon: <Brain className="h-6 w-6 text-primary" />, 
      title: "Foco e Produtividade", 
      description: "Crie uma rotina produtiva com planejamento, metas e gatilhos mentais." 
    },
    { 
      id: 10, 
      icon: <BookOpen className="h-6 w-6 text-primary" />, 
      title: "Criação de Ebooks & Infoprodutos", 
      description: "Monte, organize e escreva seu produto digital com um roteiro automatizado." 
    },
    { 
      id: 11, 
      icon: <Share2 className="h-6 w-6 text-primary" />, 
      title: "Afiliado Pro", 
      description: "Construa funis, copy, páginas e conteúdos que geram cliques e conversão." 
    },
    { 
      id: 12, 
      icon: <Briefcase className="h-6 w-6 text-primary" />, 
      title: "LinkedIn & Marca Pessoal", 
      description: "Posicione-se como autoridade no LinkedIn com headline, bio e conteúdos prontos." 
    },
    { 
      id: 13, 
      icon: <Smile className="h-6 w-6 text-primary" />, 
      title: "Mindset & Controle Emocional", 
      description: "Respostas terapêuticas, reforço positivo e estratégias pra lidar com crises emocionais." 
    },
    { 
      id: 14, 
      icon: <Apple className="h-6 w-6 text-primary" />, 
      title: "Nutrição Sem Gourmetização", 
      description: "Planeje refeições realistas para emagrecer ou manter saúde com praticidade." 
    },
    { 
      id: 15, 
      icon: <BookHeart className="h-6 w-6 text-primary" />, 
      title: "Fé Diária & Devocional", 
      description: "Tenha um momento diário com Deus: oração, versículo e propósito em 5 minutos." 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-24 relative" id="agentes">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Você Vai <span className="text-primary">Receber</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            15 agentes especialistas prontos para transformar o ChatGPT em profissionais para diferentes áreas da sua vida
          </p>
        </div>

        <motion.div 
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {agents.map((agent) => (
            <motion.div 
              key={agent.id}
              variants={item}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 255, 255, 0.1), 0 10px 10px -5px rgba(0, 255, 255, 0.04)"
              }}
              className="bg-background-light rounded-lg p-6 border border-gray-800 hover:border-primary transition-all duration-300 cursor-pointer group"
            >
              <div className="mb-4 bg-background-dark p-3 rounded-lg inline-block group-hover:bg-primary transition-colors duration-300">
                {agent.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {agent.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {agent.description}
              </p>
              <a 
                href="#preços"
                className="w-full py-2 px-4 bg-background-dark border border-primary text-primary rounded-lg hover:bg-primary hover:text-background-dark transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Ativar no ChatGPT</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgentCards;
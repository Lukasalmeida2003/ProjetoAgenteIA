import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, Star, Crown, Zap } from 'lucide-react';

const PricingCard: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const plans = [
    {
      name: "Essencial",
      price: "17",
      description: "Perfeito para começar",
      icon: <Zap className="h-6 w-6" />,
      features: [
        "5 Agentes Especializados",
        "Ativação com 1 clique",
        "Suporte por email",
        "Compatível com ChatGPT 3.5",
        "Guia de instalação",
        "Atualizações por 3 meses"
      ],
      popular: false,
      link: "https://go.disruptybr.shop/escbpcnlgw"
    },
    {
      name: "Profissional",
      price: "47",
      description: "Mais popular entre usuários",
      icon: <Star className="h-6 w-6" />,
      features: [
        "15 Agentes Especializados",
        "Ativação com 1 clique",
        "Suporte prioritário",
        "Compatível com ChatGPT 3.5 e GPT-4",
        "Integrações com outras IAs",
        "Atualizações por 6 meses",
        "Templates personalizáveis",
        "Comunidade exclusiva"
      ],
      popular: true,
      link: "https://go.disruptybr.shop/escbpcnlgw"
    },
    {
      name: "Premium",
      price: "97",
      description: "Para máxima produtividade",
      icon: <Crown className="h-6 w-6" />,
      features: [
        "25 Agentes Especializados",
        "Ativação com 1 clique",
        "Suporte VIP 24/7",
        "Compatível com todas as IAs",
        "Agentes personalizados sob demanda",
        "Atualizações vitalícias",
        "Consultoria 1:1 (1 hora)",
        "Acesso antecipado a novos agentes",
        "Certificado de conclusão"
      ],
      popular: false,
      link: "https://go.disruptybr.shop/escbpcnlgw"
    }
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="preços">
      <div className="absolute bottom-0 right-0 w-1/3 h-2/3 bg-primary opacity-5 blur-[150px] rounded-full"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforme seu ChatGPT em uma equipe completa de especialistas
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`relative rounded-xl overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-primary/20 to-background-dark border-2 border-primary' 
                  : 'bg-background-light border border-gray-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-secondary text-background-dark text-center py-2 text-sm font-semibold">
                  MAIS POPULAR
                </div>
              )}
              
              <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg mr-3 ${
                    plan.popular 
                      ? 'bg-primary text-background-dark' 
                      : 'bg-background-dark text-primary'
                  }`}>
                    {plan.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-1">
                    R$ <span className="text-primary">{plan.price}</span>
                    <span className="text-gray-400 text-lg ml-1">única vez</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Equivalente a R${(parseFloat(plan.price) / 30).toFixed(2)} por dia
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-secondary text-background-dark hover:shadow-lg hover:shadow-primary/25'
                      : 'bg-background-dark border border-primary text-primary hover:bg-primary hover:text-background-dark'
                  }`}
                >
                  Escolher {plan.name}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
                
                <p className="text-center text-gray-400 text-xs mt-4">
                  Pagamento único. Sem assinatura. Garantia de 7 dias.
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
            Não tem certeza qual plano escolher?
          </p>
          <a 
            href="#faq" 
            className="text-primary hover:underline font-semibold"
          >
            Veja as perguntas frequentes
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
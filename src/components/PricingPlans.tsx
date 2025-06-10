import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, ArrowRight, Crown, Zap, Star } from 'lucide-react';

const PricingPlans: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const plans = [
    {
      name: "START",
      price: "17",
      popular: false,
      features: [
        "5 agentes essenciais",
        "PDF com instruções",
        "30 dias de acesso",
        "Sem comunidade",
        "Sem atualizações",
        "Garantia de 7 dias"
      ],
      buttonText: "Começar com START",
      buttonColor: "bg-gray-600 hover:bg-gray-500",
      buttonLink: "https://painelagentes.ia/start",
      icon: <Zap className="w-6 h-6" />
    },
    {
      name: "PRO",
      price: "47",
      popular: true,
      features: [
        "15 agentes completos",
        "PDF + Guia de prompts",
        "Comunidade inclusa",
        "Atualizações por 12 meses",
        "Garantia de 7 dias",
        "Suporte prioritário"
      ],
      buttonText: "Quero o PRO completo",
      buttonColor: "bg-accent hover:bg-accent/90",
      buttonLink: "https://painelagentes.ia/pro",
      icon: <Star className="w-6 h-6" />
    },
    {
      name: "MASTER",
      price: "97",
      popular: false,
      features: [
        "Tudo do PRO",
        "Acesso vitalício",
        "Prioridade em novos agentes",
        "Garantia de 7 dias",
        "Suporte VIP",
        "Agentes exclusivos"
      ],
      buttonText: "Sou MASTER. Acesso vitalício",
      buttonColor: "bg-gradient-to-r from-primary to-accent hover:opacity-90",
      buttonLink: "https://painelagentes.ia/master",
      icon: <Crown className="w-6 h-6" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-gradient-to-b from-background-light to-background-dark" id="preços">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/2 w-96 h-96 bg-primary opacity-10 rounded-full blur-[120px] -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Escolha seu plano e <span className="text-accent">comece agora</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Transforme seu ChatGPT em uma equipe de especialistas. Escolha o plano ideal para você.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`relative bg-gradient-to-br from-background-light to-background-dark rounded-2xl border-2 p-8 transition-all duration-300 ${
                plan.popular 
                  ? 'border-accent shadow-2xl shadow-accent/20 scale-105' 
                  : 'border-gray-800 hover:border-gray-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-background-dark px-6 py-2 rounded-full text-sm font-bold">
                  Mais escolhido
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                  plan.popular ? 'bg-accent text-background-dark' : 'bg-background-dark text-gray-400'
                }`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">
                  R$ <span className={plan.popular ? 'text-accent' : 'text-white'}>{plan.price}</span>
                </div>
                <p className="text-gray-400 text-sm">Pagamento único</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-accent' : 'text-primary'
                    }`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={plan.buttonLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold text-center flex items-center justify-center transition-all duration-300 ${
                  plan.buttonColor
                } ${plan.popular ? 'text-background-dark' : 'text-white'}`}
              >
                {plan.buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.a>

              <p className="text-center text-gray-400 text-xs mt-4">
                Garantia de satisfação de 7 dias
              </p>

              {plan.popular && (
                <div className="absolute -inset-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50 -z-10"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-background-light/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-2">
              <strong>Pagamento único.</strong> Sem assinatura. Sem mensalidades.
            </p>
            <p className="text-gray-400 text-sm">
              Todos os planos incluem garantia incondicional de 7 dias. Não gostou? Devolvemos 100% do seu dinheiro.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPlans;

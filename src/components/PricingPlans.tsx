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
          initial="

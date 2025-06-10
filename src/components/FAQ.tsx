import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "Como funcionam os agentes inteligentes?",
      answer: "Os agentes inteligentes são prompts especializados que transformam o ChatGPT em diferentes especialistas. Eles são ativados com apenas um clique e instruem a IA a responder como um profissional naquela área específica, fornecendo respostas mais precisas e úteis."
    },
    {
      question: "Preciso ter assinatura do ChatGPT Plus para usar?",
      answer: "Não, os agentes funcionam com a versão gratuita do ChatGPT (3.5). No entanto, para melhores resultados e acesso a todos os recursos, recomendamos o uso com o ChatGPT Plus (GPT-4)."
    },
    {
      question: "Posso personalizar os agentes?",
      answer: "Sim! Todos os agentes podem ser personalizados de acordo com suas necessidades específicas. O pacote Premium inclui recursos avançados de personalização e a criação de agentes totalmente novos."
    },
    {
      question: "Existe garantia de satisfação?",
      answer: "Sim, oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com os resultados, devolveremos seu investimento integralmente, sem perguntas."
    },
    {
      question: "Como recebo os agentes após a compra?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com acesso imediato à sua área de membros, onde poderá acessar todos os agentes e começar a usá-los imediatamente."
    },
    {
      question: "As atualizações são gratuitas?",
      answer: "Sim! O Pacote Essencial inclui atualizações gratuitas por 6 meses. O Pacote Premium inclui atualizações vitalícias, garantindo que seus agentes estejam sempre otimizados."
    }
  ];
  
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
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
    <section ref={ref} className="py-24 relative overflow-hidden" id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,255,255,0.03)_100%)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos agentes inteligentes
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="mb-4"
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full text-left p-6 rounded-lg flex justify-between items-center transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-background-light border-l-4 border-primary' 
                    : 'bg-background-dark hover:bg-background-light'
                }`}
              >
                <div className="flex items-center">
                  <HelpCircle className={`h-5 w-5 mr-3 ${
                    activeIndex === index ? 'text-primary' : 'text-gray-400'
                  }`} />
                  <span className="font-semibold">{item.question}</span>
                </div>
                <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${
                  activeIndex === index ? 'rotate-180 text-primary' : 'text-gray-400'
                }`} />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-2 text-gray-300 bg-background-light bg-opacity-50 rounded-b-lg">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300">
            Tem mais perguntas? <a href="#contato" className="text-primary hover:underline">Entre em contato</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
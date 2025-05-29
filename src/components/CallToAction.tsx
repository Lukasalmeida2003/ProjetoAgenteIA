import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Rocket } from 'lucide-react';

const CallToAction: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden" id="contato">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      <motion.div 
        className="absolute top-1/4 left-1/2 w-96 h-96 bg-secondary opacity-20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Você está a um clique de ter{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              15 especialistas
            </span>
            {" "}digitais prontos para trabalhar por você
          </h2>
          
          <p className="text-xl text-gray-300 mb-10">
            Transforme sua experiência com ChatGPT hoje mesmo e economize horas de pesquisa com respostas precisas e especializadas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <motion.a
              href="https://go.disruptybr.shop/escbpcnlgw"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-secondary text-background-dark font-semibold py-4 px-8 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center w-full sm:w-auto justify-center"
            >
              Ativar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
            
            <motion.a
              href="#benefícios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-primary text-white font-semibold py-4 px-8 rounded-lg hover:bg-primary/10 transition-all duration-300 w-full sm:w-auto"
            >
              Saiba Mais
            </motion.a>
          </div>
          
          <p className="mt-8 text-gray-400">
            Satisfação garantida ou seu dinheiro de volta em até 7 dias.
          </p>
        </motion.div>
      </div>
      
      <div className="mt-24 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <Rocket className="h-6 w-6 text-primary mr-2" />
              <span className="text-white font-bold">Agentes.IA</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Termos</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors duration-300">Suporte</a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Agentes.IA - Todos os direitos reservados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
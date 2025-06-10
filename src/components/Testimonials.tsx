import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      name: "Ricardo Almeida",
      role: "Empresário",
      content: "Os agentes transformaram a maneira como uso o ChatGPT. Cada resposta parece realmente vir de um especialista, e economizo horas todas as semanas. O agente de produtividade praticamente dobrou minha eficiência.",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mariana Costa",
      role: "Estudante de Medicina",
      content: "Como estudante de medicina, o agente de estudos tem sido incrível para me ajudar a memorizar conteúdos complexos. As técnicas sugeridas realmente funcionam e tenho visto melhora nas minhas notas.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Bruno Santos",
      role: "Desenvolvedor de Software",
      content: "O tutor de programação é simplesmente fantástico! As explicações são claras e os exemplos práticos. Consegui resolver problemas que estavam me travando há semanas. Vale cada centavo.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const next = () => {
    setDirection(1);
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setDirection(-1);
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [inView, current]);
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0
    })
  };
  
  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(155,93,229,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Que Nossos <span className="text-primary">Usuários</span> Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram seu uso do ChatGPT
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="bg-background-light p-8 md:p-10 rounded-lg border border-gray-800"
            >
              <Quote className="text-primary h-12 w-12 mb-6 opacity-50" />
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                "{testimonials[current].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[current].avatar} 
                  alt={testimonials[current].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary mr-4"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonials[current].name}</h4>
                  <p className="text-gray-400">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full ${
                  index === current ? 'bg-primary' : 'bg-gray-600'
                } transition-all duration-300`}
              />
            ))}
          </div>
          
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background-dark p-2 rounded-full text-gray-400 hover:text-primary hover:bg-background-light transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background-dark p-2 rounded-full text-gray-400 hover:text-primary hover:bg-background-light transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
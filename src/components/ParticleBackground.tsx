import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    function initParticles() {
      particles = [];
      const numParticles = Math.floor((canvas.width * canvas.height) / 15000);
      
      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 0.5;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: size,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          color: getRandomColor(0.2),
        });
      }
    }
    
    function getRandomColor(alpha: number) {
      const colors = [
        `rgba(0, 255, 255, ${alpha})`,
        `rgba(155, 93, 229, ${alpha})`,
        `rgba(255, 211, 105, ${alpha})`,
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Connect particles with lines
        connectParticles(particle, index);
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }
    
    function connectParticles(particle: Particle, index: number) {
      const connectionRadius = 100;
      
      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x;
        const dy = particle.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < connectionRadius) {
          const opacity = 1 - (distance / connectionRadius);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 255, 255, ${opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    }
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full floating opacity-60" />
      <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-accent rounded-full floating opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary-glow rounded-full floating opacity-50" style={{ animationDelay: '2s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text whitespace-nowrap truncate">
            Aadhithya Viswanathan
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-8">
            Frontend UI/UX Designer
          </div>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            To secure a position where I can apply my skills and grow within a supportive team.
          </p>
        </div>
        
        {/* Action buttons */}
        <div className={`flex flex-wrap justify-center gap-6 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button 
            className="neon-button text-lg px-8 py-6 rounded-full"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            className="glass text-lg px-8 py-6 rounded-full border-primary/50 hover:border-primary transition-colors"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>
        
        {/* Social links */}
        <div className={`flex justify-center gap-6 mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href="https://github.com/Aadhithya0104" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-primary/20 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" target="_blank" rel="noopener noreferrer" className="p-3 glass rounded-full hover:bg-primary/20 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:aadhithyaviswanathan@gmail.com" className="p-3 glass rounded-full hover:bg-primary/20 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className={`animate-bounce cursor-pointer transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onClick={() => scrollToSection('about')}
        >
          <ArrowDown className="w-8 h-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
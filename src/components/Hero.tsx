import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

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
      className="min-h-screen flex flex-col md:flex-row items-stretch justify-center bg-background px-0 md:px-0"
    >
      {/* Left: Text Content, responsive */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-8 md:px-16 py-10 md:py-20 bg-black"
        style={{ minHeight: '320px' }}
      >
        <div className="max-w-xl mx-auto md:mx-0">
          <p className="text-xl sm:text-2xl text-white mb-3 font-semibold">Hi, I am</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 text-white break-words">Aadhithya Viswanathan</h1>
          <div className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-8 font-bold">Frontend UI/UX Designer</div>
          <div className="flex gap-3 sm:gap-4 mb-8 flex-wrap">
            <a href="mailto:aadhithyaviswanathan@gmail.com" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="Email">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-700" />
            </a>
            <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-700" />
            </a>
            <a href="https://github.com/Aadhithya0104" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="GitHub">
              <Github className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-700" />
            </a>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <Button
              className="neon-button text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              className="glass text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-5 rounded-full border-primary/50 hover:border-primary transition-colors font-bold"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          {/* Navigation buttons for About, Projects, Contact */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 justify-center">
            <Button className="w-28 sm:w-36" onClick={() => navigate('/about')}>About</Button>
            <Button className="w-28 sm:w-36" onClick={() => navigate('/projects')}>Projects</Button>
            <Button className="w-28 sm:w-36" onClick={() => navigate('/contact')}>Contact</Button>
          </div>
        </div>
      </div>
      {/* Right: Full-bleed Photo, no border/shadow, blends with black background */}
      <div
        className="w-full md:w-1/2 relative min-h-[320px] md:min-h-[400px] bg-black flex items-center justify-center overflow-hidden"
        style={{}}
      >
        <img
          src="/02.jpg"
          alt="Aadhithya Viswanathan"
          className="w-auto h-auto max-w-full max-h-[700px] object-contain mx-auto mt-8 md:mt-12 mb-4"
          style={{ background: "#000" }}
          draggable={false}
        />
      </div>
    </section>
  );
};

export default Hero;
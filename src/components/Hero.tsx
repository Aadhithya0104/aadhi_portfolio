import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

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
      className="min-h-screen flex items-stretch justify-center bg-background px-0 md:px-0"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[1400px] mx-auto min-h-screen relative">
        {/* Left: Text Content, no diagonal */}
        <div
          className="flex-1 flex flex-col justify-center px-6 md:px-16 py-20"
          style={{
            minHeight: '400px',
            background: '#000',
          }}
        >
          <div className="max-w-xl">
            <p className="text-2xl text-white mb-4 font-semibold">Hi, I am</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">Aadhithya Viswanathan</h1>
            <div className="text-3xl text-gray-200 mb-10 font-bold">Frontend UI/UX Designer</div>
            <div className="flex gap-4 mb-10">
              <a href="mailto:aadhithyaviswanathan@gmail.com" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="Email">
                <Mail className="w-7 h-7 text-neutral-700" />
              </a>
              <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="LinkedIn">
                <Linkedin className="w-7 h-7 text-neutral-700" />
              </a>
              <a href="https://github.com/Aadhithya0104" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded shadow hover:scale-105 transition" aria-label="GitHub">
                <Github className="w-7 h-7 text-neutral-700" />
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              <Button
                className="neon-button text-xl px-10 py-5 rounded-full font-bold"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                className="glass text-xl px-10 py-5 rounded-full border-primary/50 hover:border-primary transition-colors font-bold"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
        {/* Right: Full-bleed Photo, no diagonal */}
        <div
          className="flex-1 relative min-h-[400px] bg-black flex items-center justify-center overflow-hidden"
          style={{}}
        >
          <img
            src="/02.jpg"
            alt="Aadhithya Viswanathan"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ minHeight: '400px' }}
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
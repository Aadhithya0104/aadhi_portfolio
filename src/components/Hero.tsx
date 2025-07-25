import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import "../index.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const [waveAnim, setWaveAnim] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (waveAnim) {
      const timer = setTimeout(() => setWaveAnim(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [waveAnim]);

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
          <div className={`flex gap-3 sm:gap-4 mb-8 flex-wrap ${waveAnim ? 'sea-wave-anim' : ''}`}>
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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="chatbot-3d-btn text-base sm:text-xl px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold">
                  Chatbot
                </Button>
              </DialogTrigger>
              <DialogContent>
                <div className="text-lg font-semibold text-center">The chatbot is training and will be coming soon.</div>
              </DialogContent>
            </Dialog>
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
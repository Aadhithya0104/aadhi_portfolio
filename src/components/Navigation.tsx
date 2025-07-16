import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Phone, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const whatsappNumber = "8072660284";
  const whatsappMsg = encodeURIComponent("Hi Aadhithya this is (client name ) your profile was good can we schedule for a interview");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass backdrop-blur-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold gradient-text">
            Aadhi's Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors animated-underline"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="neon-button">Hire Me</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Contact Me</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                  <a href="mailto:aadhithyaviswanathan@gmail.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                    <Mail className="w-5 h-5 text-primary" /> aadhithyaviswanathan@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5 text-primary" /> LinkedIn
                  </a>
                  <a href="https://github.com/Aadhithya0104" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-primary" /> GitHub
                  </a>
                  <a href="tel:8072660284" className="flex items-center gap-2 hover:underline">
                    <Phone className="w-5 h-5 text-primary" /> 8072660284
                  </a>
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp
                  </a>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 glass rounded-lg">
            <div className="flex flex-col gap-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="neon-button mt-4"
                asChild
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <span>Hire Me</span>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Contact Me</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col gap-4 mt-4">
                      <a href="mailto:aadhithyaviswanathan@gmail.com" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        <Mail className="w-5 h-5 text-primary" /> aadhithyaviswanathan@gmail.com
                      </a>
                      <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 text-primary" /> LinkedIn
                      </a>
                      <a href="https://github.com/Aadhithya0104" className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 text-primary" /> GitHub
                      </a>
                      <a href="tel:8072660284" className="flex items-center gap-2 hover:underline">
                        <Phone className="w-5 h-5 text-primary" /> 8072660284
                      </a>
                      <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} className="flex items-center gap-2 hover:underline" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5 text-green-500" /> WhatsApp
                      </a>
                    </div>
                  </DialogContent>
                </Dialog>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
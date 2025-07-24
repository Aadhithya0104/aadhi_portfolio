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
      setIsScrolled(window.scrollY > 10);
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
      isScrolled ? 'glass shadow-lg border-b border-border/60' : 'glass border-b border-border/30'
    }`} style={{backdropFilter: 'blur(24px)'}}>
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-5 flex items-center justify-between h-[4.5rem]">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-tight" style={{letterSpacing: '-0.03em'}}>
          Aadhi's Resume
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-lg font-medium text-foreground/90 hover:text-primary transition-colors animated-underline px-2 py-1"
              style={{fontWeight: 500, letterSpacing: '-0.01em'}}
            >
              {item.name}
            </button>
          ))}
        </div>
        {/* CTA Button */}
        <div className="hidden md:block">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="neon-button shadow-none">Hire Me</Button>
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
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </Button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass rounded-b-xl shadow-lg border-t border-border/30">
          <div className="flex flex-col gap-2 p-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-lg text-foreground/90 hover:text-primary transition-colors py-2 text-left font-medium"
              >
                {item.name}
              </button>
            ))}
            <Button className="neon-button mt-4 shadow-none" asChild>
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
    </nav>
  );
};

export default Navigation;
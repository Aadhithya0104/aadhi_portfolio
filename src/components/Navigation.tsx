import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Phone, MessageCircle, User, Folder, Mail as MailIcon } from "lucide-react";
import EnvelopeAnimation from "@/components/ui/envelope-animation";

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
          Aadhi's Portfolio
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
              <EnvelopeAnimation />
            </DialogContent>
          </Dialog>
        </div>
        {/* Mobile: Hide menu button and menu */}
      </div>
      {/* Mobile Sidebar Navigation */}
      <div className="fixed left-0 top-0 bottom-0 h-full z-50 flex flex-col gap-4 bg-background/80 shadow-lg rounded-r-2xl border border-border/30 p-2 md:hidden justify-center items-center">
        <button onClick={() => scrollToSection('#about')} className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors p-2">
          <User className="w-6 h-6 mb-1" />
          <span className="text-xs">About</span>
        </button>
        <button onClick={() => scrollToSection('#projects')} className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors p-2">
          <Folder className="w-6 h-6 mb-1" />
          <span className="text-xs">Projects</span>
        </button>
        <button onClick={() => scrollToSection('#contact')} className="flex flex-col items-center text-foreground/80 hover:text-primary transition-colors p-2">
          <MailIcon className="w-6 h-6 mb-1" />
          <span className="text-xs">Contact</span>
        </button>
      </div>
      {/* Mobile Floating Hire Me Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="neon-button shadow-lg px-6 py-3 rounded-full text-base">Hire Me</Button>
          </DialogTrigger>
          <DialogContent>
            <EnvelopeAnimation />
          </DialogContent>
        </Dialog>
      </div>
    </nav>
  );
};

export default Navigation;
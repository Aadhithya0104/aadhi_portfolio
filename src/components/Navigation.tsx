import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Phone, MessageCircle, User, Folder, Mail as MailIcon } from "lucide-react";
import EnvelopeAnimation from "@/components/ui/envelope-animation";
import { NavLink } from "react-router-dom";

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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" }
  ];

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
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-lg font-medium px-2 py-1 transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                  isActive
                    ? "text-primary bg-primary/10 shadow-md"
                    : "text-foreground/90 hover:text-primary hover:bg-primary/10 hover:shadow-md"
                }`
              }
              style={{ fontWeight: 500, letterSpacing: '-0.01em' }}
            >
              {item.name}
            </NavLink>
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
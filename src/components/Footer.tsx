import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Aadhithya0104", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:aadhithyaviswanathan@gmail.com", label: "Email" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/20 border-t border-border/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Aadhi's Portfolio</h3>
            <p className="text-muted-foreground">
              Frontend UI/UX Designer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="p-3 glass rounded-full hover:bg-primary/20 transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground mb-2">
              © {currentYear} Aadhi's Portfolio. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="w-4 h-4 text-red-500" /> and lots of coffee
            </p>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <button
            onClick={scrollToTop}
            className="text-primary hover:text-primary-glow transition-colors animated-underline"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Erode, Tamil Nadu, India"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "8072660284"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "aadhithyaviswanathan@gmail.com"
    }
  ];

  return (
    <section id="contact" className="bg-background px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Contact Info */}
          <div className="space-y-10">
            <Card className="glass card-hover p-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                <p className="text-lg text-foreground/80 mb-8">I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="text-primary">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-lg">{item.title}</h4>
                        <p className="text-muted-foreground">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <h4 className="font-semibold mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    <a href="https://github.com/Aadhithya0104" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <span className="p-3 glass rounded-full hover:bg-primary/10 border border-border/30 transition-colors flex items-center justify-center">
                        <Github className="w-6 h-6" />
                      </span>
                    </a>
                    <a href="https://www.linkedin.com/in/aadhithya-viswanathan-0bb0a62b7/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <span className="p-3 glass rounded-full hover:bg-primary/10 border border-border/30 transition-colors flex items-center justify-center">
                        <Linkedin className="w-6 h-6" />
                      </span>
                    </a>
                    <a href="mailto:aadhithyaviswanathan@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                      <span className="p-3 glass rounded-full hover:bg-primary/10 border border-border/30 transition-colors flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Contact Form */}
          <Card className="glass card-hover p-0">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass border-border/40 focus:border-primary"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass border-border/40 focus:border-primary"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass border-border/40 focus:border-primary"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="glass border-border/40 focus:border-primary min-h-[120px]"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="neon-button w-full" 
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
};

export default Contact;
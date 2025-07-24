import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Play } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Harmony (NGO Website)",
      description: "Created and optimized a website for an NGO, improving organic traffic by 40%. The site provides information and resources to help underprivileged women and children through various programs and initiatives.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "web",
      tech: ["HTML", "CSS", "PHP"],
      demo: "https://harmony-net-project.vercel.app",
      featured: true
    }
  ];

  const categories = [
    { id: "all", name: "My Projects" },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="bg-background px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions</p>
        </div>
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={`transition-all duration-300 ${activeCategory === category.id ? "neon-button" : "glass hover:bg-primary/10"}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="card-hover glass border-border/40 overflow-hidden group p-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="neon-button">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-2 text-foreground">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-muted text-foreground border-border/40 text-base px-4 py-2 rounded-full font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="section-divider mt-20" />
      </div>
    </section>
  );
};

export default Projects;
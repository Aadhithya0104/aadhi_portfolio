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
      title: "Obstacles Avoidance and Trench Detection Rover (AI/IT project)",
      description: "Designed and developed an 'Obstacles Avoidance and Trench Detection Rover' using Arduino, IR sensors, and actuators. The rover is capable of moving and avoid obstacles and trenches more remotely, enhancing automation and situational awareness.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=400&fit=crop",
      category: "ai",
      tech: ["Arduino", "IR Sensors", "Actuators", "Automation"],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: 2,
      title: "E-commerce Website",
      description: "Built a fully functional e-commerce website that enables users to browse and purchase products, and manage orders, utilizing HTML, CSS and JS for dynamic back-end functionality.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      category: "web",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "",
      demo: "",
      featured: true
    },
    {
      id: 3,
      title: "Social Media Sentiment Analysis (Personal Project)",
      description: "Developed a Python-based tool to analyze and report social media sentiment, achieving a 35% growth in follower count and a 20% boost in online conversions within three months.",
      image: "https://images.unsplash.com/photo-1587560699334-bea93ff6d853?w=800&h=400&fit=crop",
      category: "data",
      tech: ["Python", "Data Analysis", "Social Media API"],
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 4,
      title: "SEO and Content Analysis Tool",
      description: "Conducted SEO research to identify trending keywords in the technology niche and built a tool to analyze and optimize content for better search engine ranking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      category: "seo",
      tech: ["SEO", "Content Analysis", "Keyword Research"],
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 5,
      title: "Harmony (NGO Website)",
      description: "Created and optimized a website for an NGO, improving organic traffic by 40%. The site provides information and resources to help underprivileged women and children through various programs and initiatives.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      category: "web",
      tech: ["HTML", "CSS", "PHP"],
      github: "",
      demo: "",
      featured: false
    },
    {
      id: 6,
      title: "Smart School Web Development (Internship)",
      description: "Worked as a web development intern to design and develop a scalable, user-centric web application for a smart school, using HTML, CSS, and PHP.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      category: "web",
      tech: ["HTML", "CSS", "PHP"],
      github: "",
      demo: "",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fullstack", name: "Full Stack" },
    { id: "frontend", name: "Frontend" },
    { id: "mobile", name: "Mobile" },
    { id: "iot", name: "IoT" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and innovative solutions
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={`transition-all duration-300 ${
                activeCategory === category.id 
                  ? "neon-button" 
                  : "glass hover:bg-primary/20"
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`card-hover glass border-border/50 overflow-hidden group ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-2">
                    <Button size="sm" className="neon-button">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                    <Button size="sm" variant="outline" className="glass">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-primary/20">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
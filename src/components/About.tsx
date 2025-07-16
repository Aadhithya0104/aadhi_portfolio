import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "Database Design", level: 80 }
  ];

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive, interactive web applications using modern frameworks like React and Vue.js"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust APIs and server-side applications with Node.js, Python, and cloud services"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that delight users and drive engagement"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality products on time"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            To secure a position where I can apply my skills and grow within a supportive team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Education
            </h3>
            <ul className="text-foreground/80 leading-relaxed list-disc list-inside">
              <li><b>BTech in Information Technology</b> (CGPA: 7.2), Government College of Engineering, Erode</li>
              <li><b>Diploma in Mechanical</b> (79%), Kongu Polytechnic College, Erode (July 2018 - June 2020)</li>
              <li><b>SSLC</b>, Jaycees Matric Higher Secondary School, Erode (Apr 2018)</li>
            </ul>
            <h3 className="text-2xl font-semibold text-foreground mt-6">
              Areas of Interest
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Digital Marketing", "Data Analysis", "Social Media Advertising"].map((area) => (
                <Badge key={area} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {area}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-foreground mt-6">
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-foreground/80">
              <li>Creativity & Problem-Solving</li>
              <li>User-Centered Design</li>
              <li>Wireframing & Prototyping</li>
              <li>Collaboration & Communication</li>
              <li>Attention to Detail</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {[{ name: "HTML", level: 95 }, { name: "CSS", level: 95 }, { name: "JavaScript", level: 90 }, { name: "React", level: 90 }, { name: "Figma", level: 85 }, { name: "UI/UX Design", level: 90 }].map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services */}
        {/* Removed services section for resume-based about */}
      </div>
    </section>
  );
};

export default About;
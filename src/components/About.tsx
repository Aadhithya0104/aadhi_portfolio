import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="bg-background px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">To secure a position where I can apply my skills and grow within a supportive team.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          {/* Bio */}
          <div className="space-y-10">
            <Card className="glass card-hover p-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Education</h3>
                <ul className="text-lg text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
                  <li><b>BTech in Information Technology</b> (CGPA: 7.2), Government College of Engineering, Erode</li>
                  <li><b>Diploma in Mechatronics</b> (79%), Kongu Polytechnic College, Erode (July 2018 - June 2020)</li>
                  <li><b>SSLC</b>, Jaycees Matric Higher Secondary School, Erode (Apr 2018)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="glass card-hover p-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Areas of Interest</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Digital Marketing", "Data Analysis", "Social Media Advertising"].map((area) => (
                    <Badge key={area} variant="secondary" className="bg-muted text-foreground border-border/40 text-base px-4 py-2 rounded-full font-medium">
                      {area}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-4 mt-8">Soft Skills</h3>
                <ul className="list-disc list-inside text-lg text-foreground/80 space-y-1">
                  <li>Creativity & Problem-Solving</li>
                  <li>User-Centered Design</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Collaboration & Communication</li>
                  <li>Attention to Detail</li>
                  <li>Project Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          {/* Skills */}
          <div className="space-y-10">
            <Card className="glass card-hover p-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {[{ name: "HTML", level: 95 }, { name: "CSS", level: 95 }, { name: "JavaScript", level: 90 }, { name: "React", level: 90 }, { name: "Figma", level: 85 }, { name: "UI/UX Design", level: 90 }].map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default About;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaFigma } from "react-icons/fa";
import { SiPython, SiGit, SiVercel, SiMysql, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";

const skillIcons = [
  { name: "HTML", icon: <FaHtml5 className="w-12 h-12 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="w-12 h-12 text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="w-12 h-12 text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="w-12 h-12 text-blue-500" /> },
  { name: "React", icon: <FaReact className="w-12 h-12 text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12 text-black dark:text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="w-12 h-12 text-cyan-400" /> },
  { name: "Figma", icon: <FaFigma className="w-12 h-12 text-pink-500" /> },
  { name: "SQL", icon: <SiMysql className="w-12 h-12 text-blue-700" /> },
  { name: "Python", icon: <SiPython className="w-12 h-12 text-yellow-500" /> },
  { name: "Git", icon: <SiGit className="w-12 h-12 text-red-500" /> },
  { name: "Vercel", icon: <SiVercel className="w-12 h-12 text-black dark:text-white" /> },
];

const About = () => {
  return (
    <section id="about" className="bg-background px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-medium">To secure a position where I can apply my skills and grow within a supportive team.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start mb-20">
          {/* Education */}
          <Card className="glass card-hover p-0 h-full flex flex-col justify-between">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Education</h3>
              <ul className="text-lg text-foreground/80 leading-relaxed list-disc list-inside space-y-2">
                <li><b>B.Tech in Information Technology</b> (CGPA: 7.2), Government College of Engineering, Erode(2025)</li>
                <li><b>Diploma in Mechatronics</b> (79%), Kongu Polytechnic College, Erode (July 2018 - June 2020)</li>
                <li><b>SSLC</b>, Jaycees Matric Higher Secondary School, Erode (Apr 2018)</li>
              </ul>
            </CardContent>
          </Card>
          {/* Areas of Interest */}
          <Card className="glass card-hover p-0 h-full flex flex-col justify-between">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-4">Area of Interest</h3>
              <div className="flex flex-wrap gap-3 mb-2">
                {["Frontend Development", "UI/UX Design", "Design Tools", "Wireframing & Prototyping", "Analytics & Data Skills"].map((area) => (
                  <Badge key={area} variant="secondary" className="bg-muted text-foreground border-border/40 text-base px-4 py-2 rounded-full font-medium">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          {/* Soft Skills */}
          <Card className="glass card-hover p-0 h-full flex flex-col justify-between">
            <CardContent className="p-8 flex flex-col h-full">
              <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {["Creativity & Problem-Solving",  "Time Management", "Collaboration & Communication", "Attention to Detail", "Project Management"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-muted text-foreground border-border/40 text-base px-4 py-2 rounded-full font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Technical Skills */}
        <div className="max-w-3xl mx-auto mb-20">
          <Card className="glass card-hover p-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
              <div className="flex flex-wrap gap-6 items-center justify-start">
                {skillIcons.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center w-20">
                    {skill.icon}
                    <span className="text-sm text-foreground/80 text-center mt-2">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default About;
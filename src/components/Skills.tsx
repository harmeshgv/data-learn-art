import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "R", level: 75 },
        { name: "JavaScript", level: 70 },
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 80 },
        { name: "Data Analysis", level: 90 },
        { name: "Statistical Modeling", level: 85 },
        { name: "Feature Engineering", level: 80 },
      ]
    },
    {
      title: "Tools & Frameworks",
      icon: Zap,
      skills: [
        { name: "TensorFlow", level: 80 },
        { name: "PyTorch", level: 75 },
        { name: "Pandas", level: 90 },
        { name: "Scikit-learn", level: 85 },
        { name: "Jupyter", level: 90 },
      ]
    },
    {
      title: "Databases & Cloud",
      icon: Database,
      skills: [
        { name: "MySQL", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "AWS", level: 65 },
        { name: "Docker", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
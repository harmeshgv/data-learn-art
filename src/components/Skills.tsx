import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Zap, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "bg-blue-500" },
        { name: "Java", level: 85, color: "bg-orange-500" },
        { name: "SQL", level: 90, color: "bg-green-500" },
        { name: "R", level: 80, color: "bg-purple-500" },
        { name: "JavaScript", level: 75, color: "bg-yellow-500" },
        { name: "C++", level: 70, color: "bg-red-500" },
      ]
    },
    {
      title: "Data Science & ML",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 90, color: "bg-indigo-500" },
        { name: "Deep Learning", level: 85, color: "bg-purple-600" },
        { name: "Data Analysis", level: 95, color: "bg-blue-600" },
        { name: "Statistical Modeling", level: 88, color: "bg-green-600" },
        { name: "Feature Engineering", level: 85, color: "bg-orange-600" },
        { name: "Computer Vision", level: 80, color: "bg-pink-500" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Zap,
      skills: [
        { name: "TensorFlow", level: 85, color: "bg-orange-500" },
        { name: "PyTorch", level: 80, color: "bg-red-500" },
        { name: "Pandas", level: 95, color: "bg-blue-500" },
        { name: "Scikit-learn", level: 90, color: "bg-green-500" },
        { name: "NumPy", level: 90, color: "bg-indigo-500" },
        { name: "React", level: 75, color: "bg-cyan-500" },
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, color: "bg-blue-600" },
        { name: "PostgreSQL", level: 80, color: "bg-blue-700" },
        { name: "MongoDB", level: 75, color: "bg-green-600" },
        { name: "Redis", level: 70, color: "bg-red-500" },
        { name: "Elasticsearch", level: 65, color: "bg-yellow-600" },
        { name: "Apache Spark", level: 70, color: "bg-orange-600" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 75, color: "bg-orange-500" },
        { name: "Docker", level: 80, color: "bg-blue-500" },
        { name: "Kubernetes", level: 65, color: "bg-blue-600" },
        { name: "Git/GitHub", level: 90, color: "bg-gray-700" },
        { name: "CI/CD", level: 70, color: "bg-green-500" },
        { name: "Google Cloud", level: 70, color: "bg-blue-400" },
      ]
    },
    {
      title: "Tools & Software",
      icon: Wrench,
      skills: [
        { name: "Jupyter", level: 95, color: "bg-orange-500" },
        { name: "Tableau", level: 85, color: "bg-blue-500" },
        { name: "Power BI", level: 80, color: "bg-yellow-500" },
        { name: "VS Code", level: 90, color: "bg-blue-600" },
        { name: "Apache Airflow", level: 70, color: "bg-green-600" },
        { name: "MLflow", level: 75, color: "bg-purple-500" },
      ]
    }
  ];

  const topSkills = [
    "Python", "Machine Learning", "Data Analysis", "TensorFlow", "SQL", 
    "Deep Learning", "Pandas", "AWS", "Git/GitHub", "Jupyter"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        {/* Top Skills Highlight */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-xl font-semibold text-center mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm bg-gradient-primary text-primary-foreground border-primary/20 hover:shadow-glow transition-all duration-300"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 h-full">
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
                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${skill.color} opacity-80`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
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
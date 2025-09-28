import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "TechCorp Solutions",
      location: "Bangalore, India",
      duration: "Jun 2024 - Aug 2024",
      type: "Internship",
      description: "Developed machine learning models for customer behavior analysis, achieving 92% accuracy in churn prediction.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "SQL"],
      link: "https://techcorp.com"
    },
    {
      title: "AI Research Assistant",
      company: "University Research Lab",
      location: "Remote",
      duration: "Jan 2024 - May 2024",
      type: "Research",
      description: "Collaborated on deep learning research for natural language processing, published findings in conference paper.",
      technologies: ["PyTorch", "Transformers", "BERT", "Python", "Git"],
      link: null
    },
    {
      title: "Freelance Data Analyst",
      company: "Multiple Clients",
      location: "Remote",
      duration: "Sep 2023 - Present",
      type: "Freelance",
      description: "Provide data analysis services to small businesses, creating automated reporting dashboards and insights.",
      technologies: ["Python", "Tableau", "Power BI", "Excel", "SQL"],
      link: null
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-primary/10 text-primary";
      case "Research": return "bg-accent/10 text-accent-foreground";
      case "Freelance": return "bg-secondary/10 text-secondary-foreground";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <Badge variant="outline" className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mb-2">
                      <span className="font-medium text-foreground">{exp.company}</span>
                      {exp.link && (
                        <a 
                          href={exp.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
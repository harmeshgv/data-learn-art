import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, Medal, Calendar, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Best Final Year Project",
      issuer: "Department of Computer Science",
      date: "2024",
      type: "Academic",
      description: "Awarded for developing an innovative ML-based predictive analytics system.",
      icon: Trophy,
      link: null,
      color: "text-yellow-500"
    },
    {
      title: "Data Science Certification",
      issuer: "Coursera - IBM",
      date: "2024",
      type: "Certification",
      description: "Completed comprehensive data science professional certificate program.",
      icon: Award,
      link: "https://coursera.org/verify/certificate",
      color: "text-blue-500"
    },
    {
      title: "Hackathon Winner - AI Category",
      issuer: "TechFest 2024",
      date: "2024",
      type: "Competition",
      description: "1st place for developing an AI-powered solution for smart city management.",
      icon: Medal,
      link: "https://techfest2024.com",
      color: "text-purple-500"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Stanford Online",
      date: "2023",
      type: "Certification",
      description: "Andrew Ng's Machine Learning course with distinction.",
      icon: Star,
      link: "https://coursera.org/verify/specialization",
      color: "text-green-500"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      date: "2023",
      type: "Certification",
      description: "Professional certification for cloud-based data engineering solutions.",
      icon: Award,
      link: "https://cloud.google.com/certification",
      color: "text-blue-600"
    },
    {
      title: "Research Paper Publication",
      issuer: "IEEE Conference",
      date: "2023",
      type: "Publication",
      description: "Co-authored paper on 'Deep Learning Approaches for Time Series Prediction'.",
      icon: Star,
      link: "https://ieeexplore.ieee.org",
      color: "text-indigo-500"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
      case "Certification": return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
      case "Competition": return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
      case "Publication": return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/20 dark:text-indigo-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
    }
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Achievements & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <achievement.icon className={`h-8 w-8 ${achievement.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors leading-tight">
                        {achievement.title}
                      </h3>
                      {achievement.link && (
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors flex-shrink-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className={getTypeColor(achievement.type)}>
                        {achievement.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {achievement.issuer}
                </p>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Code, Brain, Database } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">
              Computer Science Engineering Student
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a final year Computer Science Engineering student with a deep passion for 
              Data Science and Machine Learning. Currently pursuing my degree while building 
              practical experience in AI technologies, data analysis, and software development.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My journey in technology has led me to specialize in machine learning algorithms, 
              data visualization, and building intelligent systems. I enjoy solving complex 
              problems and turning data into meaningful insights.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary">Python</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary">Machine Learning</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary">Data Science</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary">Deep Learning</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary">TensorFlow</Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary">PyTorch</Badge>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.Tech Computer Science Engineering<br />
                    Final Year Student<br />
                    Specialization: Data Science & ML
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Code className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Programming</h4>
                  <p className="text-sm text-muted-foreground">
                    Python, R, SQL, Java<br />
                    Web Development<br />
                    Algorithm Design
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">AI & ML</h4>
                  <p className="text-sm text-muted-foreground">
                    Machine Learning Algorithms<br />
                    Deep Learning & Neural Networks<br />
                    Natural Language Processing
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
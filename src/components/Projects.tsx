import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Brain, BarChart, Image, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for predicting sales trends using machine learning algorithms. Built with Python, scikit-learn, and Streamlit.",
      icon: BarChart,
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Plotly"],
      github: "https://github.com/harmeshgv/predictive-analytics",
      demo: "https://predictive-analytics-demo.streamlit.app",
      category: "Data Science"
    },
    {
      title: "Neural Network Image Classifier",
      description: "Deep learning model for image classification with 95% accuracy. Implemented using TensorFlow and deployed with FastAPI.",
      icon: Image,
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenCV", "NumPy"],
      github: "https://github.com/harmeshgv/image-classifier",
      demo: "https://image-classifier-demo.herokuapp.com",
      category: "Deep Learning"
    },
    {
      title: "Sentiment Analysis Tool",
      description: "NLP-powered sentiment analysis tool for social media data. Processes thousands of tweets to extract emotional insights.",
      icon: MessageSquare,
      technologies: ["Python", "NLTK", "SpaCy", "Flask", "MongoDB"],
      github: "https://github.com/harmeshgv/sentiment-analysis",
      demo: "https://sentiment-analyzer-demo.netlify.app",
      category: "NLP"
    },
    {
      title: "ML Algorithm Visualizer",
      description: "Interactive web application to visualize how different machine learning algorithms work with real-time parameter adjustments.",
      icon: Brain,
      technologies: ["React", "D3.js", "Python", "Flask", "Scikit-learn"],
      github: "https://github.com/harmeshgv/ml-visualizer",
      demo: "https://ml-algorithm-visualizer.netlify.app",
      category: "Educational"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <project.icon className="h-8 w-8 text-primary" />
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/projects">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
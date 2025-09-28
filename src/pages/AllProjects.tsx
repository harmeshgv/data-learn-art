import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllProjects = () => {
  const navigate = useNavigate();

  const allProjects = [
    {
      title: "Predictive Analytics Dashboard",
      description: "A comprehensive dashboard for predicting sales trends using machine learning algorithms. Built with Python, scikit-learn, and Streamlit. This project demonstrates end-to-end data science workflow from data preprocessing to model deployment.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Plotly", "Docker"],
      github: "https://github.com/harmeshgv/predictive-analytics",
      demo: "https://predictive-analytics-demo.streamlit.app",
      category: "Data Science",
      date: "2024",
      contributors: "Solo Project",
      stars: 45
    },
    {
      title: "Neural Network Image Classifier",
      description: "Deep learning model for image classification with 95% accuracy. Implemented using TensorFlow and deployed with FastAPI. Features include data augmentation, transfer learning, and real-time inference capabilities.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "TensorFlow", "FastAPI", "OpenCV", "NumPy", "Docker", "AWS"],
      github: "https://github.com/harmeshgv/image-classifier",
      demo: "https://image-classifier-demo.herokuapp.com",
      category: "Deep Learning",
      date: "2024",
      contributors: "2 Contributors",
      stars: 38
    },
    {
      title: "Sentiment Analysis Tool",
      description: "NLP-powered sentiment analysis tool for social media data. Processes thousands of tweets to extract emotional insights. Includes real-time data streaming, sentiment visualization, and trend analysis.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "NLTK", "SpaCy", "Flask", "MongoDB", "Redis", "Chart.js"],
      github: "https://github.com/harmeshgv/sentiment-analysis",
      demo: "https://sentiment-analyzer-demo.netlify.app",
      category: "NLP",
      date: "2023",
      contributors: "Solo Project",
      stars: 52
    },
    {
      title: "ML Algorithm Visualizer",
      description: "Interactive web application to visualize how different machine learning algorithms work with real-time parameter adjustments. Educational tool for understanding ML concepts through visual representations.",
      image: "/api/placeholder/400/200",
      technologies: ["React", "D3.js", "Python", "Flask", "Scikit-learn", "TypeScript"],
      github: "https://github.com/harmeshgv/ml-visualizer",
      demo: "https://ml-algorithm-visualizer.netlify.app",
      category: "Educational",
      date: "2023",
      contributors: "3 Contributors",
      stars: 67
    },
    {
      title: "Real-time Chat Analytics",
      description: "Advanced analytics platform for chat applications with real-time message processing, sentiment tracking, and user behavior analysis. Built with microservices architecture for scalability.",
      image: "/api/placeholder/400/200",
      technologies: ["Node.js", "Python", "Kafka", "Redis", "PostgreSQL", "React", "Socket.io"],
      github: "https://github.com/harmeshgv/chat-analytics",
      demo: "https://chat-analytics-demo.vercel.app",
      category: "Full Stack",
      date: "2023",
      contributors: "4 Contributors",
      stars: 29
    },
    {
      title: "Time Series Forecasting API",
      description: "RESTful API for time series forecasting using various ML models. Supports multiple forecasting algorithms, automatic model selection, and batch processing capabilities.",
      image: "/api/placeholder/400/200",
      technologies: ["Python", "FastAPI", "Prophet", "ARIMA", "PostgreSQL", "Docker", "Kubernetes"],
      github: "https://github.com/harmeshgv/timeseries-api",
      demo: "https://timeseries-api-docs.herokuapp.com",
      category: "API",
      date: "2022",
      contributors: "Solo Project",
      stars: 34
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              All Projects
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Explore my complete portfolio of data science, machine learning, and software development projects. 
            Each project demonstrates different aspects of my technical skills and problem-solving abilities.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-8">
          {allProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-glow transition-all duration-300 group">
              <div className="md:flex">
                {/* Project Image */}
                <div className="md:w-96 md:flex-shrink-0">
                  <div className="h-48 md:h-full w-full bg-gradient-secondary rounded-t-lg md:rounded-l-lg md:rounded-t-none flex items-center justify-center">
                    <div className="text-muted-foreground text-center p-4">
                      <div className="w-16 h-16 bg-primary/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                        <span className="text-2xl">📊</span>
                      </div>
                      <p className="text-sm">Click to add project image</p>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex-1">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {project.title}
                          </CardTitle>
                          <Badge variant="outline" className="bg-primary/10 text-primary">
                            {project.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{project.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            <span>{project.contributors}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4" />
                            <span>{project.stars}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs bg-secondary/50">
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
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/harmeshgv" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
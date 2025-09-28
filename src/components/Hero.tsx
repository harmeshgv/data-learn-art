import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Harmesh G V
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science Engineering Student
          </p>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Specializing in Data Science & Machine Learning | Final Year | 
            Passionate about AI and building innovative solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild size="lg" className="shadow-glow">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="icon" asChild className="hover:shadow-glow transition-all">
              <a href="https://github.com/harmeshgv" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:shadow-glow transition-all">
              <a href="https://linkedin.com/in/harmeshgv" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:shadow-glow transition-all">
              <a href="mailto:harmeshgv@example.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
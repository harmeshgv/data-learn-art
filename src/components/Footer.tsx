import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/harmeshgv" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/harmeshgv" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:harmeshgv@example.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="h-4 w-4 text-red-500" /> by Harmesh G V
          </p>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Harmesh G V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
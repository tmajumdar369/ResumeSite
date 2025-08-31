import { Typewriter } from "./typewriter";
import { TerminalWindow } from "./terminal-window";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@assets/20250615_190028(1)_1755724977052.jpg";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a download link for the CV
    const link = document.createElement('a');
    link.href = '/cv/Tamal_Majumdar_Resume.pdf';
    link.download = 'Tamal_Majumdar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <TerminalWindow title="portfolio.js" className="mb-8">
              <div className="font-mono text-sm space-y-2">
                <div className="text-matrix">$ whoami</div>
                <div className="mt-2">
                  <span className="text-code-blue">const</span>{" "}
                  <span className="text-foreground">developer</span> = {"{"}
                  <div className="ml-4 space-y-1">
                    <div>
                      <span className="text-primary">name:</span>{" "}
                      <span className="text-code-yellow">"Tamal Majumdar"</span>,
                    </div>
                    <div>
                      <span className="text-primary">role:</span>{" "}
                      <span className="text-code-yellow">"Software Engineer"</span>,
                    </div>
                    <div>
                      <span className="text-primary">experience:</span>{" "}
                      <span className="text-code-yellow">"3+ years"</span>,
                    </div>
                    <div>
                      <span className="text-primary">location:</span>{" "}
                      <span className="text-code-yellow">"Hyderabad, India"</span>
                    </div>
                  </div>
                  {"};"}
                </div>
              </div>
            </TerminalWindow>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Tamal</span>
            </h1>
            
            <div className="text-xl md:text-2xl mb-8 text-muted-foreground">
              <Typewriter text="Software Engineer & Backend Developer" speed={100} />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadCV}
                data-testid="button-download-cv"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="text-center animate-fade-in-up lg:animate-float">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur opacity-30"></div>
              <img
                src={profileImage}
                alt="Tamal Majumdar - Software Engineer"
                className="profile-image w-80 h-80 rounded-full mx-auto object-cover border-4 border-primary/20"
                data-testid="img-profile"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

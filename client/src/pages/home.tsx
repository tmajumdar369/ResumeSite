import { useEffect } from "react";
import { MatrixBackground } from "../components/matrix-background";
import { CodeRain } from "../components/code-rain";
import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { ExperienceSection } from "../components/experience-section";
import { EducationSection } from "../components/education-section";
import { SkillsSection } from "../components/skills-section";
import { ContactSection } from "../components/contact-section";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CodeRain />
      <MatrixBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">&copy;</span> 2024 Tamal Majumdar.{" "}
            <span className="text-matrix">Built with passion</span> and lots of{" "}
            <span className="text-code-yellow">coffee ☕</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

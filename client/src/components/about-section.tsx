import { TerminalWindow } from "./terminal-window";
import { Award, GraduationCap, Code } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-primary font-mono">//</span> About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <TerminalWindow title="about.md" className="h-fit">
            <div className="font-mono text-sm space-y-3">
              <div className="text-matrix"># About Tamal Majumdar</div>
              <div className="text-muted-foreground">
                Highly motivated Software Engineer with over 3 years of experience 
                in designing, developing, and maintaining robust applications.
              </div>
              <div className="mt-4">
                <div className="text-code-blue">## Core Expertise:</div>
                <div className="ml-4 text-muted-foreground space-y-1">
                  <div>• Java, JavaScript</div>
                  <div>• Spring Boot, Microservices</div>
                  <div>• CI/CD with Jenkins</div>
                  <div>• AWS Services</div>
                  <div>• Agile Development</div>
                </div>
              </div>
            </div>
          </TerminalWindow>
          
          <div className="space-y-6">
            <div className="code-block p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Current Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently advancing proficiency in Spring Boot and Kafka while working at FactSet, 
                where I develop microservices for healthcare imaging platforms and support Fixed Income systems.
              </p>
            </div>
            
            <div className="code-block p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary flex items-center">
                <Award className="mr-2 h-5 w-5" />
                Key Achievements
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center" data-testid="text-achievement-1">
                  <Award className="text-primary mr-3 h-4 w-4" />
                  Employee of the Month - June 2022 at Cognizant
                </li>
                <li className="flex items-center" data-testid="text-achievement-2">
                  <GraduationCap className="text-primary mr-3 h-4 w-4" />
                  DGPA: 8.81/10 from Asansol Engineering College
                </li>
                <li className="flex items-center" data-testid="text-achievement-3">
                  <Code className="text-primary mr-3 h-4 w-4" />
                  Successfully migrated systems from Java 8 to Java 17
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

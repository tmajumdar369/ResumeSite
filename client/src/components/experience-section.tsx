import { TerminalWindow } from "./terminal-window";
import { Building, Calendar } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer II",
      company: "FactSet",
      location: "Hyderabad, India",
      period: "August 2022 - Present",
      achievements: [
        "Developed microservices for healthcare imaging platforms",
        "Supported TRUMID onboarding as new Execution Venue",
        "Enhanced Fixed Income Pricing with Discount Price Type support",
        "Migrated Fixed Income plugins from Java 8 to Java 17",
        "Upgraded Fixed Income systems from v6.17 to v6.22",
        "Implemented Unit Linked Bonds and CDS Index support",
        "Applied Agile principles, improving SDLC methodologies",
        "Maintained high-quality, well-tested code using Mockito"
      ]
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant Technology Solutions",
      location: "Kolkata, India",
      period: "August 2021 - August 2022",
      achievements: [
        "Engineered backend solutions for Solera Support",
        "Ensured comprehensive unit testing for high-quality deliverables",
        "🏆 Employee of the Month - June 2022"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-primary font-mono">function</span> getExperience()
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card p-8" data-testid={`experience-${index}`}>
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <div className="flex items-center text-lg font-semibold mb-2">
                    <Building className="mr-2 h-5 w-5 text-primary" />
                    {exp.company}
                  </div>
                  <p className="text-muted-foreground">{exp.location}</p>
                </div>
                <div className="flex items-center text-muted-foreground font-mono mt-4 lg:mt-0">
                  <Calendar className="mr-2 h-4 w-4" />
                  {exp.period}
                </div>
              </div>
              
              <TerminalWindow title="achievements.log">
                <div className="font-mono text-sm space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <div 
                      key={achievementIndex} 
                      className="flex items-start"
                      data-testid={`text-achievement-${index}-${achievementIndex}`}
                    >
                      <span className="text-matrix mr-2">✓</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </TerminalWindow>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

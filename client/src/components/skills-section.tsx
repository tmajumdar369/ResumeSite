import { TerminalWindow } from "./terminal-window";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages & Tools",
      filename: "languages.js",
      skills: [
        "Java 8", "Java 17", "JavaScript", "HTML/CSS", 
        "MySQL", "Oracle", "Vue.js", "Eclipse", "AWS", "Jenkins", 
        "GitHub", "Linux", "Windows 11", "Windows 10"
      ]
    },
    {
      title: "Frameworks & Technologies",
      filename: "frameworks.js", 
      skills: [
        "Spring Boot", "Kafka", "Mockito", "JUnit", "Microservices", 
        "OpenAI ChatGPT"
      ]
    },
    {
      title: "Core Competencies",
      filename: "competencies.js",
      skills: [
        "SDLC", "REST API", "Agile", "Backend Development", 
        "Unit Testing", "Software Engineering", "Problem Solving", 
        "FIX Messages", "FIX Engine"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-primary font-mono">const</span> skills = {"{}"}
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <TerminalWindow 
              key={index} 
              title={category.filename}
              data-testid={`skills-category-${index}`}
            >
              <div>
                <h3 className="text-lg font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-tag"
                      data-testid={`skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TerminalWindow>
          ))}
        </div>
      </div>
    </section>
  );
}

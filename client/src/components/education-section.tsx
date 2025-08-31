import { TerminalWindow } from "./terminal-window";

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-primary font-mono">class</span> Education
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="education.json">
            <div className="font-mono text-sm" data-testid="education-details">
              <div className="text-code-blue">{"{"}</div>
              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-primary">"degree":</span>{" "}
                  <span className="text-code-yellow">"BTech Computer Science"</span>,
                </div>
                <div>
                  <span className="text-primary">"institution":</span>{" "}
                  <span className="text-code-yellow">"Asansol Engineering College"</span>,
                </div>
                <div>
                  <span className="text-primary">"duration":</span>{" "}
                  <span className="text-code-yellow">"August 2017 - July 2021"</span>,
                </div>
                <div>
                  <span className="text-primary">"dgpa":</span>{" "}
                  <span className="text-matrix">8.81</span>
                  <span className="text-foreground">/</span>
                  <span className="text-matrix">10</span>,
                </div>
                <div>
                  <span className="text-primary">"coursework":</span> [
                  <div className="ml-4 space-y-1">
                    <div><span className="text-code-yellow">"Data Structures and Algorithms"</span>,</div>
                    <div><span className="text-code-yellow">"Design and Analysis of Algorithms"</span>,</div>
                    <div><span className="text-code-yellow">"Software Engineering"</span>,</div>
                    <div><span className="text-code-yellow">"Database Management"</span></div>
                  </div>
                  ]
                </div>
              </div>
              <div className="text-code-blue">{"}"}</div>
            </div>
          </TerminalWindow>
        </div>
      </div>
    </section>
  );
}

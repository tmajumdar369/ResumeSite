import { TerminalWindow } from "./terminal-window";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export function ContactSection() {
  const contactInfo = {
    email: "tmajumdar369@gmail.com",
    phone: "+91 9971269231",
    location: "Hyderabad, India",
    linkedin: "linkedin.com/in/tmajumdar09",
    github: "github.com/tmajumdar369",
    geeksforgeeks: "geeksforgeeks.org/tamalmajumdar",
    leetcode: "leetcode.com/u/itstamal09"
  };

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${contactInfo.email}`,
      label: "Email",
      testId: "link-email"
    },
    {
      icon: Phone,
      href: `tel:${contactInfo.phone}`,
      label: "Phone",
      testId: "link-phone"
    },
    {
      icon: Linkedin,
      href: `https://${contactInfo.linkedin}`,
      label: "LinkedIn",
      testId: "link-linkedin"
    },
    {
      icon: Github,
      href: `https://${contactInfo.github}`,
      label: "GitHub",
      testId: "link-github"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-primary font-mono">function</span> getInTouch()
        </h2>
        
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          <TerminalWindow title="contact.json">
            <div className="font-mono text-sm" data-testid="contact-details">
              <div className="text-code-blue">{"{"}</div>
              <div className="ml-4 space-y-2">
                <div>
                  <span className="text-primary">"email":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.email}"</span>,
                </div>
                <div>
                  <span className="text-primary">"phone":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.phone}"</span>,
                </div>
                <div>
                  <span className="text-primary">"location":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.location}"</span>,
                </div>
                <div>
                  <span className="text-primary">"linkedin":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.linkedin}"</span>,
                </div>
                <div>
                  <span className="text-primary">"github":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.github}"</span>,
                </div>
                <div>
                  <span className="text-primary">"geeksforgeeks":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.geeksforgeeks}"</span>,
                </div>
                <div>
                  <span className="text-primary">"leetcode":</span>{" "}
                  <span className="text-code-yellow">"{contactInfo.leetcode}"</span>
                </div>
              </div>
              <div className="text-code-blue">{"}"}</div>
            </div>
          </TerminalWindow>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Let's Connect!</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Feel free to reach out if you'd like to discuss software development, backend solutions, or potential collaborations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="social-link h-16"
                  asChild
                  data-testid={link.testId}
                >
                  <a href={link.href} target={link.href.startsWith('http') ? "_blank" : undefined} rel={link.href.startsWith('http') ? "noopener noreferrer" : undefined}>
                    <link.icon className="h-6 w-6" />
                  </a>
                </Button>
              ))}
            </div>
            
            <div className="code-block p-6 rounded-lg">
              <div className="font-mono text-sm">
                <div className="text-matrix">$ curl -X GET "https://api.tamal.dev/status"</div>
                <div className="text-muted-foreground mt-2">
                  {"{"}<br />
                  &nbsp;&nbsp;"status": "Available for opportunities",<br />
                  &nbsp;&nbsp;"current_focus": "Spring Boot & Kafka",<br />
                  &nbsp;&nbsp;"response_time": "&lt; 24 hours"<br />
                  {"}"}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90" data-testid="button-view-github">
                <a href={`https://${contactInfo.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View GitHub
                </a>
              </Button>
              <Button variant="outline" asChild data-testid="button-view-leetcode">
                <a href={`https://${contactInfo.leetcode}`} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  LeetCode Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

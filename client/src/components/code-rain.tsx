import { useEffect, useRef } from "react";

export function CodeRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const codeSnippets = [
      "function getUserData() {",
      "  return fetch('/api/users')",
      "    .then(res => res.json())",
      "    .catch(err => console.error(err));",
      "}",
      "const handleLogin = async (credentials) => {",
      "  try {",
      "    const response = await auth.login(credentials);",
      "    localStorage.setItem('token', response.token);",
      "    return response;",
      "  } catch (error) {",
      "    throw new Error('Login failed');",
      "  }",
      "};",
      "import { useState, useEffect } from 'react';",
      "const [data, setData] = useState(null);",
      "useEffect(() => {",
      "  fetchData().then(setData);",
      "}, []);",
      "class ApiService {",
      "  constructor(baseURL) {",
      "    this.baseURL = baseURL;",
      "  }",
      "  async get(endpoint) {",
      "    return fetch(`${this.baseURL}${endpoint}`);",
      "  }",
      "}",
      "SELECT * FROM users WHERE active = true;",
      "UPDATE orders SET status = 'completed' WHERE id = ?;",
      "public class UserService {",
      "  @Autowired",
      "  private UserRepository repository;",
      "  public User findById(Long id) {",
      "    return repository.findById(id).orElse(null);",
      "  }",
      "}",
      "git commit -m 'feat: add user authentication'",
      "docker build -t myapp:latest .",
      "kubectl apply -f deployment.yaml"
    ];

    const maxLines = 8;
    container.innerHTML = "";

    for (let i = 0; i < maxLines; i++) {
      const line = document.createElement("div");
      line.className = "code-line";
      line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      line.style.left = Math.random() * 100 + "%";
      line.style.animationDelay = Math.random() * 10 + "s";
      line.style.animationDuration = (Math.random() * 15 + 20) + "s";
      line.style.opacity = String(Math.random() * 0.3 + 0.1);
      container.appendChild(line);
    }

    const interval = setInterval(() => {
      const lines = container.querySelectorAll(".code-line");
      lines.forEach((line) => {
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="code-rain-container" />;
}
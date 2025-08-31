import { useEffect, useRef } from "react";

export function MatrixBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = "01abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ{}()[];,.<>/\\=+-*&|!@#$%^&*()_+{}[]:\";'<>?,./`~";
    const maxChars = 50;

    // Clear existing chars
    container.innerHTML = "";

    for (let i = 0; i < maxChars; i++) {
      const char = document.createElement("div");
      char.className = "matrix-char";
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + "%";
      char.style.animationDelay = Math.random() * 15 + "s";
      char.style.fontSize = Math.random() * 6 + 10 + "px";
      char.style.animationDuration = (Math.random() * 10 + 10) + "s";
      container.appendChild(char);
    }

    const interval = setInterval(() => {
      const charElements = container.querySelectorAll(".matrix-char");
      charElements.forEach((char) => {
        char.textContent = chars[Math.floor(Math.random() * chars.length)];
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-container" />;
}

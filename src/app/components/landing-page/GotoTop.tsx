"use client";
import { useState, useRef, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function GoToTop({ containerId }: { containerId: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    containerRef.current = document.getElementById(containerId);
    if (!containerRef.current) return;

    const handleScroll = () => {
      if (containerRef.current) {
        setIsVisible(containerRef.current.scrollTop > 200);
      }
    };

    containerRef.current.addEventListener("scroll", handleScroll);
    return () => containerRef.current?.removeEventListener("scroll", handleScroll);
  }, [containerId]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-blue-600 text-white rounded-full shadow-md transition-all ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
}

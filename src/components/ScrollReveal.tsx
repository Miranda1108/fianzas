"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  const initObserver = useCallback(() => {
    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";
    const elements = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return observer;
  }, []);

  useEffect(() => {
    // Wait for DOM to be ready after route change
    let observer: IntersectionObserver | null = null;

    const timeout = setTimeout(() => {
      observer = initObserver();
    }, 150);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname, initObserver]);

  return null;
}

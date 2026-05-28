"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const SELECTORS =
  ".reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const revealAll = () => {
      document
        .querySelectorAll(SELECTORS)
        .forEach((el) => el.classList.add("visible"));
    };

    const revealInView = () => {
      document.querySelectorAll(SELECTORS).forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
          el.classList.add("visible");
        }
      });
    };

    const init = () => {
      const elements = Array.from(document.querySelectorAll(SELECTORS));

      // Reveal immediately anything already within (or near) the viewport,
      // so the page is never left blank on first paint or back-navigation.
      revealInView();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      elements.forEach((el) => {
        if (!el.classList.contains("visible")) observer!.observe(el);
      });
    };

    const raf = requestAnimationFrame(init);

    // Back/forward cache restore (browser "back" button) does NOT re-run React
    // effects, so force everything visible when the page is restored from cache.
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) revealAll();
    };
    window.addEventListener("pageshow", onPageShow);

    // Safety net: if the observer never fired (edge cases), make sure visible
    // content isn't stuck hidden. Only reveals what's actually on screen so
    // below-the-fold sections keep their scroll animation.
    const fallback = window.setTimeout(revealInView, 800);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fallback);
      window.removeEventListener("pageshow", onPageShow);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}

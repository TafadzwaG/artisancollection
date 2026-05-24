import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Observes `.reveal` / `[data-reveal]` elements and adds `in-view` on scroll.
 * Re-runs on route changes so detail pages animate too.
 */
export function useReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const frame = requestAnimationFrame(() => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nodes = document.querySelectorAll<HTMLElement>(".reveal, [data-reveal]");

      if (reduced || !("IntersectionObserver" in window)) {
        nodes.forEach((node) => node.classList.add("in-view"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
      );

      nodes.forEach((node) => {
        node.classList.remove("in-view");
        observer?.observe(node);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);
}

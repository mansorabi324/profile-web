import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    if (targets.length === 0) return;

    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

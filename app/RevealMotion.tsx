"use client";

import { useEffect } from "react";

const revealSelectors = [
  ".sectionHeader",
  ".focusItem",
  ".pipelineStep",
  ".opsConsole",
  ".projectCard",
  ".skillGroup",
  ".timelineItem",
  ".certList span",
  ".contactSection"
];

const reactiveSelectors = [
  ".focusItem",
  ".projectCard",
  ".skillGroup",
  ".contactSection",
  ".pipelineStep",
  ".opsConsole",
  ".primaryButton",
  ".secondaryButton",
  ".iconButton",
  ".navLinks a",
  ".projectTopline a",
  ".heroChips span",
  ".projectSignals span",
  ".skillGroup span",
  ".certList span",
  ".stackList span",
  ".techRail span"
];

export function RevealMotion() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const elements = revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)));
    const reactiveElements = reactiveSelectors.flatMap((selector) =>
      Array.from(document.querySelectorAll<HTMLElement>(selector))
    );
    let motionFrame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollFrame = 0;

    elements.forEach((element, index) => {
      element.dataset.reveal = "true";
      element.style.setProperty("--reveal-delay", `${Math.min((index % 6) * 72, 360)}ms`);
      element.style.setProperty("--reveal-y", `${22 + (index % 3) * 5}px`);
      element.style.setProperty("--reveal-rotate", `${index % 2 === 0 ? -0.45 : 0.45}deg`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.14 }
    );

    elements.forEach((element) => observer.observe(element));

    const updateMotion = () => {
      currentX += (targetX - currentX) * 0.085;
      currentY += (targetY - currentY) * 0.085;

      document.documentElement.style.setProperty("--mx", currentX.toFixed(3));
      document.documentElement.style.setProperty("--my", currentY.toFixed(3));

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        motionFrame = requestAnimationFrame(updateMotion);
      } else {
        motionFrame = 0;
      }
    };

    const startMotion = () => {
      if (!motionFrame) {
        motionFrame = requestAnimationFrame(updateMotion);
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX / window.innerWidth - 0.5;
      targetY = event.clientY / window.innerHeight - 0.5;
      startMotion();
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
      startMotion();
    };

    const updateScrollProgress = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = window.scrollY / maxScroll;
      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      scrollFrame = 0;
    };

    const handleScroll = () => {
      if (!scrollFrame) {
        scrollFrame = requestAnimationFrame(updateScrollProgress);
      }
    };

    updateScrollProgress();
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);

    const cleanupReactive = reactiveElements.flatMap((element) => {
      const handleMove = (event: PointerEvent) => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        const clampedX = Math.min(Math.max(x, 0), 1);
        const clampedY = Math.min(Math.max(y, 0), 1);

        element.style.setProperty("--px", `${(clampedX * 100).toFixed(1)}%`);
        element.style.setProperty("--py", `${(clampedY * 100).toFixed(1)}%`);
        element.style.setProperty("--tilt-x", `${((0.5 - clampedY) * 4.5).toFixed(2)}deg`);
        element.style.setProperty("--tilt-y", `${((clampedX - 0.5) * 5.5).toFixed(2)}deg`);
        element.style.setProperty("--magnet-x", `${((clampedX - 0.5) * 10).toFixed(2)}px`);
        element.style.setProperty("--magnet-y", `${((clampedY - 0.5) * 10).toFixed(2)}px`);
      };

      const handleLeave = () => {
        element.style.setProperty("--magnet-x", "0px");
        element.style.setProperty("--magnet-y", "0px");
      };

      element.addEventListener("pointermove", handleMove, { passive: true });
      element.addEventListener("pointerleave", handleLeave);

      return [
        () => element.removeEventListener("pointermove", handleMove),
        () => element.removeEventListener("pointerleave", handleLeave)
      ];
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("pointerleave", handlePointerLeave);
      cleanupReactive.forEach((cleanup) => cleanup());
      if (motionFrame) {
        cancelAnimationFrame(motionFrame);
      }
      if (scrollFrame) {
        cancelAnimationFrame(scrollFrame);
      }
    };
  }, []);

  return null;
}

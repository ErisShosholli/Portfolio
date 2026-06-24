"use client";

import { useEffect, useRef } from "react";

type SignalNode = {
  baseX: number;
  baseY: number;
  color: string;
  depth: number;
  phase: number;
  radius: number;
  x: number;
  y: number;
};

const colors = ["49, 215, 230", "105, 216, 199", "255, 198, 109", "228, 134, 154"];

function makeNodes(count: number, width: number, height: number): SignalNode[] {
  return Array.from({ length: count }, (_, index) => {
    const column = index % 11;
    const row = Math.floor(index / 11);
    const seed = Math.sin((index + 1) * 97.13) * 10000;
    const drift = seed - Math.floor(seed);
    const baseX = ((column + 0.34 + drift * 0.44) / 11) * width;
    const baseY = ((row + 0.28 + ((drift * 1.7) % 0.48)) / Math.ceil(count / 11)) * height;

    return {
      baseX,
      baseY,
      color: colors[index % colors.length],
      depth: 0.38 + (index % 7) * 0.11,
      phase: drift * Math.PI * 2,
      radius: 1.1 + (index % 4) * 0.28,
      x: baseX,
      y: baseY
    };
  });
}

export function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { alpha: true });

    if (!canvas || !context) {
      return;
    }

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = {
      active: false,
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.38,
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.38
    };

    let animationFrame = 0;
    let depth = 0;
    let height = 0;
    let nodes: SignalNode[] = [];
    let ratio = 1;
    let width = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.max(1, Math.floor(width * ratio));
      canvas.height = Math.max(1, Math.floor(height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      nodes = makeNodes(Math.round(Math.min(70, Math.max(38, width / 24))), width, height);
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      context.lineCap = "round";

      pointer.x += (pointer.targetX - pointer.x) * 0.045;
      pointer.y += (pointer.targetY - pointer.y) * 0.045;

      nodes.forEach((node, index) => {
        const scrollLift = depth * node.depth * 52;
        const orbitalX = Math.cos(time * 0.00013 * node.depth + node.phase) * 22 * node.depth;
        const orbitalY = Math.sin(time * 0.00017 * node.depth + node.phase * 1.2) * 28 * node.depth;
        const dx = pointer.x - node.x;
        const dy = pointer.y - node.y;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const pull = pointer.active ? Math.max(0, 1 - distance / 220) * 42 * node.depth : 0;
        const targetX = node.baseX + orbitalX - (dx / distance) * pull;
        const targetY = node.baseY + orbitalY - scrollLift - (dy / distance) * pull;

        node.x += (targetX - node.x) * 0.035;
        node.y += (targetY - node.y) * 0.035;

        for (let nextIndex = index + 1; nextIndex < nodes.length; nextIndex += 1) {
          const next = nodes[nextIndex];
          const lineDistance = Math.hypot(node.x - next.x, node.y - next.y);

          if (lineDistance < 148) {
            const opacity = (1 - lineDistance / 148) * 0.15;
            context.strokeStyle = `rgba(${node.color}, ${opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(node.x, node.y);
            context.lineTo(next.x, next.y);
            context.stroke();
          }
        }

        const pulse = 0.5 + Math.sin(time * 0.0012 + node.phase) * 0.5;
        context.fillStyle = `rgba(${node.color}, ${0.18 + pulse * 0.16})`;
        context.beginPath();
        context.arc(node.x, node.y, node.radius + pulse * 0.75, 0, Math.PI * 2);
        context.fill();
      });

      const sweepX = ((time * 0.018) % (width + 320)) - 160;
      const gradient = context.createLinearGradient(sweepX - 120, 0, sweepX + 120, height);
      gradient.addColorStop(0, "rgba(49, 215, 230, 0)");
      gradient.addColorStop(0.5, "rgba(49, 215, 230, 0.08)");
      gradient.addColorStop(1, "rgba(49, 215, 230, 0)");
      context.strokeStyle = gradient;
      context.lineWidth = 1;
      context.beginPath();
      context.moveTo(sweepX, 0);
      context.lineTo(sweepX + 220, height);
      context.stroke();

      context.globalCompositeOperation = "source-over";

      if (!media.matches) {
        animationFrame = requestAnimationFrame(draw);
      }
    };

    const updateScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      depth = window.scrollY / maxScroll;
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.active = true;
      pointer.targetX = event.clientX;
      pointer.targetY = event.clientY;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
      pointer.targetX = width * 0.5;
      pointer.targetY = height * 0.38;
    };

    const start = () => {
      cancelAnimationFrame(animationFrame);
      resize();
      updateScroll();
      draw(0);
    };

    start();
    window.addEventListener("resize", start);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave);
    media.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", start);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerleave", handlePointerLeave);
      media.removeEventListener("change", start);
    };
  }, []);

  return <canvas className="signalCanvas" ref={canvasRef} aria-hidden="true" />;
}

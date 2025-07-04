import React, { useRef, useEffect } from "react";

const BubbleCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });
  const bubbles = useRef([]);
  const bubbleCount = 150;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    window.addEventListener("resize", setSize);
    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    class Bubble {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = 0.8 + Math.random() * 1.2; // Small
        this.speed = 0.5 + Math.random() * 0.3;
        this.dx = (Math.random() - 0.5) * 0.5;
      }

      update() {
        const dx = this.x - mouse.current.x - 13; // Adjusted for smaller bubbles x axis
        const dy = this.y - mouse.current.y - 25; // Adjusted for smaller bubbles y axis
        const distance = Math.sqrt(dx * dx + dy * dy);
        const avoidDistance = 150;

        if (distance < avoidDistance) {
          const force = (avoidDistance - distance) / avoidDistance;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force * 10;
          const moveY = Math.sin(angle) * force * 10;

          this.x += moveX;
          this.y += moveY;
        }

        this.y -= this.speed;
        this.x += this.dx;

        if (
          this.y < -this.radius ||
          this.x < -this.radius ||
          this.x > canvas.width + this.radius
        ) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "black"; // 🔥 Black bubbles
        ctx.fill();
      }
    }

    // Create bubbles
    bubbles.current = Array.from({ length: bubbleCount }, () => new Bubble());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.current.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setSize);
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        zIndex: 1,
        width: "100%",
        height: "90vh",
        background: "transprent", // White background
      }}
    />
  );
};

export default BubbleCanvas;

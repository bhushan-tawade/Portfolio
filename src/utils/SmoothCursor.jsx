// src/components/SmoothCursor.jsx
import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

const DefaultCursorSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={50} height={54} viewBox="0 0 50 54" fill="none">
    <g filter="url(#filter0_d)">
      <path
        d="M42.6817 41.1495L27.5103 6.79925C26.7269 5.02557 24.2082 5.02558 23.3927 6.79925L7.59814 41.1495C6.75833 42.9759 8.52712 44.8902 10.4125 44.1954L24.3757 39.0496C24.8829 38.8627 25.4385 38.8627 25.9422 39.0496L39.8121 44.1954C41.6849 44.8902 43.4884 42.9759 42.6817 41.1495Z"
        fill="black"
      />
      <path
        d="M43.7146 40.6933L28.5431 6.34306C27.3556 3.65428 23.5772 3.69516 22.3668 6.32755L6.57226 40.6778C5.3134 43.4156 7.97238 46.298 10.803 45.2549L24.7662 40.109C25.0221 40.0147 25.2999 40.0156 25.5494 40.1082L39.4193 45.254C42.2261 46.2953 44.9254 43.4347 43.7146 40.6933Z"
        stroke="white"
        strokeWidth={2.25}
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x={0}
        y={0}
        width={55}
        height={60}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feOffset dy={2.25} />
        <feGaussianBlur stdDeviation={2.5} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.08 0"
        />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default function SmoothCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cursorX = useSpring(mouseX, { stiffness: 400, damping: 45 });
  const cursorY = useSpring(mouseY, { stiffness: 400, damping: 45 });

  const velX = useVelocity(cursorX);
  const velY = useVelocity(cursorY);

  const speed = useTransform([velX, velY], ([vx, vy]) =>
    Math.sqrt(vx * vx + vy * vy)
  );

  const scale = useTransform(speed, [0, 1000], [0.6, 1]);
  const opacity = useTransform(speed, [0, 1000], [0.75, 1]);

  const rotation = useTransform([velX, velY], ([vx, vy]) => {
    const angle = Math.atan2(vy, vx);
    return angle * (180 / Math.PI) + 90;
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  useEffect(() => {
    document.body.style.cursor = "none";
    return () => (document.body.style.cursor = "auto");
  }, []);

  return (
    <motion.div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        x: cursorX,
        y: cursorY,
        translateX: "-25%",
        translateY: "-10%",
        rotate: rotation,
        scale,
        opacity,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
      }}
    >
      <DefaultCursorSVG />
    </motion.div>
  );
}

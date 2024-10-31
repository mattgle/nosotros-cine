import { useState, useEffect, useRef } from "react";

interface Position {
  x: number;
  y: number;
}

const CENTER_X = 515.47;
const CENTER_Y = 412.38;
const PUPIL_RANGE = 45;
const PUPIL_INITIAL_POSITION = {
  x: 515.47,
  y: 412.38,
};
const SMOOTHING_FACTOR = 0.15; // Adjusted for smoother movement

const Eye = () => {
  const [pupilPosition, setPupilPosition] = useState<Position>(
    PUPIL_INITIAL_POSITION
  );
  const eyeRef = useRef<SVGSVGElement | null>(null);
  const mousePosition = useRef<Position>({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  const calculatePupilPosition = (mouseX: number, mouseY: number): Position => {
    if (!eyeRef.current) return { x: CENTER_X, y: CENTER_Y };

    const eyeRect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = eyeRect.left + eyeRect.width / 2;
    const eyeCenterY = eyeRect.top + eyeRect.height / 2;

    const deltaX = mouseX - eyeCenterX;
    const deltaY = mouseY - eyeCenterY;

    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(
      Math.sqrt(deltaX * deltaX + deltaY * deltaY),
      PUPIL_RANGE
    );

    return {
      x: CENTER_X + Math.cos(angle) * distance,
      y: CENTER_Y + Math.sin(angle) * distance,
    };
  };

  const updatePupilPosition = () => {
    const targetPosition = calculatePupilPosition(
      mousePosition.current.x,
      mousePosition.current.y
    );

    setPupilPosition((prevPos) => ({
      x: prevPos.x + (targetPosition.x - prevPos.x) * SMOOTHING_FACTOR,
      y: prevPos.y + (targetPosition.y - prevPos.y) * SMOOTHING_FACTOR,
    }));

    rafRef.current = requestAnimationFrame(updatePupilPosition);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(updatePupilPosition);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div style={{ width: 70 }}>
      <svg
        ref={eyeRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1030.95 824.76"
        className="w-full max-w-lg"
      >
        <defs>
          <style>
            {`
            .cls-1 { fill: #081a20; }
            .cls-2 { fill: #ff5f00; }
            .cls-3 { fill: #f9f8f0; }
          `}
          </style>
        </defs>
        <g id="Capa_1" data-name="Capa 1">
          <path
            className="cls-2"
            d="M55.16,190.93c36.77-62.16,89.81-109.51,159.14-142.08C283.62,16.29,366.04,0,461.58,0h107.79c95.52,0,177.95,16.29,247.28,48.84,69.31,32.57,122.37,79.75,159.14,141.53,36.77,61.8,55.16,135.62,55.16,221.45s-18.39,159.85-55.16,222.01c-36.78,62.16-89.84,109.53-159.14,142.09-69.33,32.57-151.76,48.84-247.28,48.84h-107.79c-95.54,0-177.97-16.27-247.28-48.84-69.33-32.56-122.37-79.92-159.14-142.09C18.39,571.67,0,497.68,0,411.83s18.39-158.73,55.16-220.9Z"
          />
          <path
            className="cls-3"
            d="M210.5,567.79c60.87,37.37,145.39,56.06,253.61,56.06h107.79c71.01,0,131.89-8.33,182.61-24.98,50.72-16.65,89.6-40.88,116.66-72.7,27.05-31.81,40.58-69.93,40.58-114.33s-13.54-81.4-40.58-113.22c-27.06-31.81-66.15-56.06-117.3-72.71-51.15-16.65-112.22-24.98-183.23-24.98h-107.79c-107.37,0-191.48,18.51-252.35,55.5-60.87,37.01-91.3,88.8-91.3,155.41s30.43,118.6,91.3,155.96Z"
          />
          <ellipse
            className="cls-1"
            cx={pupilPosition.x}
            cy={pupilPosition.y}
            rx="128.87"
            ry="128.8"
          />
        </g>
      </svg>
    </div>
  );
};

export default Eye;

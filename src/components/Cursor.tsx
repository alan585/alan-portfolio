"use client";

import React, { useState, useEffect } from "react";

const CursorGradientCircle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 h-screen w-screen opacity-30 max-lg:hidden"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(30, 58, 138, 0.7), rgba(30, 58, 138, 0) 1000px)`,
        transition: "background 0.1s ease-out",
      }}
    ></div>
  );
};

export default CursorGradientCircle;

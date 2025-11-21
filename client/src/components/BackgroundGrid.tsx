import React, { useEffect, useRef } from 'react';

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Dot configuration
    const dotSize = 1.5;
    const spacing = 40;
    const offset = 0; // Can be used to scroll pattern
    
    // Mouse interaction
    const mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    const draw = () => {
      ctx.fillStyle = '#0c0c0d';
      ctx.fillRect(0, 0, width, height);

      const rows = Math.ceil(height / spacing);
      const cols = Math.ceil(width / spacing);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const x = j * spacing;
          const y = i * spacing;

          // Calculate distance to mouse
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;
          
          // Base opacity
          let opacity = 0.15;
          let scale = 1;

          // Interactive effect
          if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance;
            opacity = 0.15 + factor * 0.4; // Brighten near mouse
            scale = 1 + factor * 0.5; // Grow near mouse
          }

          ctx.beginPath();
          ctx.arc(x, y, dotSize * scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 100, 100, ${opacity})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full opacity-60"
      style={{ background: 'transparent' }}
    />
  );
};
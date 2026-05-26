'use client';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Cube() {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: -20, y: 20 });
  const router = useRouter();
  const faces = [
    { className: 'front', label: 'github', link: 'https://github.com/clockerka/ppl' },
    { className: 'back', label: 'ф.и.з.и.к.а. v2.0', link: '/physics' },
    { className: 'right', label: 'о проекте', link: '/about' },
    { className: 'left', label: 'fun video.mp4', link: '/fun' },
    { className: 'top', label: 'a.l.g.e.b.r.a.', link: '/algebra' },
    { className: 'bottom', label: 'наш канал в максе', link: '/max' },
  ];
  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setPreviousMouse({ x: clientX, y: clientY });
  };
  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    const deltaX = clientX - previousMouse.x;
    const deltaY = clientY - previousMouse.y;
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5,
    }));
    setPreviousMouse({ x: clientX, y: clientY });
  };
  const handleEnd = () => {
    setIsDragging(false);
  };
  const handleFaceClick = (link: string) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      router.push(link);
    }
  };
  return (
    <div
      id="scene"
      onMouseDown={(e) => handleStart(e.clientX, e.clientY)}
      onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handleEnd}
    >
      <div
        id="cube"
        ref={cubeRef}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        {faces.map((face) => (
          <div
            key={face.className}
            className={`face ${face.className}`}
            onClick={() => handleFaceClick(face.link)}
          >
            <div className="label">{face.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

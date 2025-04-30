
import { useEffect, useState } from "react";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Main cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    // Trail effect
    const trailElements = [];
    const trailCount = 5;
    
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement("div");
      trail.classList.add("cursor-trail");
      trail.style.opacity = (1 - i * 0.15).toString();
      trail.style.width = `${24 - i * 3}px`;
      trail.style.height = `${24 - i * 3}px`;
      trail.style.zIndex = `${9998 - i}`;
      document.body.appendChild(trail);
      trailElements.push(trail);
    }

    // Position history for trails
    const positions = Array(trailCount).fill({ x: 0, y: 0 });

    const updateCursorPosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Update main cursor
      cursor.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px) scale(${clicking ? 0.8 : hovering ? 1.5 : 1})`;
      
      // Update position history
      positions.unshift(newPosition);
      positions.pop();
      
      // Update trail positions with delay
      trailElements.forEach((trail, index) => {
        const pos = positions[Math.min(index, positions.length - 1)];
        if (pos) {
          trail.style.transform = `translate(${pos.x - (12 - index * 1.5)}px, ${pos.y - (12 - index * 1.5)}px)`;
        }
      });
    };

    const handleMouseDown = () => {
      setClicking(true);
      cursor.classList.add("clicking");
    };

    const handleMouseUp = () => {
      setClicking(false);
      cursor.classList.remove("clicking");
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button')) {
        setHovering(true);
        cursor.classList.add("hovering");
      }
    };

    const handleMouseLeave = () => {
      setHovering(false);
      cursor.classList.remove("hovering");
    };

    // Add event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add hover detection for interactive elements
    document.querySelectorAll('a, button').forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Cleanup
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      document.querySelectorAll('a, button').forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      if (cursor.parentNode) {
        document.body.removeChild(cursor);
      }
      
      trailElements.forEach(trail => {
        if (trail.parentNode) {
          document.body.removeChild(trail);
        }
      });
    };
  }, [clicking, hovering]);

  return null;
}

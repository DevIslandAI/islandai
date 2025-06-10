
import { useEffect, useState, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLocation } from "react-router-dom";

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailElementsRef = useRef<HTMLDivElement[]>([]);
  const positionsRef = useRef<{ x: number; y: number }[]>([]);
  const moveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    // Don't create cursor effects on mobile devices
    if (isMobile) return;
    
    // Main cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Set initial position to center of viewport
    const initialX = window.innerWidth / 2;
    const initialY = window.innerHeight / 2;
    setPosition({ x: initialX, y: initialY });

    // Trail effect
    const trailElements = [];
    const trailCount = 5;
    
    // Initialize positions array
    positionsRef.current = Array(trailCount).fill({ x: initialX, y: initialY });
    
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
    
    trailElementsRef.current = trailElements;

    const updateCursorPosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Clear any existing timeout
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Set a timeout to detect when mouse stops moving
      moveTimeoutRef.current = setTimeout(() => {
        setHovering(false);
        if (cursor) cursor.classList.remove("hovering");
      }, 150); // Reset hover state after 150ms of no movement
      
      // Update main cursor position immediately
      if (cursor && document.body.contains(cursor)) {
        cursor.style.left = `${e.clientX - 16}px`;
        cursor.style.top = `${e.clientY - 16}px`;
      }
      
      // Update position history for trails
      positionsRef.current.unshift(newPosition);
      if (positionsRef.current.length > trailCount) {
        positionsRef.current.pop();
      }
      
      // Update trail positions
      trailElements.forEach((trail, index) => {
        if (trail && document.body.contains(trail)) {
          const pos = positionsRef.current[Math.min(index, positionsRef.current.length - 1)];
          if (pos) {
            const size = 12 - index * 1.5;
            trail.style.left = `${pos.x - size}px`;
            trail.style.top = `${pos.y - size}px`;
          }
        }
      });
    };

    const handleMouseDown = (e: MouseEvent) => {
      setClicking(true);
      if (cursor) {
        cursor.classList.add("clicking");
        // Ensure cursor stays at mouse position during click
        cursor.style.left = `${e.clientX - 16}px`;
        cursor.style.top = `${e.clientY - 16}px`;
      }
    };

    const handleMouseUp = (e: MouseEvent) => {
      setClicking(false);
      if (cursor) {
        cursor.classList.remove("clicking");
        // Ensure cursor position is correct after click
        cursor.style.left = `${e.clientX - 16}px`;
        cursor.style.top = `${e.clientY - 16}px`;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || 
          target.closest('a') || target.closest('button')) {
        setHovering(true);
        if (cursor) cursor.classList.add("hovering");
      }
    };

    const handleMouseLeave = () => {
      setHovering(false);
      if (cursor) cursor.classList.remove("hovering");
    };

    // Add event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add hover detection for interactive elements
    document.addEventListener('mouseover', handleMouseEnter as EventListener);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      // Clear timeout on cleanup
      if (moveTimeoutRef.current) {
        clearTimeout(moveTimeoutRef.current);
      }
      
      // Cleanup
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      
      document.removeEventListener('mouseover', handleMouseEnter as EventListener);
      document.removeEventListener('mouseout', handleMouseLeave);
      
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      
      trailElements.forEach(trail => {
        if (trail && document.body.contains(trail)) {
          document.body.removeChild(trail);
        }
      });
    };
  }, [isMobile]);
  
  // Update cursor scale based on state changes
  useEffect(() => {
    if (isMobile || !cursorRef.current) return;
    
    const scale = clicking ? 0.8 : hovering ? 1.5 : 1;
    cursorRef.current.style.transform = `scale(${scale})`;
  }, [clicking, hovering, isMobile]);

  return null;
}

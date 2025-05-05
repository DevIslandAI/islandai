
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
  
  useEffect(() => {
    // Don't create cursor effects on mobile devices
    if (isMobile) return;
    
    // Main cursor
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);
    cursorRef.current = cursor;

    // Set initial position to center of viewport
    cursor.style.left = `${window.innerWidth / 2 - 16}px`;
    cursor.style.top = `${window.innerHeight / 2 - 16}px`;

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
    
    trailElementsRef.current = trailElements;

    // Position history for trails
    const positions = Array(trailCount).fill({ x: 0, y: 0 });

    const updateCursorPosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setPosition(newPosition);
      
      // Update main cursor with proper positioning
      if (cursor && document.body.contains(cursor)) {
        cursor.style.left = `${e.clientX - 16}px`;
        cursor.style.top = `${e.clientY - 16}px`;
        cursor.style.transform = `scale(${clicking ? 0.8 : hovering ? 1.5 : 1})`;
      }
      
      // Update position history
      positions.unshift(newPosition);
      positions.pop();
      
      // Update trail positions with explicit positioning
      trailElements.forEach((trail, index) => {
        if (trail && document.body.contains(trail)) {
          const pos = positions[Math.min(index, positions.length - 1)];
          if (pos) {
            const size = 12 - index * 1.5;
            trail.style.left = `${pos.x - size}px`;
            trail.style.top = `${pos.y - size}px`;
          }
        }
      });
    };

    const handleMouseDown = () => {
      setClicking(true);
      if (cursor) cursor.classList.add("clicking");
    };

    const handleMouseUp = () => {
      setClicking(false);
      if (cursor) cursor.classList.remove("clicking");
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

    const forceVisibility = () => {
      // Force cursor visibility after a brief delay to ensure DOM is ready
      setTimeout(() => {
        // Force an initial mousemove event to make the cursor visible
        document.dispatchEvent(new MouseEvent('mousemove', {
          clientX: window.innerWidth / 2,
          clientY: window.innerHeight / 2
        }));
        
        // Make sure the cursor is visible
        if (cursor) {
          cursor.style.display = 'block';
          cursor.style.visibility = 'visible';
          cursor.style.opacity = '1';
        }
        
        // Make sure all trail elements are visible
        trailElements.forEach(trail => {
          if (trail) {
            trail.style.display = 'block';
            trail.style.visibility = 'visible';
          }
        });
      }, 100);
    };

    // Force cursor visibility on page load and route changes
    forceVisibility();

    // Add event listeners
    window.addEventListener("mousemove", updateCursorPosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    
    // Add hover detection for interactive elements
    document.addEventListener('mouseover', handleMouseEnter as EventListener);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
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
  }, [clicking, hovering, isMobile]);
  
  // Re-trigger cursor visibility when route changes
  useEffect(() => {
    if (isMobile) return;
    
    const forceVisibility = () => {
      setTimeout(() => {
        // Dispatch another mousemove event when route changes
        document.dispatchEvent(new MouseEvent('mousemove', {
          clientX: window.innerWidth / 2,
          clientY: window.innerHeight / 2
        }));
        
        // Ensure cursor and trails are visible
        if (cursorRef.current) {
          cursorRef.current.style.display = 'block';
          cursorRef.current.style.visibility = 'visible';
          cursorRef.current.style.opacity = '1';
        }
        
        trailElementsRef.current.forEach(trail => {
          if (trail) {
            trail.style.display = 'block';
            trail.style.visibility = 'visible';
          }
        });
      }, 100);
    };
    
    forceVisibility();
    
  }, [location.pathname, isMobile]);

  return null;
}

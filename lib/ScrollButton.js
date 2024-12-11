// example/lib/ScrollButton.js
import React, { useState, useRef, FC } from 'react';
import { useRouter } from 'next/router';

const ScrollButton = () => {
  const [hoverState, setHoverState] = useState(0);
  const timeoutRef = useRef(null);
  const router = useRouter();

  const handleMouseEnter = () => {
    setHoverState(1);
    timeoutRef.current = setTimeout(() => {
      setHoverState(2);
    }, 500); // 0.5 seconds
  };

  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    setHoverState(0);
  };

  const handleClick = () => {
    router.push('/about'); // Use Next.js router to navigate
  };

  const getButtonText = () => {
    switch (hoverState) {
      case 1:
        return 'v0,0';
      case 2:
        return 'ABOUT';
      default:
        return 'SCROLL';
    }
  };

  return (
    <button
      className="scroll-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {getButtonText()}
    </button>
  );
};

export default ScrollButton;
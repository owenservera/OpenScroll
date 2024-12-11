import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
  padding: 0 20px;
  z-index: 1002;
  border-top: 1px solid #333;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const NavButton = styled.button<{ $isActive?: boolean }>`
  background: none;
  border: none;
  color: ${props => props.$isActive ? '#39ff14' : '#ffffff'};
  font-size: 1.2rem;
  padding: 8px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #39ff14;
  }

  &:active {
    transform: scale(0.95);
  }

  &.clicked {
    animation: pulse 0.2s ease-in-out;
  }
`;

const NavBar = () => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollRef = useRef<number | null>(null);
  
  const handleRefresh = () => {
    router.reload();
  };

  const scrollToEnd = () => {
    const conversations = document.querySelectorAll('.conversation-bubble');
    if (conversations.length > 0) {
      const lastConversation = conversations[conversations.length - 1];
      lastConversation.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  };

  const toggleAutoScroll = useCallback(() => {
    if (isAutoScrolling) {
      if (autoScrollRef.current) {
        window.cancelAnimationFrame(autoScrollRef.current);
        autoScrollRef.current = null;
      }
      setIsAutoScrolling(false);
    } else {
      const scrollSpeed = 1; // pixels per frame
      let lastTime = performance.now();
      
      const scroll = (currentTime: number) => {
        const deltaTime = currentTime - lastTime;
        window.scrollBy(0, scrollSpeed * deltaTime / 16); // Normalize to 60fps
        lastTime = currentTime;
        autoScrollRef.current = requestAnimationFrame(scroll);
      };
      
      autoScrollRef.current = requestAnimationFrame(scroll);
      setIsAutoScrolling(true);
    }
  }, [isAutoScrolling]);

  // Clean up auto-scroll on unmount
  React.useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        window.cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, []);

  const captureLink = async () => {
    // Existing captureLink implementation
    // Reference to CaptureLinkButton.js for implementation details
    startLine: 8
    endLine: 63
  };

  return (
    <NavContainer>
      <NavButton onClick={handleRefresh}>↻</NavButton>
      <NavButton 
        onClick={captureLink}
        className={isClicked ? 'clicked' : ''}
      >
        +
      </NavButton>
      <NavButton 
        onClick={toggleAutoScroll}
        $isActive={isAutoScrolling}
      >
        ⟳
      </NavButton>
      <NavButton onClick={scrollToEnd}>↓</NavButton>
    </NavContainer>
  );
};

export default NavBar;
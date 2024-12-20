import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { SkipForward, Play, PlusCircle, RefreshCw } from 'react-feather'; // Import the necessary Feather icons

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
  padding: 0px;
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

  const toggleAutoScroll = () => {
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
  };

  React.useEffect(() => {
    return () => {
      if (autoScrollRef.current) {
        window.cancelAnimationFrame(autoScrollRef.current);
      }
    };
  }, []);

  const generateSessionId = () => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
      return (Math.random() * 16 | 0).toString(16);
    });
  };

  const captureLink = async () => {
    try {
      const link = await navigator.clipboard.readText();
      const validPrefix = 'https://chatgpt.com/share/';
      
      if (!link || !link.startsWith(validPrefix)) {
        alert(`Clipboard must contain a valid ChatGPT share link`);
        return;
      }

      const userData = {
        deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        operatingSystem: navigator.platform,
        browser: navigator.userAgent,
        browserVersion: navigator.appVersion,
        sessionId: sessionStorage.getItem('sessionId') || generateSessionId(),
        timestamp: new Date().toISOString(),
        referrerUrl: document.referrer,
        pageUrl: window.location.href,
      };

      if (!sessionStorage.getItem('sessionId')) {
        sessionStorage.setItem('sessionId', userData.sessionId);
      }

      const response = await fetch('/api/links', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ link, userData }),
      });

      if (!response.ok) {
        throw new Error('Failed to save link');
      }

      alert('Link captured!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to capture link');
    }
  };

  return (
    <NavContainer>
      <NavButton onClick={handleRefresh}>
        <RefreshCw /> {/* Use the RefreshCw icon here */}
      </NavButton>
      <NavButton onClick={captureLink}>
        <PlusCircle /> {/* Use the PlusCircle icon here */}
      </NavButton>
      <NavButton 
        onClick={toggleAutoScroll}
        $isActive={isAutoScrolling}
      >
        <Play /> {/* Use the Play icon here */}
      </NavButton>
      <NavButton onClick={scrollToEnd}>
        <SkipForward /> {/* Use the SkipForward icon here */}
      </NavButton>
    </NavContainer>
  );
};

export default NavBar;
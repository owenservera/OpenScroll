import React, { useState, useRef, useEffect } from 'react';

interface RadialMenuProps {
  onScrollClick: () => void;
  onShareClick: () => void;
}

const RadialMenu: React.FC<RadialMenuProps> = ({ onScrollClick, onShareClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<'scroll' | 'share' | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStartRef.current = { x: touch.clientX, y: touch.clientY };
      setIsOpen(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isOpen || !touchStartRef.current) return;

      const touch = e.touches[0];
      const deltaY = touchStartRef.current.y - touch.clientY;
      const deltaX = touch.clientX - touchStartRef.current.x;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      if (deltaY > 60) {
        if (angle > -45 && angle < 45) {
          setSelectedOption('share');
        } else {
          setSelectedOption('scroll');
        }
      } else {
        setSelectedOption(null);
      }
    };

    const handleTouchEnd = () => {
      if (selectedOption === 'scroll') {
        onScrollClick();
      } else if (selectedOption === 'share') {
        onShareClick();
      }
      setIsOpen(false);
      setSelectedOption(null);
      touchStartRef.current = null;
    };

    const menuElement = menuRef.current;
    if (menuElement) {
      menuElement.addEventListener('touchstart', handleTouchStart, { passive: true });
      menuElement.addEventListener('touchmove', handleTouchMove, { passive: true });
      menuElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (menuElement) {
        menuElement.removeEventListener('touchstart', handleTouchStart);
        menuElement.removeEventListener('touchmove', handleTouchMove);
        menuElement.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isOpen, selectedOption, onScrollClick, onShareClick]);

  return (
    <div className="radial-menu-container" ref={menuRef}>
      <button className="menu-button">
        ☰
      </button>
      <button 
        className={`scroll-button ${isOpen ? 'visible' : ''}`}
        style={{
          transform: selectedOption === 'scroll' ? 'translate(0, -80px) scale(1.1)' : undefined
        }}
      >
        ↑
      </button>
      <button 
        className={`share-button ${isOpen ? 'visible' : ''}`}
        style={{
          transform: selectedOption === 'share' ? 'translate(-60px, -60px) scale(1.1)' : undefined
        }}
      >
        ⇱
      </button>
    </div>
  );
};

export default RadialMenu;
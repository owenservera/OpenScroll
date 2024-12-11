// example/lib/CaptureLinkButton.js
import React, { useState } from 'react';

const CaptureLinkButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const captureLink = async () => {
    try {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);

      const link = await navigator.clipboard.readText();

      // Validate the link format
      const validPrefix = 'https://chatgpt.com/share/';
      if (!link || !link.startsWith(validPrefix)) {
        alert(`Clipboard does not contain a valid link. It must start with "${validPrefix}".`);
        return;
      }

      // Capture contextual data
      const userData = {
        deviceType: /Mobi|Android/i.test(navigator.userAgent) ? 'mobile' : 'desktop',
        operatingSystem: navigator.platform,
        browser: navigator.userAgent,
        browserVersion: navigator.appVersion,
        ipAddress: '', // IP address needs to be captured server-side
        geolocation: null, // Geolocation requires user consent
        sessionId: sessionStorage.getItem('sessionId') || generateSessionId(),
        timestamp: new Date().toISOString(),
        referrerUrl: document.referrer,
        appVersion: '1.0.0',
        environment: process.env.NODE_ENV,
        pageUrl: window.location.href,
        buttonId: 'capture-link-button',
        userActions: ['scroll', 'click'], // Example actions
      };

      // Save session ID if not already saved
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
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save link');
      }

      alert('Link captured and saved successfully!');
    } catch (error) {
      console.error('Error capturing and saving the link:', error);
      alert(`Failed to capture and save the link. Error: ${error.message}`);
    }
  };

  // Helper function to generate a session ID
  const generateSessionId = () => {
    return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
      return (Math.random() * 16 | 0).toString(16);
    });
  };

  return (
    <div>
      {/* SVG for Pixelation */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
        <filter id="pixelate">
          <feFlood floodColor="black" result="bg" />
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="turbulence" />
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="20" />
          <feMorphology operator="dilate" radius="1" />
          <feComponentTransfer>
            <feFuncR type="discrete" tableValues="0 1" />
            <feFuncG type="discrete" tableValues="0 1" />
            <feFuncB type="discrete" tableValues="0 1" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" in2="bg" mode="multiply" />
        </filter>
      </svg>

      {/* Button with Hover Effect */}
      <button
        onClick={captureLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`capture-link-button ${isClicked ? 'clicked' : ''}`}
        style={{
          filter: isClicked ? 'url(#pixelate)' : 'none',
          transition: 'filter 1s ease',
          width: '100px', // Set a fixed width
          padding: '1rem',
          textAlign: 'center', // Center the text
        }}
      >
        {isHovered ? 'LINK' : 'SHARE'}
      </button>
    </div>
  );
};

export default CaptureLinkButton;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Conversations from '@/lib/Conversations';
import RadialMenu from '@/components/RadialMenu';

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px 10px;
  overflow-x: hidden;
`;

const MobileHomePage = () => {
  const router = useRouter();

  useEffect(() => {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']]
      },
      svg: { fontCache: 'global' }
    };

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleShare = async () => {
    try {
      const link = await navigator.clipboard.readText();
      const validPrefix = 'https://chatgpt.com/share/';
      if (!link || !link.startsWith(validPrefix)) {
        alert(`Clipboard does not contain a valid link. It must start with "${validPrefix}".`);
        return;
      }
      // Add your existing share functionality here
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <MobileContainer>
      <Conversations />
      <RadialMenu 
        onScrollClick={() => router.push('/about')}
        onShareClick={handleShare}
      />
    </MobileContainer>
  );
};

export default MobileHomePage;
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Conversations from '@/lib/Conversations';
import ScrollButton from '@/lib/ScrollButton';
import CaptureLinkButton from '@/lib/CaptureLinkButton';

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #000;
  padding: 20px 10px;
  overflow-x: hidden;
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  z-index: 1000;
`;

const MobileHomePage = () => {
  useEffect(() => {
    // MathJax configuration (keeping your existing math rendering setup)
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

  return (
    <MobileContainer>
      <ButtonContainer>
        <ScrollButton />
        <CaptureLinkButton />
      </ButtonContainer>
      <Conversations />
    </MobileContainer>
  );
};

export default MobileHomePage;
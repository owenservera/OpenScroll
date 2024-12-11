// example/pages/index.tsx
import React, { useEffect } from 'react';
import Conversations from '../lib/Conversations';
import ScrollButton from '../lib/ScrollButton';
import CaptureLinkButton from '../lib/CaptureLinkButton';
import '../styles/test.css';


const HomePage: React.FC = () => {
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

  return (
    <div className="App">
     
      <ScrollButton />
      <Conversations />
      <CaptureLinkButton />
      
    </div>
  );
};

export default HomePage;
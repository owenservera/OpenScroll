declare global {
  interface Window {
    MathJax: {
      tex: {
        inlineMath: [string, string][];
        displayMath: [string, string][];
      };
      svg: {
        fontCache: string;
      };
      typesetPromise?: () => Promise<void>;
    };
  }
}

export {};
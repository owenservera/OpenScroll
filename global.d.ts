/// <reference types="react" />
/// <reference types="styled-components" />

declare global {
  namespace React {
    // Add React types that might be missing
    export import useEffect = React.useEffect;
    export import useRef = React.useRef;
    export import useState = React.useState;
  }
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

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

export {};
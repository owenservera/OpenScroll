import React, { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import useConversations from './useConversations';
import { initialConversationConfig } from './initialize';

const Conversations = ({ initialConversations = [] }) => {
  const {
    conversations,
    hasMore,
    loadMore,
    error,
  } = useConversations({
    initialConversations,
    initialPage: 1,
    limit: 1,
    autoFetch: true,
    specificId: initialConversationConfig.specificId,
  });

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
    script.onload = () => {
      if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise().catch((err) => console.error('MathJax typeset error:', err));
    }
  }, [conversations]);

  const renderContent = (content) => {
    if (content.type === "text") {
      const processedData = content.data.replace(/\\u003c/g, '<').replace(/\\u003e/g, '>');
      const markdownContent = marked(processedData);
      return <div style={{ color: content.color }} dangerouslySetInnerHTML={{ __html: markdownContent }} />;
    } else if (content.type === "code") {
      const highlightedCode = hljs.highlight(content.language, content.data).value;
      return (
        <div>
          <div className="code-header">
            <em>{content.language}</em>
          </div>
          <pre>
            <code className={`hljs language-${content.language}`} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </pre>
        </div>
      );
    }
    return null;
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <InfiniteScroll
      dataLength={conversations.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={<p>No more conversations</p>}
      scrollThreshold={0.8}
    >
      {conversations.map((conversation, convoIndex) => (
        <div key={convoIndex} className="conversation-bubble">
          <h1 className="conversation-title">
            {conversation.conversation_title ? conversation.conversation_title.replace(/^ChatGPT - /, '') : 'Untitled Conversation'}
          </h1>
          {conversation.messages.map((message, msgIndex) => (
            <div key={msgIndex} className={`message ${message.role === 'user' ? 'user' : 'assistant'}`}>
              <div className={`message-content ${message.role === 'user' ? 'user' : 'assistant'}`}>
                {Array.isArray(message.content) ? (
                  message.content.map((content, contentIndex) => (
                    <div key={contentIndex}>{renderContent(content)}</div>
                  ))
                ) : (
                  <div>{renderContent(message.content)}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </InfiniteScroll>
  );
};

export default Conversations;
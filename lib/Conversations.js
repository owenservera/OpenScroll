import React, { useEffect } from 'react';
import { ChevronDown, ChevronUp, User, MessageSquare, Code } from 'react-feather';
import InfiniteScroll from 'react-infinite-scroll-component';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import useConversations from './useConversations';
import { initialConversationConfig } from './initialize';

const Conversations = ({ initialConversations = [] }) => {
  const [collapsedConvos, setCollapsedConvos] = React.useState(new Set());

  const getFirstMessagePreview = (messages) => {
    if (!messages || messages.length === 0) return '';
    const firstMessage = messages[0];
    let preview = '';
    
    if (Array.isArray(firstMessage.content)) {
      preview = firstMessage.content[0]?.data || '';
    } else {
      preview = firstMessage.content?.data || '';
    }
    
    // Get first line and limit length
    const firstLine = preview.split('\n')[0].trim();
    return firstLine.length > 100 ? firstLine.substring(0, 100) + '.........' : firstLine + '.........';
  };

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
            <Code size={16} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
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
          <h1 
            className="conversation-title" 
            onClick={() => {
              setCollapsedConvos(prev => {
                const newSet = new Set(prev);
                if (newSet.has(convoIndex)) {
                  newSet.delete(convoIndex);
                } else {
                  newSet.add(convoIndex);
                }
                return newSet;
              });
            }}
            style={{ cursor: 'pointer' }}
          >
            {conversation.conversation_title ? conversation.conversation_title.replace(/^ChatGPT - /, '') : 'Untitled Conversation'}
            <span style={{ marginLeft: '8px', display: 'inline-flex', alignItems: 'center' }}>
              {collapsedConvos.has(convoIndex) ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
            </span>
          </h1>
          {collapsedConvos.has(convoIndex) && (
            <div className="conversation-preview">
              {getFirstMessagePreview(conversation.messages)}
            </div>
          )}
          {!collapsedConvos.has(convoIndex) && conversation.messages.map((message, msgIndex) => (
            <div key={msgIndex} className={`message ${message.role === 'user' ? 'user' : 'assistant'}`}>
              <div className="message-icon">
                {message.role === 'user' ? <User size={16} /> : <MessageSquare size={16} />}
              </div>
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

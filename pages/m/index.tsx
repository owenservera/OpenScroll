import React from 'react';
import styled from 'styled-components';
import Conversations from '../../lib/Conversations';
import NavBar from '../../components/NavBar';

const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  
  /* Adjust conversation bubble width for mobile */
  .conversation-bubble {
    max-width: 98%;
    margin: 0.5rem auto;
    padding: 0.5rem;
  }

  /* Adjust message widths and padding for mobile */
  .message.user {
    max-width: 90%;
    padding: 4px 8px;
    margin-bottom: 12px;  /* Increased space between user and assistant */
    line-height: 1.2;
  }

  .message.assistant {
    width: 100%;
    max-width: 100%;
    padding: 4px;
  }

  /* Remove extra padding from message content */
  .message-content {
    padding: 0;
    margin: 0;
    width: 100%;
  }

  /* Make assistant message content use full width */
  .message.assistant .message-content {
    width: 100%;
    padding: 0 4px;
  }

  /* Remove extra padding from paragraphs inside messages */
  .message p {
    margin: 0;
    padding: 2px 0;
    width: 100%;
  }

  /* Adjust title size and prevent overflow for mobile */
  .conversation-title {
    font-size: 1.5rem;
    margin: 0.1rem 0 2rem;  /* Increased bottom margin after title */
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    padding-right: 10px;
  }

  /* Ensure code blocks use full width */
  pre {
    width: 100%;
    margin: 4px 0;
    padding: 8px;
  }

  /* Ensure tables use full width */
  table {
    width: 100%;
    margin: 4px 0;
  }
`;

export default function Mobile() {
  return (
    <MobileContainer>
      <NavBar />
      <Conversations />
    </MobileContainer>
  );
}

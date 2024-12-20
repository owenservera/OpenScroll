import React from 'react';
import styled from 'styled-components';

// Container for the main content
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Align to top */
  min-height: 100vh; /* Use min-height for better flexibility */
  background-color: #000;
  color: #39ff14;
  font-family: 'Courier New', monospace;
  padding: 20px;
  box-sizing: border-box;
`;

// Title with a glowing text effect
const Title = styled.h1`
  font-size: 1rem;
  margin-bottom: 0.rem;
  letter-spacing: 0.1rem;
  text-align: center;
  text-shadow: 0 0 20px rgba(57, 255, 20, 0.7);
  animation: glow 1.5s ease-in-out infinite alternate;

  @keyframes glow {
    0% {
      text-shadow: 0 0 20px rgba(57, 255, 20, 0.7);
    }
    100% {
      text-shadow: 0 0 40px rgba(57, 255, 20, 1);
    }
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

// Description with neon green text
const Description = styled.p`
  font-size: 2.5rem;
  margin-bottom: 0rem;
  line-height: 1.6;
  text-align: center;
  opacity: 0.8;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

// Phase Section with hover effects on individual lines
const Phase = styled.div`
  
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 1rem;
  border-radius: 10px;
  background-color: #222;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    transform: translateY(-0.5rem);
    background-color: #333;
  }

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
    opacity: 0.8;

    &:hover {
      color: #fff; /* Hover effect to change text color */
      text-decoration: underline; /* Underline on hover */
    }
  }
`;

// Core Principles Section with simple design
const CorePrinciples = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
    opacity: 0.8;

    &:hover {
      color: #fff; /* Hover effect to change text color */
      text-decoration: underline; /* Underline on hover */
    }
  }
`;

const IndexPage = () => {
  return (
    <Container>
      <Title>the_SCROLL</Title>
      <Description></Description>

      <Phase>
        <h2>PHASE 0,0</h2>
        <p>Random Auto Scroll.</p>
        <p>No accounts.</p>
        <p>No tags.</p>
      </Phase>

      <Phase>
        <h2>PHASE 0,+</h2>
        <p>YOU DECIDE WHAT WE BUILD.</p>
        <p>Watch patterns emerge.</p>
        <p>Vote on new features.</p>
        <p>Shape what comes next.</p>
      </Phase>

      <CorePrinciples>
        <h2>CORE PRINCIPLES</h2>
        <p>NO VIP</p>
      </CorePrinciples>
    </Container>
  );
};

export default IndexPage;
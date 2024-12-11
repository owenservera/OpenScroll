import React from 'react';
import styled from 'styled-components';
import Conversations from '@/lib/Conversations';
import NavBar from '@/components/NavBar';

const MobileContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #000;
  color: #fff;
  padding: 20px 20px 80px; // Added bottom padding for NavBar
`;

const MobileHomePage = () => {
  return (
    <>
      <MobileContainer>
        <Conversations />
      </MobileContainer>
      <NavBar />
    </>
  );
};

export default MobileHomePage;
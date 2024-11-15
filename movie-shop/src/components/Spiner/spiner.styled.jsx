import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  justify-self: center;
  margin-top: 20px;
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  animation: ${rotate} 2s linear infinite;
  position: relative;
`;


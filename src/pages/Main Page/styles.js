import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const WebpageContainer = styled.div`
  animation: ${fadeIn} 3s ease-in-out;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;

// Notes:
// Keyframes are used to specify the behavior of one cycle of a CSS animation.
// They define what the animation should do at each stage of one cycle.

// Keyframes are defined with percentages. 0% represents the start of the animation,
// 100% represents the completion of the animation, and 50% represents the midpoint. You can also use the keywords from and to instead of 0% and 100% respectively.

export const ScrollArea = styled.div`
  scroll-snap-align: start;
  height: 100vh; // Each section is also viewport height
  width: 100%; // Set the width to full width
  position: relative; // Set position to relative
`;

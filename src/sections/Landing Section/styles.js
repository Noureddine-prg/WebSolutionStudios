import styled from "styled-components";

export const SectionContainer = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  max-width: 100vw;
  color: white;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100vh;
  z-index: -1; /* Ensure divs appear in front of the video */
`;

export const LandingContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const LandingText = styled.text`
  margin: 50px 0 250px 0;
  font-size: 70px;
  background-color: ${(props) => props.theme.PrimaryColor};
  padding: 20px;
  border-radius: 10px;
  font-family: monospace;
`;

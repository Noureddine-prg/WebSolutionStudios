import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1; /* Ensure divs appear in front of the video */
`;

export const GlassOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(3px);
`;

export const Loader = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation: animate 0.4s linear infinite;
  background: linear-gradient(
    ${(props) => props.theme.wheelPrimaryColor},
    ${(props) => props.theme.wheelSecondaryColor}
  );
  z-index: 3;
  box-shadow: 0 0 10px ${(props) => props.theme.wheelPrimaryColor},
    0 0 20px ${(props) => props.theme.wheelPrimaryColor},
    0 0 30px ${(props) => props.theme.wheelPrimaryColor},
    0 0 40px ${(props) => props.theme.wheelPrimaryColor};

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: linear-gradient(
      ${(props) => props.theme.wheelPrimaryColor},
      ${(props) => props.theme.wheelSecondaryColor}
    );

    &:nth-child(1) {
      filter: blur(5px);
      opacity: 0.8;
    }

    &:nth-child(2) {
      filter: blur(10px);
      opacity: 0.6;
    }

    &:nth-child(3) {
      filter: blur(15px);
      opacity: 0.4;
    }

    &:nth-child(4) {
      filter: blur(20px);
      opacity: 0.2;
    }

    &::after {
      content: "";
      position: absolute;
      top: 10px;
      left: 10px;
      right: 10px;
      bottom: 10px;
      border-radius: 50%;
      background-color: linear-gradient(#14ffe9, #ffeb3b, #232334);
    }
  }
`;

export const InnerCircle = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background-color: ${(props) => props.theme.loadingBackgroundColor};
`;

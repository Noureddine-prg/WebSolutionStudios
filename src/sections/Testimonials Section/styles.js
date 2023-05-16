import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.SecondaryColor};
  height: 100vh;
  max-width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`;

export const BottomSection = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-around;
`;

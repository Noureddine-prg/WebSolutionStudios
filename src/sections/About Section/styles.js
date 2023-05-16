import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.PrimaryColor};
  height: 100vh;
  max-width: 100vw;
  margin: 0;
  padding: 100px 40px 0 40px;
`;

export const TextWrapper = styled.div`
  height: 25%;
  margin: 0px 100px -10px 100px;
`;

export const AboutText = styled.text`
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const AboutHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const HeaderText = styled.text`
  font-size: 30px;
  font-weight: bold;
  color: white;
  text-decoration: underline;
`;

export const TeamCardsContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &:nth-child(even) {
    margin-bottom: 40px;
  }
`;

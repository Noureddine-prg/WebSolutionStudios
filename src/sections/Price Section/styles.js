import styled from "styled-components";

export const SectionContainer = styled.div`
  background-color: ${(props) => props.theme.PrimaryColor};
  height: 100vh;
  max-width: 100%;
  margin: 0;
  padding: 100px;
`;

export const SectionHeaderContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
`;
export const SectionHeaderText = styled.text`
  color: white;
  font-size: 50px;
`;

export const PriceCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50%;
  z-index: 1;
  position: relative;
`;

export const HorizontalBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.SecondaryColor};
  z-index: -1;
  margin-top: 50px;
`;

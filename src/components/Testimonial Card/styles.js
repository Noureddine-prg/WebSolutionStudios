import styled from "styled-components";

export const TestContainer = styled.div`
  background-color: ${(props) => props.theme.PrimaryColor};
  width: 500px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: solid 3px;
  padding: 10px;
  box-shadow: black 0px 0px 0px 2px inset,
    rgb(230, 230, 230) 10px -10px 0px -3px, rgb(1, 1, 1) 10px -10px,
    rgb(1, 1, 1) 20px -20px 0px -3px, rgb(90, 90, 90) 20px -20px,
    rgb(1, 1, 1) 30px -30px 0px -3px;
`;

export const ClientText = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const CompanyName = styled.p`
  color: white;
  font-size: 20px;
`;

import styled from "styled-components";

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  border: 5px solid ${(props) => props.theme.PrimaryColor};
  border-radius: 50%;
  margin: 0;
`;

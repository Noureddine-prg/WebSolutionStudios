import styled from "styled-components";

export const TeamCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 350px;
`;

export const TeamCardImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
`;
export const TeamCardText = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TeamCardName = styled.text`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
`;

export const TeamCardRole = styled.text`
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin-top: 10px;
`;

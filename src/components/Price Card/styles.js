import styled from "styled-components";

export const CardContainer = styled.div`
  height: 120%;
  width: 300px;
  background-color: white;
  margin: auto;
  border: solid black;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`;
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const PlanTier = styled.text`
  font-size: 25px;
  font-weight: bold;
`;
export const PlanCost = styled.text`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 600;
`;
export const Plus = styled.text`
  margin-top: 5px;
  font-size: 40px;
`;
export const CardText = styled.text`
  margin-top: 15px;
  font-weight: bold;
  font-size: 15px;
`;

export const Line = styled.div`
  display: flex;

  border: 1px solid;
  width: 70%;
  margin: auto;
`;

export const FeatureTextContainer = styled.div``;

export const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 60px;
`;

export const Feature = styled.li`
  font-size: 16px;
  font-weight: bold;
  color: black;
  margin: 15px;
`;

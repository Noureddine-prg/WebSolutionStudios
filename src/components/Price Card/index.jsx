import React from "react";
import * as S from "./styles";

const PriceCard = ({ planTier, planCost, features }) => {
  return (
    <S.CardContainer>
      <S.CardHeader>
        <S.PlanTier>{planTier}</S.PlanTier>
        <S.PlanCost>${planCost}/Month</S.PlanCost>
        <S.Plus>+</S.Plus>
        <S.CardText>Base Cost</S.CardText>
      </S.CardHeader>
      <S.Line />
      <S.FeatureTextContainer>
        <S.FeaturesList>
          {features.map((feature, index) => (
            <S.Feature key={index}>-{feature}</S.Feature>
          ))}
        </S.FeaturesList>
      </S.FeatureTextContainer>
    </S.CardContainer>
  );
};

export default PriceCard;

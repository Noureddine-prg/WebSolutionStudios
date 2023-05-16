import React from "react";
import * as S from "./styles";
import PriceCard from "../../components/Price Card";

const Price = () => {
  return (
    <S.SectionContainer>
      <S.SectionHeaderContainer>
        <S.SectionHeaderText>
          Creating and maintaining websites at an affordable cost
        </S.SectionHeaderText>
      </S.SectionHeaderContainer>

      <S.PriceCardContainer>
        <S.HorizontalBox />
        <PriceCard
          planTier={"Basic"}
          planCost={"100"}
          features={[
            "Regular website backups",
            "Security updates",
            "Technical support during business hours",
          ]}
        />
        <PriceCard
          planTier={"Standard"}
          planCost={"250"}
          features={[
            "Everything in Basic, plus:",
            "Content updates",
            "Broken link checks",
            "Google Analytics tracking",
          ]}
        />
        <PriceCard
          planTier={"Premium"}
          planCost={"500"}
          features={[
            "Everything in Standard, plus:",
            "Priority technical support",
            "Advanced security features",
            "Monthly SEO reports",
          ]}
        />
      </S.PriceCardContainer>
    </S.SectionContainer>
  );
};

export default Price;

// Price Card Component Needs to be created

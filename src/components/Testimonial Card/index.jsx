import React from "react";
import * as S from "./styles";

const TestimonialCard = ({ company, quote }) => {
  return (
    <S.TestContainer>
      <S.ClientText>{quote}</S.ClientText>
      <S.CompanyName>- {company}</S.CompanyName>
    </S.TestContainer>
  );
};

export default TestimonialCard;

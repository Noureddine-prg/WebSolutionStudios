import React from "react";
import * as S from './styles';

const TeamCard = ({ image, name, role }) => {
    return (
      <S.TeamCardContainer>
        <S.TeamCardImage src={image}></S.TeamCardImage>
  
        <S.TeamCardText>
          <S.TeamCardName>{name}</S.TeamCardName>
          <S.TeamCardRole>{role}</S.TeamCardRole>
        </S.TeamCardText>
      </S.TeamCardContainer>
    );
};

export default TeamCard;

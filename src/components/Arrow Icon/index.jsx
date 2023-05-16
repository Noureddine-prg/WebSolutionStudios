import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import * as S from "./styles";

const ArrowIcon = () => {
  return (
    <a href="#about">
      <S.IconWrapper>
        <FontAwesomeIcon icon={faArrowDown} color="white" />
      </S.IconWrapper>
    </a>
  );
};

export default ArrowIcon;

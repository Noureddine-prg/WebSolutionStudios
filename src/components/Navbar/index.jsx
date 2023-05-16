import React, { useState, useEffect } from "react";
import * as S from "./styles";

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarContainer>
        <S.NavbarLinks>
          <S.NavbarElement>
            <S.NavbarLink href="#about">About</S.NavbarLink>
          </S.NavbarElement>

          <S.NavbarElement>
            <S.NavbarLink href="#clients">Clients</S.NavbarLink>
          </S.NavbarElement>

          <S.NavbarElement>
            <S.NavbarLink href="#price">Price</S.NavbarLink>
          </S.NavbarElement>

          <S.NavbarElement>
            <S.NavbarLink href="#contact">Contact</S.NavbarLink>
          </S.NavbarElement>
        </S.NavbarLinks>
      </S.NavbarContainer>
    </S.NavbarWrapper>
  );
};

export default Navbar;

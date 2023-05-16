import React from "react";
import * as S from "./styles";
import Landing from "../../sections/Landing Section";
import About from "../../sections/About Section";
import Testimonials from "../../sections/Testimonials Section";
import Price from "../../sections/Price Section";
import Contact from "../../sections/Contact";
import Navbar from "../../components/Navbar";

const Index = () => {
  return (
    <S.WebpageContainer>
      <Navbar />

      <S.ScrollArea id="landing">
        <Landing />
      </S.ScrollArea>

      <S.ScrollArea id="about">
        <About />
      </S.ScrollArea>

      <S.ScrollArea id="clients">
        <Testimonials />
      </S.ScrollArea>

      <S.ScrollArea id="price">
        <Price />
      </S.ScrollArea>

      <S.ScrollArea id="contact">
        <Contact />
      </S.ScrollArea>
    </S.WebpageContainer>
  );
};

export default Index;

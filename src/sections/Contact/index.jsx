import React from "react";
import * as S from "./styles";

const Contact = () => {
  return (
    <>
      <S.Container>
        <S.Title>We would love to hear from you!</S.Title>
        <S.Form>
          <S.FormCol size={5}>
            <S.InputGroup>
              <S.InputLabel>Your Name</S.InputLabel>
              <S.InputField />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputLabel>Your Email</S.InputLabel>
              <S.InputField />
            </S.InputGroup>
            <S.InputGroup>
              <S.InputLabel>Project Budget</S.InputLabel>
              <S.InputField />
            </S.InputGroup>
            <S.SubmitButton type="submit" value="Submit" />
          </S.FormCol>
          <S.FormCol size={7}>
            <S.InputLabel>Tell us about your project</S.InputLabel>
            <S.TextArea type="text-area" />
          </S.FormCol>
        </S.Form>
      </S.Container>
    </>
  );
};

export default Contact;

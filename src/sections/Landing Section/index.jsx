import React from "react";
import * as S from './styles';
import backgroundVideo from './landingvideo.mp4';
import ArrowIcon from "../../components/Arrow Icon";

const Landing = () => 
{
    return(
    <>
        <S.SectionContainer>
            <S.VideoBackground autoPlay loop muted>
                <source src={backgroundVideo} type="video/mp4"/>
            </S.VideoBackground>

            <S.LandingContent>
                <S.LandingText>Web Solution Studios</S.LandingText>
                <ArrowIcon />
            </S.LandingContent>
        </S.SectionContainer>
    </>
    );
}

export default Landing;
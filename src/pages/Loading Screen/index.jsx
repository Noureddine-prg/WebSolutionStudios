import React from "react";
import * as S from './styles';
import backgroundVideo from '../../sections/Landing Section/landingvideo.mp4';


const LoadingScreen = () => 
{
    return(
        <>
            <S.MainContainer>
                <S.VideoBackground autoPlay loop muted>
                    <source src={backgroundVideo} type="video/mp4"/>
                </S.VideoBackground>

                <S.Loader>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <S.InnerCircle />
                </S.Loader>
                <S.GlassOverlay/>
            </S.MainContainer>
        </>
    );    
}


export default LoadingScreen
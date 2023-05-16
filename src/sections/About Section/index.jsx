import React from 'react';
import * as S from './styles';
import TeamCard from '../../components/Team Card/index';
import pfp1 from '../../images/pfp1.jpg';
import pfp2 from '../../images/pfp2.jpg';
import pfp3 from '../../images/pfp3.jpg';
import pfp4 from '../../images/pfp4.jpg';
import pfp5 from '../../images/pfp5.jpg';

const About = () => 
{
    return(
        <S.SectionContainer>
            <S.TextWrapper>
                <S.AboutText>
                    At Web Solution Studios, we strive to harness the power of digital connectivity by providing exceptional web development services 
                    tailored to the unique needs of any business. Our experienced team of experts leverages their extensive knowledge in software engineering
                    and web design to deliver custom websites that are both functional and visually captivating. We are dedicated to offering 
                    personalized solutions, ensuring that our clients' online objectives are met with unwavering commitment to excellence, meticulous attention to detail, and a relentless 
                    focus on customer satisfaction. Together, we strive to empower businesses to thrive in a connected world by transforming their digital presence.
                </S.AboutText>
            </S.TextWrapper>

            <S.AboutHeader>
                <S.HeaderText>
                    Our Team
                </S.HeaderText>
            </S.AboutHeader>

            <S.TeamCardsContainer>
                <TeamCard image={pfp1} name={"Noureddine Sidiabed"} role={"Chief Executive Officer"}/>
                <TeamCard image={pfp2} name={"John Doe"} role={"Chief Technology Officer"} />
                <TeamCard image={pfp4} name={"Emily Johnson"} role={"Project Manager"} />
                <TeamCard image={pfp3} name={"David Williams"} role={"Lead Web Developer"} />
                <TeamCard image={pfp5} name={"Laura Brown"} role={"UI/UX Designer"} />
            </S.TeamCardsContainer>


        </S.SectionContainer>
    );
}

export default About; 


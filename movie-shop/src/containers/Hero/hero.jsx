import React from "react";
import { Description, HeroContainer, Title, Trailer, Wrapper } from "./hero.styled";
import { Container } from "../App/app.styled";

const Hero = () => {
    return(
        <HeroContainer>
            <Container>
                <Wrapper>
                    <Title>John Wick 3 : Parabellum</Title>
                    <Description>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</Description>
                    <Trailer href="https://www.youtube.com/watch?v=M7XM597XO94" target="_blank">WATCH TRAILER</Trailer>
                </Wrapper> 
            </Container>
        </HeroContainer>
    )
}

export default Hero
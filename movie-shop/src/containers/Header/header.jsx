import React from "react";
import { Container } from "../App/app.styled";
import { Logo, Name } from "./header.styled";
import Navigation from "../Navigation/nav";

const Header = ({ isBlack }) => {
    const color = () => {
        return isBlack ? 'black' : 'white';
    }
    return(
        <Container>
            <Logo src='/tv.png'/>
            <Name color={color}>MovieBox</Name>
            <Navigation isBlack={isBlack}/>
        </Container>
    )
}

export default Header
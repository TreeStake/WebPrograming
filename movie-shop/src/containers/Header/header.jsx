import React from "react";
import { Container } from "../App/app.styled";
import { Logo, Name } from "./header.styled";
import Navigation from "../Navigation/nav";

const Header = () => {
    return(
        <Container>
            <Logo src='/tv.png'/>
            <Name>MovieBox</Name>
            <Navigation/>
        </Container>
    )
}

export default Header
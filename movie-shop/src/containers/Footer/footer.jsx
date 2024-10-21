import React from "react";
import { Container } from "../App/app.styled";
import { Copywrite, FooterContainer, IconItem, IconList, LinkItem } from "./footer.styled";

const Footer = () => {
    return(
        <Container>
            <FooterContainer>
                <IconList>
                    <IconItem><a href="https://www.facebook.com/?locale=uk_UA"><img src="/facebook.svg" alt="Я іконка"/></a></IconItem>
                    <IconItem><a href="https://www.facebook.com/?locale=uk_UA"><img src="/instagram.svg" alt="Я іконка"/></a></IconItem>
                    <IconItem><a href="https://www.facebook.com/?locale=uk_UA"><img src="/twitter.svg" alt="Я іконка"/></a></IconItem>
                    <IconItem><a href="https://www.facebook.com/?locale=uk_UA"><img src="/youtube.svg" alt="Я іконка"/></a></IconItem>
                </IconList>
                <IconList>
                    <LinkItem><a href="https://www.facebook.com/?locale=uk_UA">Conditions of Use</a></LinkItem>
                    <LinkItem><a href="https://www.facebook.com/?locale=uk_UA">Privacy & Policy</a></LinkItem>
                    <LinkItem><a href="https://www.facebook.com/?locale=uk_UA">Press Room</a></LinkItem>
                </IconList>
                <Copywrite>© 2024 MovieBox by Stas Zhurakovskyi</Copywrite>
            </FooterContainer> 
        </Container>
    )
}

export default Footer
import React from "react";
import { Container } from "../App/app.styled";
import { Logo, Name, User, UserLogout } from "./header.styled";
import Navigation from "../Navigation/nav";
import { clearAuthToken, isAuthenticated } from "../../api";
import { useNavigate } from "react-router-dom";

const Header = ({ isBlack }) => {
    const color = () => {
        return isBlack ? 'black' : 'white';
    }
    const navigate = useNavigate()

    const handleLogout = () => {
        clearAuthToken();
        navigate('/')
    };

    return(
        <Container>
            <Logo src='/tv.png'/>
            <Name color={color}>MovieBox</Name>
            <Navigation isBlack={isBlack}/>
            {isAuthenticated() ? <UserLogout color={color} onClick={handleLogout}>LOGOUT</UserLogout> :
            <User to='/login' color={color}>LOGIN</User>}
        </Container>
    )
}

export default Header
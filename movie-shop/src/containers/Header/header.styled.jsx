import styled from '@emotion/styled'
import { Link } from '../Navigation/nav.styled'

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    align-self: center;`

export const Name = styled.p`
    color: ${props => (props.color())};
    font-size: 24px;
    font-weight: 600;
    margin-left: 25px;
    align-self: center;
`

export const User = styled(Link)`
    font-weight: 700;
    margin-left: 350px;
    align-self: center;
`

export const UserLogout = styled.p`
    font-weight: 700;
    margin-left: 350px;
    align-self: center;
    cursor: pointer;
    color: ${props => (props.color())};
`
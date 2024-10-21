import styled from '@emotion/styled'

export const NavList = styled.ul`
    display: flex;
    padding: 0px;
    list-style: none;
    margin-left: 250px;
    border-radius: 10px;
    border: 2px solid white;`

export const NavItem = styled.li`
    padding-block: 12px;
    padding-inline: 25px;
    align-self: center;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.3)
    };
`

export const Link = styled.a`
    font-size: 16px;
    font-weight: 500;
    color: white;
`


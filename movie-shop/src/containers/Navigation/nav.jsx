import { NavItem, NavList, Link } from "./nav.styled";

const Navigation = ({ isBlack }) => {
    const color = () => {
        return isBlack ? 'black' : 'white';
    }
    return(
        <NavList>
            <NavItem><Link to='/' color={color}>Home</Link></NavItem>
            <NavItem><Link to='/catalog' color={color}>Catalog</Link></NavItem>
            <NavItem><Link color={color}>Card</Link></NavItem>
        </NavList>
    )
}

export default Navigation
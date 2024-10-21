import { NavItem, NavList, Link } from "./nav.styled";

const Navigation = () => {
    return(
        <NavList>
            <NavItem><Link>Home</Link></NavItem>
            <NavItem><Link>Catalog</Link></NavItem>
            <NavItem><Link>Card</Link></NavItem>
        </NavList>
    )
}

export default Navigation
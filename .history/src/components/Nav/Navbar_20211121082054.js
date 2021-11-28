
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

import { NavItem, NavList } from './styles';

const routes = [
    {
        name: "Countdown timer",
        ext: "/countdown-timer",
    },
    {
        name: "Stopwatch",
        ext: "/stopwatch",
    },
    {
        name: "Timer chain",
        ext: "/timer-chain",
    },
 ];

const Navbar = () => {
    const location = useLocation();

    const path = location.pathname;

    const navItems = routes.map((item) => {
        const selected = item.ext === path;

        return (
            <NavItem selected={selected} key={item.name}>
                <NavLink to={`${item.ext}`}>
                    <span style={{maxWidth: '50px'}}>{item.name}</span>
                </NavLink>
            </NavItem>
        );
    });

    return (
        <NavList style={{display: 'flex', justifyContent: 'center'}}>
            {navItems}
        </NavList>
    );
};

export default Navbar;
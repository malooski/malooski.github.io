import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../constants";
import { middleChildSelector } from "../util/css";

const NavDiv = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;

const MyNavLink = styled(NavLink)`
    color: white;
    background-image: linear-gradient(${THEME.colors.purple}, ${THEME.colors.pink});
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;

    border: 1px solid ${THEME.colors.lightPink};

    :hover {
        color: ${THEME.colors.lightPink};
    }

    :first-child {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
        border-right: none;
    }

    ${middleChildSelector} {
        border-left: none;
        border-right: none;
    }

    :last-child {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
        border-left: none;
    }
`;

export function Navbar() {
    return (
        <NavDiv>
            <MyNavLink to="/">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/comms">Commissions</MyNavLink>
        </NavDiv>
    );
}

import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavDiv = styled.div`
    width: 500px;
    margin: 0 auto;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 1em;
    margin-bottom: 1em;
`;

const MyNavLink = styled(NavLink)`
    color: white;
    background-color: #00a8e8;
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

    :hover {
        background-color: #0082b6;
    }

    :active {
        background-color: #0082b6;
    }

    :first-child {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }

    :last-child {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }
`;

export function Navbar() {
    return (
        <NavDiv>
            <MyNavLink to="/">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
        </NavDiv>
    );
}

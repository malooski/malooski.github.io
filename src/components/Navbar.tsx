import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../constants";

const NavDiv = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;

const MyNavLinkStyle = styled(Link)<{ active: boolean }>`
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    font-weight: bold;

    :hover {
        color: ${THEME.colors.lightPink};
    }
`;

function MyNavLink(props: LinkProps) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname });

    return <MyNavLinkStyle active={match != null} {...props} />;
}

export function Navbar() {
    return (
        <NavDiv>
            <MyNavLink to="/">Home</MyNavLink>
            <MyNavLink to="/about">About</MyNavLink>
            <MyNavLink to="/artwork">Artwork</MyNavLink>
            <MyNavLink to="/comms">Commissions</MyNavLink>
        </NavDiv>
    );
}

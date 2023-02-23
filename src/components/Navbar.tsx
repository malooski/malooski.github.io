import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { THEME } from "../constants";

const NavDiv = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;

const MyNavLinkStyle = styled(Link)<{ active: boolean }>`
    color: white;
    margin: 8px 16px;
    text-decoration: none;
    font-weight: bold;

    border-bottom: ${props => (props.active ? "2px solid white" : "2px solid transparent")};

    transition: border-bottom 0.2s ease-in-out;

    :hover {
        color: ${THEME.colors.lightPink};
    }
`;

function CustomLink(props: LinkProps) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname });

    return <MyNavLinkStyle active={!!match} {...props} />;
}

export function Navbar() {
    return (
        <NavDiv>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/artwork">Artwork</CustomLink>
            <CustomLink to="/ref">Ref</CustomLink>
        </NavDiv>
    );
}

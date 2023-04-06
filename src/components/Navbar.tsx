import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled, { css } from "styled-components";
import { THEME } from "../constants";

const NavDiv = styled.div`
    margin-top: 1em;
    margin-bottom: 1em;
`;

const LINK_CSS = css`
    color: white;
    margin: 8px 16px;
    text-decoration: none;
    font-weight: bold;

    border-bottom: "2px solid transparent";

    transition: border-bottom 0.2s ease-in-out;

    :hover {
        color: ${THEME.colors.lightPink};
    }
`;

const MyNavLinkStyle = styled(Link)<{ active: boolean }>`
    ${LINK_CSS}

    border-bottom: ${props => (props.active ? "2px solid white" : "2px solid transparent")};
`;

const MyLink = styled.a`
    ${LINK_CSS}
`;

function CustomLink(props: LinkProps) {
    let resolved = useResolvedPath(props.to);
    let match = useMatch({ path: resolved.pathname });

    return <MyNavLinkStyle active={!!match} {...props} />;
}

const REFERENCE_URL = "https://malooski.notion.site/Reference-06d67a7b38df4a4a9bd3787410ad97b0";

export function Navbar() {
    return (
        <NavDiv>
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/artwork">Art Gallery</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <MyLink target="_blank" rel="norefferer" href={REFERENCE_URL}>
                Reference
            </MyLink>
        </NavDiv>
    );
}

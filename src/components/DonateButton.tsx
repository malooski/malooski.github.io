import styled from "styled-components";
import donateImg from "../assets/pangolin in cup.png";
import kofiLogo from "../assets/kofi logo.png";
import { useState } from "react";

const RootLink = styled.a`
    position: fixed;
    top: 1em;
    right: 1em;
    text-decoration: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: large;
`;

const MyButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: #40d3a5;
    color: white;
    text-decoration: none;

    padding: 0.25em 0.5em;
    border-radius: 1em;
`;

const DonateLogoImg = styled.img`
    height: 1em;
    margin-right: 0.25rem;
`;

const PANGOLIN_TRUE_WIDTH = 512;
const PANGOLIN_TRUE_HEIGHT = 612;

const PANGOLIN_WIDTH = 150;
const PANGOLIN_HEIGHT = (PANGOLIN_WIDTH * PANGOLIN_TRUE_HEIGHT) / PANGOLIN_TRUE_WIDTH;

const PangolinDiv = styled.div<{ hovered: boolean }>`
    background-image: url("${donateImg}");
    background-size: cover;

    height: ${p => (p.hovered ? `${PANGOLIN_HEIGHT}px` : "0px")};
    width: ${PANGOLIN_WIDTH}px;

    transition: height 0.5s;
`;

const DONATE_LINK = "https://ko-fi.com/malooski";

export default function DonateButton(): JSX.Element {
    const [hover, setHover] = useState(false);

    return (
        <RootLink
            href={DONATE_LINK}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <PangolinDiv hovered={hover}></PangolinDiv>
            <MyButton>
                <DonateLogoImg src={kofiLogo} />
                <span>Buy Me a Coffee</span>
            </MyButton>
        </RootLink>
    );

    function onMouseEnter(): void {
        setHover(true);
    }

    function onMouseLeave(): void {
        setHover(false);
    }
}

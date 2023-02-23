import { Fragment, useMemo } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { MALOOSKI_LOGO_WEBM_URL } from "../constants";
import { middleChildSelector, SMARTPHONE_SELECTOR } from "../util/css";
import { isMobileBrowser } from "../util/dom";

import malooskiLogo from "../assets/Logo.png";
import FloatingMaloo from "../components/FloatingMaloo";

const BorderDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        -45deg,
        #eda3ec,
        #c765c8,
        #855cd2,
        #613fb6,
        #c765c8,
        #eda3ec,
        #f2b5cf
    );
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    align-content: stretch;

    overflow-y: auto;
`;

const InnerDiv = styled.div`
    border-radius: 16px;
    margin: 16px;

    width: 800px;
    ${SMARTPHONE_SELECTOR} {
        margin: 0px;
        width: 100%;
    }

    align-self: center;
    flex-grow: 1;
    background-image: radial-gradient(#515257, #3b3846);
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoVideo = styled.video`
    width: 100%;
    margin: -10% 4%;

    // click through
    user-select: none;
    pointer-events: none;
`;

const LogoImg = styled.img`
    width: 100%;
    margin: 1em 0;
`;

const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

const FooterDiv = styled.div`
    font-size: 8pt;

    align-self: stretch;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    *:first-child {
        justify-self: start;
    }

    *${middleChildSelector} {
        justify-self: center;
    }

    *:last-child {
        justify-self: end;
    }

    padding: 0.5em 1em;
    margin: 0 1em;
    border-top: 2px solid #7365a6;
`;

export default function MainLayout() {
    const isMobile = useMemo(() => isMobileBrowser(), []);

    return (
        <Fragment>
            <FloatingMaloo />
            <BorderDiv>
                <InnerDiv>
                    {isMobile ? (
                        <LogoImg src={malooskiLogo} />
                    ) : (
                        <LogoVideo autoPlay muted loop src={MALOOSKI_LOGO_WEBM_URL} />
                    )}
                    <Navbar />

                    <BodyDiv>
                        <Outlet />
                    </BodyDiv>

                    <FooterDiv>
                        <div></div>
                        <div>
                            <span>&copy; 2022 Malooski</span>
                        </div>
                        <div>🛸</div>
                    </FooterDiv>
                </InnerDiv>
            </BorderDiv>
        </Fragment>
    );
}

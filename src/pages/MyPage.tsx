import styled, { css } from "styled-components";
import { Navbar } from "../components/Navbar";
import malooLogo from "../assets/Logo.png";
import { lazy, Suspense, useState } from "react";
import { middleChildSelector } from "../util/css";

const DancingMaloo = lazy(() => import("../components/DancingMaloo"));

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
    @media (max-width: 768px) {
        margin: 0px;
    }

    align-self: stretch;
    flex-grow: 1;
    background-image: radial-gradient(#515257, #3b3846);
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoImg = styled.img`
    margin: 1em 0;
    width: min(90%, 900px);
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

const TwerkButtonInactiveCss = css`
    padding: 0;
    border: none;
    background: none;
`;

const TwerkButtonActiveCss = css`
    font-size: 24pt;
    position: fixed;
    bottom: 1em;
    right: 1em;
    z-index: 100;
`;

const TwerkButton = styled.button<{ active: boolean }>`
    ${p => (p.active ? TwerkButtonActiveCss : TwerkButtonInactiveCss)}
`;

const Heading = styled.h1`
    font-size: 3em;
    margin: 0.25em 0;
    padding: 0;
`;

export interface MyPageProps {
    title?: string;
    children?: React.ReactNode;
}

export default function MyPage(props: MyPageProps) {
    const [isTwerk, setIsTwerk] = useState(false);

    return (
        <BorderDiv>
            <InnerDiv>
                {isTwerk && (
                    <Suspense fallback={null}>
                        <DancingMaloo />
                    </Suspense>
                )}

                <LogoImg src={malooLogo} />
                <Navbar />
                {props.title && <Heading>{props.title}</Heading>}

                <BodyDiv>{props.children}</BodyDiv>

                <FooterDiv>
                    <div></div>
                    <div>
                        <span>&copy; 2022 Malooski</span>
                    </div>
                    <div>
                        <TwerkButton
                            title="Click to see the aliens..."
                            active={isTwerk}
                            onClick={() => setIsTwerk(v => !v)}
                        >
                            🛸
                        </TwerkButton>
                    </div>
                </FooterDiv>
            </InnerDiv>
        </BorderDiv>
    );
}

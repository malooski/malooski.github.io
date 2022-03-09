import styled from "styled-components";

import largeBackdropURL from "../assets/Galaxy Reel Large.jpg";
import smallBackdropURL from "../assets/Galaxy Reel Small.jpg";
import LazyImage, { LazyImageLOD } from "./LazyImage";

const LODS: LazyImageLOD[] = [
    {
        src: smallBackdropURL,
        style: {
            filter: "blur(8px)",
        },
    },
    {
        src: largeBackdropURL,
        style: {
            filter: "blur(2px)",
        },
    },
];

const RootDiv = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;

    z-index: -1000;
`;

const MyLazyImage = styled(LazyImage)`
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0;
    padding: 0;

    animation-name: scrollBackground;
    animation-direction: alternate;
    animation-duration: 120s;
    animation-timing-function: linear;

    z-index: -1000;

    @keyframes scrollBackground {
        from {
            top: 0px;
        }

        to {
            bottom: 0px;
        }
    }

    animation-iteration-count: infinite;
`;

export default function ScrollingBackdrop() {
    return (
        <RootDiv>
            <MyLazyImage loading="lazy" style={{ width: "100%" }} lods={LODS} delayMs={1000} />
        </RootDiv>
    );
}

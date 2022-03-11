import styled from "styled-components";

import largeBackdropURL from "../assets/Galaxy Reel Large.jpg";
import smallBackdropURL from "../assets/Galaxy Reel Small.jpg";
import LazyBackground from "./LazyBackground";
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

const RootBackground = styled(LazyBackground)`
    position: fixed;
    z-index: -1000;
    top: 0px;
    left: 0px;
    transition: filter 5s;
    width: 100%;
    height: 100%;

    background-size: cover;
`;

export default function SpaceBackground() {
    return <RootBackground lods={LODS} delayMs={1000} />;
}

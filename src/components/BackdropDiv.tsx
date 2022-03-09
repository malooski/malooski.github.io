import styled from "styled-components";

import galaxyReelUrl from "../assets/Galaxy Reel (Optimized).jpg";

export const BackdropDiv = styled.div`
    position: fixed;
    background-image: url("${galaxyReelUrl}");
    width: 100%;
    height: 100%;
    background-size: cover;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: column;

    animation-name: scrollBackground;
    animation-direction: alternate;
    animation-duration: 120s;
    animation-timing-function: linear;
    filter: blur(4px);

    z-index: -1000;

    @keyframes scrollBackground {
        from {
            background-position: bottom;
        }

        to {
            background-position: top;
        }
    }

    animation-iteration-count: infinite;
`;

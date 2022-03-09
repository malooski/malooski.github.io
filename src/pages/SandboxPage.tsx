import LazyImage, { LazyImageLOD } from "../components/LazyImage";

import largeBackdropURL from "../assets/Galaxy Reel Large.jpg";
import smallBackdropURL from "../assets/Galaxy Reel Small.jpg";
import styled from "styled-components";

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

const MyLazyImage = styled(LazyImage)`
    transition: filter 2s;
`;

export default function SandboxPage() {
    return (
        <div>
            <MyLazyImage style={{ width: "100%" }} lods={LODS} delayMs={1000} />
        </div>
    );
}

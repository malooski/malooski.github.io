import { useState } from "react";
import styled from "styled-components";
import { MALOO_PEEKING_WEBM_URL } from "../constants";

const MalooVideo = styled.video`
    position: absolute;
    bottom: 0;
    right: 1em;
    width: 25%;

    z-index: 1000;
`;

export default function FloatingMaloo() {
    const [visible, setVisible] = useState(true);

    if (!visible) {
        return null;
    }

    return (
        <MalooVideo
            onClick={() => setVisible(false)}
            autoPlay
            muted
            loop
            src={MALOO_PEEKING_WEBM_URL}
        />
    );
}

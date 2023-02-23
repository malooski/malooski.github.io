import styled from "styled-components";
import { MALOO_PEEKING_WEBM_URL } from "../constants";

const MalooVideo = styled.video`
    position: absolute;
    bottom: 0;
    right: 1em;
    width: 25%;
    max-width: 480px;

    z-index: 1000;
`;

export interface FloatingMalooProps {
    visible: boolean;
    onClick: () => void;
}

export default function FloatingMaloo(props: FloatingMalooProps) {
    const { visible, onClick } = props;

    if (!visible) {
        return null;
    }

    return <MalooVideo onClick={onClick} autoPlay muted loop src={MALOO_PEEKING_WEBM_URL} />;
}

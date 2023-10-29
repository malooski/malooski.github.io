import { MALOO_PEEKING_WEBM_URL } from "../constants";

import * as classes from "./FloatingMaloo.module.scss";

export default function FloatingMaloo() {
    if (!isDesktop()) return null;

    return <video className={classes.maloo} autoPlay muted loop src={MALOO_PEEKING_WEBM_URL} />;
}

function isDesktop() {
    return window.innerWidth > 768;
}

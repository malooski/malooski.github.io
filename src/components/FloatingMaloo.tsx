import { useMemo } from "react";
import { MALOO_PEEKING_WEBM_URL } from "../constants";
import { isMobileBrowser } from "../util/dom";

import * as classes from "./FloatingMaloo.module.scss";

export default function FloatingMaloo() {
    const isMobile = useMemo(() => isMobileBrowser(), []);

    if (!isMobile) {
        return null;
    }

    return <video className={classes.maloo} autoPlay muted loop src={MALOO_PEEKING_WEBM_URL} />;
}

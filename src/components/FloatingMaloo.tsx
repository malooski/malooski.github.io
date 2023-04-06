import { MALOO_PEEKING_WEBM_URL } from "../constants";

import * as classes from "./FloatingMaloo.module.scss";

export default function FloatingMaloo() {
    return <video className={classes.maloo} autoPlay muted loop src={MALOO_PEEKING_WEBM_URL} />;
}

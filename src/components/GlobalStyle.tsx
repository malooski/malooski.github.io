import { createGlobalStyle } from "styled-components";
import { THEME } from "../constants";

export default createGlobalStyle`
    html, body {
        font-family: "Nunito", sans-serif;
        color: ${THEME.colors.white};
    }

    html, body, #root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
    }


    h1, h2, h3, h4, h5, h6, p {
        padding: 0;
        margin: 0;
    }

    a {
        color: ${THEME.colors.pink}
    }
`;

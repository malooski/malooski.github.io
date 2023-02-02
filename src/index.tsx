import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./AppRoutes";
import GlobalStyle from "./components/GlobalStyle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);
root.render(
    <StrictMode>
        <GlobalStyle />
        <AppRoutes />
    </StrictMode>
);

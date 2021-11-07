import React from "react";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import galaxyReelUrl from "./assets/Galaxy Reel (Optimized).jpg";
import logoUrl from "./assets/Logo (Optimized).png";
import LinksPage from "./pages/LinksPage";
import AboutPage from "./pages/AboutPage";

import DonateButton from "./components/DonateButton";

const BackdropDiv = styled.div`
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

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const AboutMeHeader = styled.div`
    margin: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 14pt;
`;

const LogoImage = styled.img`
    margin-top: 2em;
    min-width: 100px;
    width: 50%;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 1));
`;

const NavDiv = styled.div`
    width: 500px;
    margin: 0 auto;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 1em;
    margin-bottom: 1em;
`;

const NavLink = styled(Link)`
    color: white;
    background-color: #00a8e8;
    color: white;
    padding: 8px 16px;

    border-radius: 16px;
`;

function App() {
    return (
        <RootDiv>
            <BackdropDiv />
            <DonateButton />
            <Router>
                <AboutMeHeader>
                    <LogoImage src={logoUrl} alt="logo" />
                </AboutMeHeader>
                <NavDiv>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                </NavDiv>
                <Switch>
                    <Route exact path="/">
                        <LinksPage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                </Switch>
            </Router>
        </RootDiv>
    );
}

export default App;

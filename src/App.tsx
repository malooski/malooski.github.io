import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import galaxyReelUrl from "./assets/Galaxy Reel (Optimized).jpg";
import logoUrl from "./assets/Logo (Optimized).png";
import HomePage from "./pages/HomePage";

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

const NavDiv = styled.div`
    width: 500px;
    margin: 0 auto;
    justify-self: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    margin-top: 1em;
    margin-bottom: 1em;
`;

const AboutMeHeader = styled.div`
    margin: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 14pt;
`;

const DonateButton = styled.a`
    background-color: #00a8e8;
    color: white;
    padding: 8px 16px;
    border-radius: 16px;
    border: white 1px solid;
    box-shadow: 0px 0px 8px white;

    text-decoration: none;

    :hover {
        background-color: #0091d9;
    }

    font-weight: bold;
    font-size: large;

    position: fixed;
    top: 16px;
    right: 16px;
`;

const LogoImage = styled.img`
    margin-top: 8em;
    width: 50%;
    filter: drop-shadow(5px 5px 15px rgba(0, 0, 0, 1));
`;

function App() {
    return (
        <RootDiv>
            <BackdropDiv />
            <DonateButton target="_blank" href="https://ko-fi.com/malooski">
                Donate!
            </DonateButton>
            <Router>
                <AboutMeHeader>
                    <LogoImage src={logoUrl} alt="logo" />
                </AboutMeHeader>
                <NavDiv></NavDiv>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        </RootDiv>
    );
}

export default App;

import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CommsPage from "./pages/CommPage";
import LinksPage from "./pages/LinksPage";
import SandboxPage from "./pages/SandboxPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <LinksPage />
                </Route>
                <Route exact path="/about">
                    <AboutPage />
                </Route>
                <Route exact path="/comms">
                    <CommsPage />
                </Route>
                <Route exact path="/sandbox">
                    <SandboxPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

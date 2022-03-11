import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

const LinksPage = lazy(() => import("./pages/LinksPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CommsPage = lazy(() => import("./pages/CommsPage"));
const SandboxPage = lazy(() => import("./pages/SandboxPage"));

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Suspense fallback={null}>
                        <LinksPage />
                    </Suspense>
                </Route>
                <Route exact path="/about">
                    <Suspense fallback={null}>
                        <AboutPage />
                    </Suspense>
                </Route>
                <Route exact path="/comms">
                    <Suspense fallback={null}>
                        <CommsPage />
                    </Suspense>
                </Route>
                <Route exact path="/sandbox">
                    <Suspense fallback={null}>
                        <SandboxPage />
                    </Suspense>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

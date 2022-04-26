import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const LinksPage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CommsPage = lazy(() => import("./pages/CommsPage"));

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={4}>
                            <LinksPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={4}>
                            <AboutPage />
                        </Suspense>
                    }
                />
                <Route
                    path="/comms"
                    element={
                        <Suspense fallback={4}>
                            <CommsPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

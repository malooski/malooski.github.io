import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Navigate, Route, Routes } from "react-router-dom";

const LinksPage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ChatCommsPage = lazy(() => import("./pages/comms/ChatCommsPage"));

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    index
                    element={
                        <Suspense fallback="Loading...">
                            <LinksPage />
                        </Suspense>
                    }
                />
                <Route
                    path="about"
                    element={
                        <Suspense fallback="Loading...">
                            <AboutPage />
                        </Suspense>
                    }
                />
                <Route path="/comms" element={<Navigate to="/comms/chat" />} />

                <Route
                    path="/comms/chat"
                    element={
                        <Suspense fallback="Loading...">
                            <ChatCommsPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const LinksPage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const CommsPage = lazy(() => import("./pages/CommsPage"));
const ArtworkPage = lazy(() => import("./pages/ArtworkPage"));

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
                <Route
                    path="artwork"
                    element={
                        <Suspense fallback="Loading...">
                            <ArtworkPage />
                        </Suspense>
                    }
                />
                <Route
                    path="comms"
                    element={
                        <Suspense fallback="Loading...">
                            <CommsPage />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;

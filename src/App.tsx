import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const LinksPage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));

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
            </Routes>
        </Router>
    );
}

export default App;

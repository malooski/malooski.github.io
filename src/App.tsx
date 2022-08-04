import { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const HomePage = () => (
    <Suspense fallback="Loading...">
        <LazyHomePage />
    </Suspense>
);

const LazyAboutPage = lazy(() => import("./pages/AboutPage"));
const AboutPage = () => (
    <Suspense fallback="Loading...">
        <LazyAboutPage />
    </Suspense>
);

const LazyArtworkPage = lazy(() => import("./pages/ArtworkPage"));
const ArtworkPage = () => (
    <Suspense fallback="Loading...">
        <LazyArtworkPage />
    </Suspense>
);

const LazyExpandedArtworkPage = lazy(() => import("./pages/ExpandedArtworkPage"));
const ExpandedArtworkPage = () => (
    <Suspense fallback="Loading...">
        <LazyExpandedArtworkPage />
    </Suspense>
);

const LazyCommsPage = lazy(() => import("./pages/CommsPage"));
const CommsPage = () => (
    <Suspense fallback="Loading...">
        <LazyCommsPage />
    </Suspense>
);

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/artwork" element={<ArtworkPage />} />
                <Route path="/artwork/:artworkId" element={<ExpandedArtworkPage />} />
                <Route path="/artwork/:artworkId/:page" element={<ExpandedArtworkPage />} />
                <Route path="comms" element={<CommsPage />} />
            </Routes>
        </Router>
    );
}

export default App;

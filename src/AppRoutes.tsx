import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/Main";

import AboutPage from "./pages/AboutPage";
import ArtworkPage from "./pages/ArtworkPage";
import ExpandedArtworkPage from "./pages/ExpandedArtworkPage";
import LinksPage from "./pages/LinksPage/index";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LinksPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="artwork" element={<ArtworkPage />} />
                </Route>

                <Route path="/artwork/:artworkId" element={<ExpandedArtworkPage />} />
                <Route path="/artwork/:artworkId/:page" element={<ExpandedArtworkPage />} />
            </Routes>
        </Router>
    );
}

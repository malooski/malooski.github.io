import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/Main";
import FullWidthLayout from "./layouts/FullWidth";

import AboutPage from "./pages/AboutPage";
import ArtworkPage from "./pages/ArtworkPage";
import CommsPage from "./pages/CommsPage";
import ExpandedArtworkPage from "./pages/ExpandedArtworkPage";
import LinksPage from "./pages/LinksPage";
import RefPage from "./pages/RefPage";
import TimezonePage from "./pages/TimezonePage";

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<LinksPage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="artwork" element={<ArtworkPage />} />
                    <Route path="comms" element={<CommsPage />} />
                    <Route path="timezone" element={<CommsPage />} />
                </Route>

                <Route path="/tools" element={<MainLayout />}>
                    <Route path="timezone" element={<TimezonePage />} />
                </Route>

                <Route path="/" element={<FullWidthLayout />}>
                    <Route path="ref" element={<RefPage />} />
                </Route>
                <Route path="/artwork/:artworkId" element={<ExpandedArtworkPage />} />
                <Route path="/artwork/:artworkId/:page" element={<ExpandedArtworkPage />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;

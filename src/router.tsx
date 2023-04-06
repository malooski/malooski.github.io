import { createHashRouter } from "react-router-dom";

import FullPageLayout from "./layouts/FullPage.tsx";
import MainLayout from "./layouts/Main";

export const router = createHashRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: "/",
                lazy: () => import("./pages/Links.tsx"),
            },
            {
                path: "/artwork",
                lazy: () => import("./pages/ArtGallery.tsx"),
            },
            {
                path: "/about",
                lazy: () => import("./pages/About.tsx"),
            },
        ],
    },
    {
        element: <FullPageLayout />,
        children: [
            {
                path: "/artwork/:artworkId",
                lazy: () => import("./pages/BigArtwork.tsx"),
            },
            {
                path: "/artwork/:artworkId/:pageIdx",
                lazy: () => import("./pages/BigArtwork.tsx"),
            },
        ],
    },
]);

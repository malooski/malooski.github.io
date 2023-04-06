import {
    faArrowLeft,
    faArrowRight,
    faChevronLeft,
    faHome,
    faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useMemo } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { ARTWORKS, ArtworkInfo, ArtworkType } from "../lib/artwork";
import { clampToCycle, parseIntOrNull } from "../util/index";
import classNames from "classnames";

import * as classes from "./BigArtwork.module.scss";
import { cssUrlify } from "../util/css";
import { useImageLoadingState, useOnArrowKeydown, useOnEscKeydown } from "../util/react";

export function Component() {
    const params = useParams();
    const { artworkId } = params;
    const pageIdx = parseIntOrNull(params.pageIdx) ?? 0;

    const artwork = useMemo(() => ARTWORKS.find(a => a.id === artworkId), [artworkId]);

    if (!artwork) {
        return <Navigate to="/artwork" />;
    }

    const pagesTotal = artwork.imgUrl.length;

    if (pageIdx >= pagesTotal) {
        return <Navigate to={`/artwork/${artworkId}/${pagesTotal - 1}`} />;
    }

    return <ExpandedArtworkFoundPage artwork={artwork} pageIdx={pageIdx} />;
}

interface ExpandedArtworkFoundPageProps {
    artwork: ArtworkInfo;
    pageIdx?: number;
}

function ExpandedArtworkFoundPage(props: ExpandedArtworkFoundPageProps) {
    const { artwork, pageIdx = 0 } = props;
    const pagesTotal = artwork.imgUrl.length;

    const imgUrl = artwork.imgUrl[pageIdx];

    const pagePaths = getPagePaths(artwork, pageIdx);

    const navigate = useNavigate();

    useOnEscKeydown(() => navigate("/artwork"));
    useOnArrowKeydown(
        () => (pagePaths ? navigate(pagePaths.prev) : null),
        () => (pagePaths ? navigate(pagePaths.next) : null)
    );
    const imgState = useImageLoadingState(imgUrl);

    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fan Art";

    const bigImgStyle = useMemo(() => ({ backgroundImage: cssUrlify(imgUrl) }), [imgUrl]);

    const imgContainerClass = useMemo(
        () => classNames(classes.imgContainer, { [classes.loading]: !imgState.loaded }),
        [imgState.loaded]
    );

    return (
        <div className={classes.root}>
            <div className={classes.infoBar}>
                <Link to="/artwork">
                    <FontAwesomeIcon icon={faChevronLeft} /> Go Back
                </Link>
                <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                    {artwork.title ?? "Untitled"}
                </a>

                <a href={artwork.author.url} rel="noreferrer" target="_blank">
                    <span>Artist: </span>
                    {artwork.author.name}
                </a>

                <span>{imgState.loaded ? "loaded" : "loading"}</span>

                <span>{typeText}</span>
            </div>
            <div style={bigImgStyle} className={imgContainerClass}>
                {!imgState.loaded && <FontAwesomeIcon icon={faUndo} spin spinReverse size="10x" />}
            </div>

            {pagePaths && (
                <div className={classes.controlsBar}>
                    <>
                        <div className={classes.pageButtons}>
                            <Link to={pagePaths.prev}>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </Link>
                            <Link to={pagePaths.next}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </Link>
                        </div>
                        <span>
                            {pageIdx + 1} / {pagesTotal}
                        </span>
                    </>
                </div>
            )}
        </div>
    );
}

function getPagePaths(
    artwork: ArtworkInfo,
    pageIdx: number
): { prev: string; next: string } | null {
    const pagesTotal = artwork.imgUrl.length;
    if (pagesTotal <= 1) {
        return null;
    }

    const currPageIdx = pageIdx ?? 0;
    const prevPageIdx = clampToCycle(currPageIdx - 1, pagesTotal);
    const nextPageIdx = clampToCycle(currPageIdx + 1, pagesTotal);

    const prevPagePath = `/artwork/${artwork.id}/${prevPageIdx}`;
    const nextPagePath = `/artwork/${artwork.id}/${nextPageIdx}`;

    return {
        prev: prevPagePath,
        next: nextPagePath,
    };
}

import { faArrowLeft, faArrowRight, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ArtworkInfo, ARTWORKS, ArtworkType } from "../lib/artwork";
import { clampToCycle, parseIntOrNull } from "../util/index";
import { useImageLoading } from "../util/hooks/use_image_loading";

const RootDiv = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);

    z-index: 100;
`;

const ImgDiv = styled.div`
    position: relative;

    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    cursor: grab;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const MyButton = styled(Link)`
    border: none;
    font-size: 2em;
    padding: 0.25em;
    margin: 0;

    background-color: rgba(255, 255, 255, 0.8);
    transition: padding 0.2s ease-in-out;
`;

const PrevImageButton = styled(MyButton)`
    position: absolute;

    left: 0;
    top: 50%;
    transform: translateY(-50%);

    border-radius: 0 1em 1em 0;
`;

const NextImageButton = styled(MyButton)`
    grid-area: right-arrow;

    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);

    border-radius: 1em 0 0 1em;
`;

const CloseButton = styled(MyButton)`
    position: absolute;
    right: 0;
    top: 0;

    color: white;
    padding: 0.2em 0.5em;
    background-color: rgba(255, 0, 0, 0.8);

    border-radius: 0 0 0 0.5em;
`;

const PageIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0.5em 0.5em 0 0;

    padding: 0.5em;
`;

const InfoPanelDiv = styled.div`
    position: fixed;
    top: 1em;
    left: 1em;

    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 0.5em;
    padding: 0.5em;

    display: flex;
    flex-direction: column;

    gap: 1em;
    border: 1px solid rgba(255, 255, 255, 0.5);
`;

const InfoPanelGrid = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 0.5em 1em;
`;

export default function ExpandedArtworkPage() {
    const params = useParams();
    const artwork = useMemo(
        () => ARTWORKS.find(a => a.id === params.artworkId),
        [params.artworkId]
    );

    if (!artwork) {
        return <Navigate to="/artwork" />;
    }

    const pages = artwork.imgUrl.length;
    const pageIdx = clampToCycle((parseIntOrNull(params.page) ?? 1) - 1, pages);

    return <ExpandedArtworkFoundPage artwork={artwork} pageIdx={pageIdx} />;
}

interface ExpandedArtworkFoundPageProps {
    artwork: ArtworkInfo;
    pageIdx: number;
}

const ExpandedArtworkFoundPage = memo((props: ExpandedArtworkFoundPageProps) => {
    const { artwork, pageIdx = 0 } = props;
    const pagesTotal = artwork.imgUrl.length;

    const imgUrl = artwork.imgUrl[pageIdx];
    const bgImg = `url('${imgUrl}')`;

    const { loading } = useImageLoading(imgUrl);

    const prevPageIdx = clampToCycle(pageIdx - 1, pagesTotal);
    const prevPagePath = `/artwork/${artwork.id}/${prevPageIdx + 1}`;
    const nextPageIdx = clampToCycle(pageIdx + 1, pagesTotal);
    const nextPagePath = `/artwork/${artwork.id}/${nextPageIdx + 1}`;
    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fan Art";

    return (
        <RootDiv>
            <ImgDiv style={{ backgroundImage: bgImg }}>
                {loading && <FontAwesomeIcon icon={faSpinner} spin size="10x" />}
            </ImgDiv>

            {artwork.imgUrl.length > 1 && (
                <>
                    <PrevImageButton to={prevPagePath}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </PrevImageButton>
                    <NextImageButton to={nextPagePath}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </NextImageButton>
                    <PageIndicator>
                        {pageIdx + 1} / {artwork.imgUrl.length}
                    </PageIndicator>
                </>
            )}
            <CloseButton to="/artwork">
                <FontAwesomeIcon icon={faTimes} />
            </CloseButton>

            <InfoPanelDiv>
                <div>
                    <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                        {artwork.title ?? "Untitled"}
                    </a>
                </div>
                <InfoPanelGrid>
                    <div>Artist</div>
                    <div>
                        <a href={artwork.author.url} rel="noreferrer" target="_blank">
                            {artwork.author.name}
                        </a>
                    </div>
                    <div>Type</div>
                    <div>{typeText}</div>

                    <div>Page</div>
                    <div>
                        {pageIdx + 1} / {artwork.imgUrl.length}
                    </div>
                </InfoPanelGrid>
            </InfoPanelDiv>
        </RootDiv>
    );
});

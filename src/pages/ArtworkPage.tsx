import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import MyPage from "./MyPage";

import { useCallback, useState } from "react";
import ThumbnailCycle from "../components/ThumbnailCycle";
import { ArtworkInfo, ARTWORKS, ArtworkType } from "../lib/artwork";
import FullscreenArtModal from "../components/FullscreenArtModal";

const ArtworksDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: center;

    gap: 1em;
    margin: 1em;
`;

export default function AboutPage() {
    return (
        <MyPage title="Artwork">
            <ArtworksDiv>
                {ARTWORKS.map(a => (
                    <ArtworkEntry artwork={a} />
                ))}
            </ArtworksDiv>
        </MyPage>
    );
}

interface ArtworkEntryProps {
    artwork: ArtworkInfo;
}

const ThumbnailDiv = styled.div<{ hovering: boolean }>`
    width: 20em;
    height: 20em;

    border-radius: 1em;

    background-size: cover;
    position: relative;

    box-shadow: ${props => (props.hovering ? "none" : "0.1em 0.1em 1em rgba(0, 0, 0, 0.5)")};
    transition: box-shadow 0.2s ease-in-out;

    overflow: hidden;
`;

const HeaderContainer = styled.div<{ hovering: boolean }>`
    background-color: rgba(0, 0, 0, 0.8);

    width: 100%;

    position: absolute;
    top: ${p => (p.hovering ? "0" : "-100%")};

    transition: top 0.2s ease-in-out;
`;

const HeaderContents = styled.div`
    margin: 0.5em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FooterInfoContainer = styled.div<{ hovering: boolean }>`
    display: flex;

    background-color: rgba(0, 0, 0, 0.8);

    width: 100%;

    position: absolute;
    bottom: ${p => (p.hovering ? "0" : "-100%")};
    transition: bottom 0.2s ease-in-out;
`;

const FooterInfoContents = styled.div`
    margin: 0.5em;
`;
function ArtworkEntry(props: ArtworkEntryProps) {
    const { artwork } = props;

    const [hovering, setHovering] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fanart";

    const onExpand = useCallback(() => {
        if (artwork.imgUrl.length === 0) return;
        setIsExpanded(true);
    }, [artwork]);

    const onClose = useCallback(() => setIsExpanded(false), []);

    return (
        <>
            <ThumbnailDiv
                hovering={hovering}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={onExpand}
            >
                <ThumbnailCycle urls={artwork.thumbUrls} intervalMs={5000} transitionMs={2000} />
                <HeaderContainer hovering={hovering}>
                    <HeaderContents>
                        <div></div>
                        <div>
                            <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                                Original{" "}
                                <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </HeaderContents>
                </HeaderContainer>
                <FooterInfoContainer hovering={hovering}>
                    <FooterInfoContents>
                        {typeText} by{" "}
                        <a href={artwork.authorUrl} rel="noreferrer" target="_blank">
                            {artwork.authorName}{" "}
                            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                        </a>
                    </FooterInfoContents>
                </FooterInfoContainer>
            </ThumbnailDiv>
            {isExpanded && <FullscreenArtModal artwork={artwork} onClose={onClose} />}
        </>
    );
}

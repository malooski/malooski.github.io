import {
    faArrowLeft,
    faArrowRight,
    faArrowUpRightFromSquare,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import MyPage from "./MyPage";

import nekovoidCommUrl from "../assets/thumbnails/nekovoid comm.jpg";
import ranviCommClosedUrl from "../assets/thumbnails/ranvi comm closed.jpg";
import ranviCommOpenUrl from "../assets/thumbnails/ranvi comm open.jpg";
import rexCommUrl from "../assets/thumbnails/rex comm.jpg";
import soieDanceFanartUrl from "../assets/thumbnails/soie dance fanart.gif";
import trashpitsComm1Url from "../assets/thumbnails/trashpits comm 1.jpg";
import trashpitsComm2Url from "../assets/thumbnails/trashpits comm 2.jpg";
import hatchetCommUrl from "../assets/thumbnails/hatchet comm.jpg";

import React, { memo, useCallback, useState } from "react";
import ThumbnailCycle from "../components/ThumbnailCycle";

enum ArtworkType {
    COMMISSION,
    FANART,
}

interface ArtworkInfo {
    type: ArtworkType;

    thumbUrls: string[];
    imgUrl: string[];

    workUrl: string;
    authorName: string;
    authorUrl?: string;
}

const ARTWORKS: ArtworkInfo[] = [
    {
        imgUrl: ["https://malooski-public.s3.us-east-2.amazonaws.com/artwork/hatchet+fullbody.jpg"],
        type: ArtworkType.COMMISSION,
        thumbUrls: [hatchetCommUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1552064016129875971",
        authorName: "Hatchet",
        authorUrl: "https://twitter.com/HatchetBat",
    },
    {
        imgUrl: [
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+A.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+A1.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+B.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+C.jpg",
        ],
        workUrl: "https://twitter.com/malooski_vt/status/1545386368850972672",
        thumbUrls: [nekovoidCommUrl],
        authorName: "Nekovoid",
        authorUrl: "https://www.fiverr.com/nekovoid",
        type: ArtworkType.COMMISSION,
    },
    {
        workUrl: "https://twitter.com/malooski_vt/status/1541513514904436738",
        imgUrl: [
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/trashpits+screens.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/trashpits.jpg",
        ],
        thumbUrls: [trashpitsComm1Url, trashpitsComm2Url],
        authorName: "Trashpits",
        authorUrl: "https://twitter.com/trashpits",
        type: ArtworkType.COMMISSION,
    },
    {
        imgUrl: [],
        workUrl: "https://twitter.com/malooski_vt/status/1541927930246447104",
        thumbUrls: [ranviCommClosedUrl, ranviCommOpenUrl],
        authorName: "Ranvi",
        authorUrl: "https://twitter.com/OneLittleGnome",
        type: ArtworkType.COMMISSION,
    },
    {
        imgUrl: [],
        type: ArtworkType.COMMISSION,
        thumbUrls: [rexCommUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1544709179436371968",
        authorName: "Rex Felix",
        authorUrl: "https://twitter.com/RexFelixENVT",
    },
    {
        imgUrl: [soieDanceFanartUrl],
        type: ArtworkType.FANART,
        thumbUrls: [soieDanceFanartUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1545050758080368643",
        authorName: "Soie Swan",
        authorUrl: "https://twitter.com/SoieSwanVT",
    },
];

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
            {isExpanded && <FullscreenArtwork artwork={artwork} onClose={onClose} />}
        </>
    );
}

interface FullscreenArtworkViewerProps {
    artwork: ArtworkInfo;
    onClose: () => void;
}

const RootFullscreenDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);

    z-index: 100;
`;

const FullscreenImg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const ChangeImageButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    font-size: 2em;
    z-index: 300;
    padding: 0.2em;
`;

const PrevImageButton = styled(ChangeImageButton)`
    left: 0;
    transform: translateY(-50%);
    z-index: 300;

    border-radius: 0 1em 1em 0;
`;

const NextImageButton = styled(ChangeImageButton)`
    right: 0;
    transform: translateY(-50%);
    z-index: 300;

    border-radius: 1em 0 0 1em;
`;

const CloseButton = styled.button`
    position: absolute;
    font-size: 2em;

    top: 0;
    right: 0;

    width: 1.5em;
    height: 1.5em;
    border: none;

    border-radius: 0 0 0 0.5em;

    z-index: 300;
`;

const PageIndicator = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    z-index: 300;
`;

const FullscreenArtwork = memo((props: FullscreenArtworkViewerProps) => {
    const { artwork, onClose } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const onLeftArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + artwork.imgUrl.length - 1) % artwork.imgUrl.length);
    }, [artwork.imgUrl.length]);

    const onRightArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % artwork.imgUrl.length);
    }, [artwork.imgUrl.length]);

    const bgImg = `url('${artwork.imgUrl[currentIndex]}')`;

    return (
        <RootFullscreenDiv>
            {artwork.imgUrl.length > 1 && (
                <>
                    <PrevImageButton onClick={onLeftArrowClick}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </PrevImageButton>
                    <NextImageButton onClick={onRightArrowClick}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </NextImageButton>
                    <PageIndicator>
                        {currentIndex + 1} / {artwork.imgUrl.length}
                    </PageIndicator>
                </>
            )}
            <CloseButton onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} />
            </CloseButton>
            <FullscreenImg style={{ backgroundImage: bgImg }} />
        </RootFullscreenDiv>
    );
});

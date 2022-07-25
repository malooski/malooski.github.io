import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
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

import { useState } from "react";
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
        workUrl: "https://twitter.com/malooski_vt/status/1541513514904436738",
        imgUrl: [],
        thumbUrls: [trashpitsComm1Url, trashpitsComm2Url],
        authorName: "Trashpits",
        authorUrl: "https://twitter.com/trashpits",
        type: ArtworkType.COMMISSION,
    },
    {
        imgUrl: [],
        workUrl: "https://twitter.com/malooski_vt/status/1545386368850972672",
        thumbUrls: [nekovoidCommUrl],
        authorName: "Nekovoid",
        authorUrl: "https://www.fiverr.com/nekovoid",
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
        imgUrl: [],
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

    box-shadow: ${props => (props.hovering ? "0.1em 0.1em 1em rgba(0, 0, 0, 0.8)" : "none")};
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

    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fanart";

    return (
        <ThumbnailDiv
            hovering={hovering}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <ThumbnailCycle urls={artwork.thumbUrls} intervalMs={5000} transitionMs={2000} />
            <HeaderContainer hovering={hovering}>
                <HeaderContents>
                    <div></div>
                    <div>
                        <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                            Original <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
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
    );
}

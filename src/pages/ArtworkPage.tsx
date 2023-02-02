import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThumbnailCycle from "../components/ThumbnailCycle";
import { ArtworkInfo, ARTWORKS, ArtworkType } from "../lib/artwork";

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
        <ArtworksDiv>
            {ARTWORKS.map(a => (
                <ArtworkEntry artwork={a} />
            ))}
        </ArtworksDiv>
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

const HeaderContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.8);

    width: 100%;

    position: absolute;

    transition: top 0.2s ease-in-out;
    top: 0;
`;

const HeaderContents = styled.div`
    margin: 0.5em;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const FooterInfoContainer = styled.div`
    display: flex;

    background-color: rgba(0, 0, 0, 0.8);

    width: 100%;

    position: absolute;
    transition: bottom 0.2s ease-in-out;
    bottom: 0;
`;

const TitleDiv = styled.div`
    font-size: 0.8em;
`;

const FooterInfoContents = styled.div`
    margin: 0.5em;
`;
function ArtworkEntry(props: ArtworkEntryProps) {
    const { artwork } = props;

    const [mouseHovering, setMouseHovering] = useState(false);

    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fanart";

    const navigate = useNavigate();

    const onThumbnailEnter = useCallback(() => {
        setMouseHovering(true);
    }, []);

    const onThumbnailLeave = useCallback(() => {
        setMouseHovering(false);
    }, []);

    const onThumbnailClick = useCallback(() => {
        if (artwork.imgUrl.length === 0) return;
        navigate(`/artwork/${artwork.id}`);
    }, [artwork, navigate]);

    return (
        <>
            <ThumbnailDiv
                hovering={mouseHovering}
                onMouseEnter={onThumbnailEnter}
                onMouseLeave={onThumbnailLeave}
                onClick={onThumbnailClick}
            >
                <ThumbnailCycle
                    thumbnails={artwork.thumbnails}
                    intervalMs={5000}
                    transitionMs={2000}
                />
                <HeaderContainer>
                    <HeaderContents>
                        <TitleDiv>{artwork.title}</TitleDiv>
                        <div>
                            <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                                Source <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </HeaderContents>
                </HeaderContainer>
                <FooterInfoContainer>
                    <FooterInfoContents>
                        {typeText} by{" "}
                        <a href={artwork.author.url} rel="noreferrer" target="_blank">
                            {artwork.author.name}{" "}
                            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                        </a>
                    </FooterInfoContents>
                </FooterInfoContainer>
            </ThumbnailDiv>
        </>
    );
}

import { faArrowLeft, faArrowRight, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { ArtworkInfo } from "../lib/artwork";
import { useImageLoading } from "../util/hooks/use_image_loading";

interface FullscreenArtworkViewerProps {
    artwork: ArtworkInfo;
    onClose: () => void;
}

const RootDiv = styled.div`
    position: fixed;
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
`;

const MyButton = styled.button`
    border: none;
    font-size: 2em;
    padding: 0.25em;
    margin: 0;

    background-color: rgba(255, 255, 255, 0.8);
    transition: padding 0.2s ease-in-out;

    :hover {
        padding: 0.5em;
    }
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

export default memo((props: FullscreenArtworkViewerProps) => {
    const { artwork, onClose } = props;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [xOffset, setXOffset] = useState(0);
    const [yOffset, setYOffset] = useState(0);
    const [zoom, setZoom] = useState(1);

    const onResetTransform = useCallback(() => {
        setXOffset(0);
        setYOffset(0);
        setZoom(1);
    }, []);

    const onLeftArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + artwork.imgUrl.length - 1) % artwork.imgUrl.length);
        onResetTransform();
    }, [artwork.imgUrl.length, onResetTransform]);

    const onRightArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % artwork.imgUrl.length);
        onResetTransform();
    }, [artwork.imgUrl.length, onResetTransform]);

    const imgUrl = artwork.imgUrl[currentIndex];
    const bgImg = `url('${imgUrl}')`;

    const { loading } = useImageLoading(imgUrl);

    const onStartDragging = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setDragging(true);
    }, []);
    const onDragging = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            e.preventDefault();
            if (!dragging) return;

            const { movementX, movementY } = e;
            setXOffset(prev => prev + movementX);
            setYOffset(prev => prev + movementY);
        },
        [dragging]
    );

    const onStopDragging = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        setDragging(false);
    }, []);

    const onImgWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        const { deltaY } = e;
        setZoom(prev => Math.min(Math.max(prev + deltaY / 1000, 0.1), 6));
    }, []);

    const transform = `translate(${xOffset}px, ${yOffset}px) scale(${zoom})`;

    return (
        <RootDiv>
            <ImgDiv
                onWheel={onImgWheel}
                onMouseDown={onStartDragging}
                onMouseMove={onDragging}
                onMouseUp={onStopDragging}
                style={{ backgroundImage: bgImg, transform }}
            >
                {loading && <FontAwesomeIcon icon={faSpinner} spin size="10x" />}
            </ImgDiv>

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
        </RootDiv>
    );
});

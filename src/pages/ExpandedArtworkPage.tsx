import { faArrowLeft, faArrowRight, faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { memo, useCallback, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ArtworkInfo, ARTWORKS } from "../lib/artwork";
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

export default function ExpandedArtworkPage() {
    const params = useParams();
    const artwork = useMemo(() => ARTWORKS.find(a => a.id === params.id), [params.id]);

    if (!artwork) {
        return <Navigate to="/artwork" />;
    }

    return <ExpandedArtworkFoundPage artwork={artwork} />;
}

const ExpandedArtworkFoundPage = memo((props: { artwork: ArtworkInfo }) => {
    const { artwork } = props;

    const [currentIndex, setCurrentIndex] = useState(0);

    const onLeftArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + artwork.imgUrl.length - 1) % artwork.imgUrl.length);
    }, [artwork.imgUrl.length]);

    const onRightArrowClick = useCallback(() => {
        setCurrentIndex(prev => (prev + 1) % artwork.imgUrl.length);
    }, [artwork.imgUrl.length]);

    const imgUrl = artwork.imgUrl[currentIndex];
    const bgImg = `url('${imgUrl}')`;

    const { loading } = useImageLoading(imgUrl);

    const navigate = useNavigate();
    const onClose = useCallback(() => {
        navigate("/artwork");
    }, [navigate]);

    return (
        <RootDiv>
            <ImgDiv style={{ backgroundImage: bgImg }}>
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

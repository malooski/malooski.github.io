import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import useInterval from "../util/hooks/use_interval";
import usePreloadImages from "../util/hooks/use_preload_images";

interface ThumbnailCycleImgProps {
    urls: string[];
    transitionMs: number;
    intervalMs: number;
}

const RootDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 20em;
    height: 20em;

    overflow: hidden;
`;

const ThumbnailDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 20em;
    height: 20em;

    background-size: cover;
`;

const NewThumbnailDiv = styled(ThumbnailDiv)<{ reveal: boolean; transitionMs: number }>`
    opacity: ${p => (p.reveal ? 100 : 0)};
    transition: opacity ${p => p.transitionMs}ms;
`;

export default memo((props: ThumbnailCycleImgProps) => {
    const { urls, intervalMs, transitionMs } = props;
    usePreloadImages(urls);

    const [currIdx, setCurrIdx] = useState(0);
    const [newIdx, setNewIdx] = useState(1 % urls.length);
    const [reveal, setReveal] = useState(false);

    useInterval(() => {
        setReveal(r => !r);
        // setCurrIdx(newIdx);
        // setNewIdx(i => (i + 1) % urls.length);
    }, intervalMs);

    // useEffect(() => {
    //     setReveal(false);
    // }, [newIdx]);

    const newBgImg = `url('${urls[newIdx]}')`;
    const currBgImg = `url('${urls[currIdx]}')`;
    return (
        <RootDiv>
            <ThumbnailDiv style={{ backgroundImage: currBgImg }} />
            <NewThumbnailDiv
                transitionMs={transitionMs}
                reveal={reveal}
                style={{ backgroundImage: newBgImg }}
            />
        </RootDiv>
    );
});

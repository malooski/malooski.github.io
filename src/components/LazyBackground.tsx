/* eslint-disable @typescript-eslint/no-use-before-define */
import { omit } from "lodash";
import { useState, CSSProperties, useEffect } from "react";
import styled from "styled-components";
import { preloadImage } from "../util/dom";

export interface LazyBackgroundLOD {
    src: string;
    style?: CSSProperties;
}

const RootDiv = styled.div``;

export interface LazyBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    lods: LazyBackgroundLOD[];
    delayMs?: number;
}

export default function LazyBackground(props: LazyBackgroundProps) {
    const { lods } = props;

    const [currSrcIdx, setCurrSrcIdx] = useState(0);
    const [currLodIdx, setCurrLodIdx] = useState(-1);

    useEffect(() => {
        preloadImage(lods[currSrcIdx].src).then(newSrc => {
            console.log("Loaded image:", newSrc);
            if (currLodIdx + 1 < lods.length) {
                setCurrLodIdx(idx => idx + 1);
            }

            if (currSrcIdx + 1 < lods.length) {
                setCurrSrcIdx(idx => idx + 1);
            }
        });
    }, [currSrcIdx]);

    const src = lods[currSrcIdx].src;
    const lod = lods[Math.max(currLodIdx, 0)];
    const normalProps = omit(props, ["lods", "delayMs"]);
    const style: CSSProperties = {
        backgroundImage: `url("${src}")`,
        ...(lod.style ?? {}),
        ...(props.style ?? {}),
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return <RootDiv {...normalProps} style={style} />;
}

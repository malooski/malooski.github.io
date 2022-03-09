/* eslint-disable @typescript-eslint/no-use-before-define */
import { omit } from "lodash";
import { useState, CSSProperties } from "react";
import styled from "styled-components";

export interface LazyImageLOD {
    src: string;
    style?: CSSProperties;
}

const RootImg = styled.img``;

export interface LazyImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> {
    lods: LazyImageLOD[];
    delayMs?: number;
}

export default function LazyImage(props: LazyImageProps) {
    const { lods } = props;

    const [currSrcIdx, setCurrSrcIdx] = useState(0);
    const [currLodIdx, setCurrLodIdx] = useState(-1);

    const src = lods[currSrcIdx].src;
    const lod = lods[Math.max(currLodIdx, 0)];
    const normalProps = omit(props, ["srcs", "delayMs"]);
    const style = { ...(lod.style ?? {}), ...(props.style ?? {}) };

    // eslint-disable-next-line jsx-a11y/alt-text
    return <RootImg {...normalProps} style={style} src={src} onLoad={onImageLoad} />;

    function onImageLoad() {
        if (currLodIdx + 1 < lods.length) {
            setTimeout(() => setCurrLodIdx(currLodIdx + 1), props.delayMs ?? 0);
        }
        if (currSrcIdx + 1 < lods.length) {
            setTimeout(() => setCurrSrcIdx(currSrcIdx + 1), props.delayMs ?? 0);
        }
    }
}

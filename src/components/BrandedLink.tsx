import { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { THEME } from "../constants";
import { cssUrlify } from "../util/css";

export interface BrandedLinkProps {
    img?: string;
    href?: string;
    bgColor: string;
    bgImg?: string;
    color?: string;
    name?: string;
    handle?: string;

    copyText?: string;
}

const BrandedLinkAnchor = styled.a<{ color: string; bgColor: string }>`
    color: ${p => p.color};
    background-color: ${p => p.bgColor};
    background-size: 100% 100%;

    padding: 0.5rem;
    border-radius: 0.5rem;
    text-decoration: none;

    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    :hover {
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2em;
`;

const MyImg = styled.img`
    height: 1.2em;
    padding: 0;
`;

const CenterDiv = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 0.5em;
`;

const NameSpan = styled.div`
    font-weight: bold;
`;

const HandleSpan = styled.span`
    font-family: ${THEME.fonts.monospace};
    font-size: 0.8em;
`;

export default function BrandedLink(props: BrandedLinkProps): JSX.Element {
    const { name, handle, color = "white", href, img, bgColor, bgImg } = props;

    const [wasCopied, setCopied] = useState(false);
    const clearCopyRef = useRef<any>();

    const onClickCopy = useCallback(() => {
        if (props.copyText == null) return;
        navigator.clipboard.writeText(props.copyText);

        clearTimeout(clearCopyRef.current);
        setCopied(true);
        clearCopyRef.current = setTimeout(() => setCopied(false), 3 * 1000);
    }, [props.copyText]);

    const isCopyOnly = props.copyText != null && href == null;

    return (
        <BrandedLinkAnchor
            color={color}
            href={isCopyOnly ? "#" : href}
            bgColor={bgColor}
            style={{
                backgroundImage: cssUrlify(bgImg),
            }}
            target={isCopyOnly ? undefined : "_blank"}
            rel="noreferrer"
            onClick={onClickCopy}
            title={isCopyOnly ? "Click to copy!" : undefined}
        >
            <CenterDiv>
                {img && <MyImg src={img} />}
                <NameSpan>{name}</NameSpan>
            </CenterDiv>
            <CenterDiv>
                <HandleSpan>{wasCopied ? "Copied!" : handle}</HandleSpan>
            </CenterDiv>
        </BrandedLinkAnchor>
    );
}

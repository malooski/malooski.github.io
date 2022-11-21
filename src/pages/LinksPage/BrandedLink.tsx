import styled from "styled-components";
import { cssUrlify } from "../../util/css";

export interface BrandedLinkProps {
    img?: string;
    href?: string;
    bgColor: string;
    bgImg?: string;
    color?: string;
    name?: string;
    handle?: string;
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

export default function BrandedLink(props: BrandedLinkProps): JSX.Element {
    const { name, handle, color = "white", href, img, bgColor, bgImg } = props;

    return (
        <BrandedLinkAnchor
            color={color}
            href={href}
            bgColor={bgColor}
            style={{
                backgroundImage: cssUrlify(bgImg),
            }}
            target="_blank"
            rel="noreferrer"
        >
            <CenterDiv>
                {img && <MyImg src={img} />}
                <NameSpan>{name}</NameSpan>
            </CenterDiv>
            <CenterDiv>
                <span>{handle}</span>
            </CenterDiv>
        </BrandedLinkAnchor>
    );
}

import styled from "styled-components";

export interface BrandedLinkProps {
    img?: string;
    href: string;
    bgColor: string;
    color?: string;
    text: string;
}

const RootAnchor = styled.a<{ color: string; bgColor: string }>`
    color: ${p => p.color};
    background-color: ${p => p.bgColor};

    padding: 0.5rem;
    border-radius: 1rem;
    text-decoration: none;

    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

    :hover {
        text-decoration: underline;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MyImg = styled.img`
    height: 1em;
    padding: 0;
    margin-right: 0.5rem;
`;

export default function BrandedLink(props: BrandedLinkProps): JSX.Element {
    const { text, color = "white", href, img, bgColor } = props;

    return (
        <RootAnchor color={color} href={href} bgColor={bgColor} target="_blank" rel="noreferrer">
            {img && <MyImg src={img} />}
            <span>{text}</span>
        </RootAnchor>
    );
}

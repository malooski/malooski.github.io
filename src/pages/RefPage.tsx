import { Fragment, useState } from "react";
import styled from "styled-components";

const REF_IMG_URL =
    "https://malooski-public.s3.us-east-2.amazonaws.com/Ref+Sheet+No+Descriptions.png";

const RefImgDiv = styled.div`
    position: relative;
`;

const RefImg = styled.img`
    width: 100%;
`;

interface HoverSpot {
    name: string;
    offsetX: number;
    offsetY: number;
    text: string;

    bbox: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}

const HOVER_SPOTS: HoverSpot[] = [
    {
        name: "Threat-Detecting Eyes",
        offsetX: 35,
        offsetY: 35,
        text: "A HUD overlay of the eyes, allowing the user to gauge threat model and priority.",
        bbox: {
            x: 31.5,
            y: 41.5,
            w: 16,
            h: 16,
        },
    },
    {
        name: "CyberSword",
        offsetX: 38,
        offsetY: 25,
        text: "Sometimes you need to defend yourself. Sometimes you need to bash a computer open.",
        bbox: {
            x: 2,
            y: 20,
            w: 35,
            h: 20,
        },
    },
    {
        name: "XR Goggles",
        offsetX: 33,
        offsetY: 78,
        text: "More than just for playing games, this device allows the user to visualize networks and systems.",
        bbox: {
            x: 31.5,
            y: 63.5,
            w: 14,
            h: 12,
        },
    },
    {
        name: "Antennae",
        offsetX: 25,
        offsetY: 45,
        text: "Sensitive to the tetrahertz frequencies, these antennae move like a slow, flame eminating from the horn.",
        bbox: {
            x: 4,
            y: 42,
            w: 20,
            h: 17,
        },
    },
    {
        name: "Liquid Cooling",
        offsetX: 65,
        offsetY: 20,
        text: "Internal systems run pretty hot and Liquid cooling can help regulate it.",
        bbox: {
            x: 67.5,
            y: 32,
            w: 15,
            h: 23,
        },
    },
    {
        name: "Augmentation Markings",
        offsetX: 80,
        offsetY: 20,
        text: "Cybernetic scars from previous, invasive modifications to improve biological compatibility with machines.",
        bbox: {
            x: 83.5,
            y: 30,
            w: 12.5,
            h: 12,
        },
    },
    {
        name: "Power Button",
        offsetX: 17,
        offsetY: 74,
        text: "Turns Malooski on.",
        bbox: {
            x: 16.7,
            y: 68.5,
            w: 2,
            h: 3,
        },
    },
];

export default function RefPage() {
    return (
        <Fragment>
            <RefImgDiv>
                {HOVER_SPOTS.map(hs => (
                    <HoverSpotEntry hoverSpot={hs} />
                ))}

                <RefImg src={REF_IMG_URL}></RefImg>
            </RefImgDiv>
        </Fragment>
    );
}

const HoverSpotDiv = styled.div`
    position: absolute;

    transition: opacity 250ms;

    background-color: rgba(0, 0, 0, 0.75);

    border-radius: 0.25em;

    max-width: 25%;

    padding: 0.5em;

    pointer-events: none;
`;

const HoverSpotBbox = styled.div`
    position: absolute;

    border: rgba(0, 0, 0, 0.5) 0.25em dashed;
    border-radius: 2em;
`;

const HoverSpotHeader = styled.div`
    font-weight: bold;
`;

function HoverSpotEntry(props: { hoverSpot: HoverSpot }) {
    const { hoverSpot } = props;

    const [isHovering, setHovering] = useState(false);

    return (
        <Fragment>
            <HoverSpotBbox
                onClick={() => setHovering(true)}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                style={{
                    top: `${hoverSpot.bbox.y}%`,
                    left: `${hoverSpot.bbox.x}%`,
                    width: `${hoverSpot.bbox.w}%`,
                    height: `${hoverSpot.bbox.h}%`,
                }}
            ></HoverSpotBbox>
            <HoverSpotDiv
                style={{
                    opacity: isHovering ? 1 : 0,
                    top: `${hoverSpot.offsetY}%`,
                    left: `${hoverSpot.offsetX}%`,
                }}
            >
                <HoverSpotHeader>{hoverSpot.name}</HoverSpotHeader>
                {hoverSpot.text}
            </HoverSpotDiv>
        </Fragment>
    );
}

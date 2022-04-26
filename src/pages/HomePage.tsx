import { Fragment, lazy, Suspense, useMemo, useState } from "react";
import styled from "styled-components";
import discordLogo from "../assets/discord logo.png";
import gumroadLogo from "../assets/gumroad logo.png";
import instagramLogo from "../assets/instagram logo.png";
import kofiLogo from "../assets/kofi logo.png";

import streamelementsLogo from "../assets/streamelements logo.png";
import throneLogo from "../assets/throne logo.png";
import tiktokLogo from "../assets/tiktok logo.png";
import twitchLogo from "../assets/twitch logo.png";
import twitterLogo from "../assets/twitter logo.png";
import youtubeLogo from "../assets/youtube logo.png";
import MyPage from "./MyPage";
import BrandedLink from "../components/BrandedLink";
import { Navbar } from "../components/Navbar";

const COLUMN_WIDTH = "200px";

const RootDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinksDiv = styled.div`
    padding: 1em 2em;
    border-radius: 2em;

    ul {
        text-align: center;
        padding: 0;
        list-style: none;

        display: grid;
        grid-template-columns: repeat(2, minmax(${COLUMN_WIDTH}, 1fr));

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(${COLUMN_WIDTH}, 1fr));
        }

        grid-gap: 1em;
    }
    li {
        display: flex;
        flex-direction: column;
    }
`;

interface LinkInfo {
    text: string;

    linkUrl: string;
    imgUrl: string;
    textColor: string;
    bgColor: string;

    isFave?: boolean;
}

const LINKS: LinkInfo[] = [
    {
        text: "Twitter",
        bgColor: "#1da1f2",
        textColor: "#fff",
        linkUrl: "https://twitter.com/malooski_vt",
        imgUrl: twitterLogo,
        isFave: true,
    },
    {
        text: "Twitch",
        bgColor: "#6441a5",
        textColor: "#fff",
        linkUrl: "https://twitch.tv/malooski",
        imgUrl: twitchLogo,
        isFave: true,
    },
    {
        text: "TikTok",
        bgColor: "#fe2c55",
        textColor: "white",
        imgUrl: tiktokLogo,
        linkUrl: "http://tiktok.com/@malooski",
    },

    {
        text: "Discord",
        bgColor: "#36393f",
        textColor: "white",
        imgUrl: discordLogo,
        linkUrl: "https://discord.com/invite/ahmyDJ5Pfr",
    },
    {
        text: "Gumroad",
        bgColor: "#f4f4f0",
        textColor: "black",
        imgUrl: gumroadLogo,
        linkUrl: "https://malooski.gumroad.com/",
    },
    {
        text: "Throne",
        bgColor: "#e4e1f9",
        textColor: "black",
        imgUrl: throneLogo,
        linkUrl: "https://thrn.co/u/malooski",
    },
    {
        text: "Ko-Fi",
        bgColor: "#ffffff",
        textColor: "black",
        imgUrl: kofiLogo,
        linkUrl: "https://ko-fi.com/malooski",
    },
    {
        text: "Instagram",
        bgColor: "#fafafa",
        textColor: "black",
        imgUrl: instagramLogo,
        linkUrl: "https://www.instagram.com/malooski_vt/",
    },
    {
        text: "StreamElements Tips",
        bgColor: "#1c233d",
        textColor: "white",
        imgUrl: streamelementsLogo,
        linkUrl: "https://streamelements.com/malooski/tip",
    },

    {
        text: "YouTube",
        bgColor: "#ff0000",
        textColor: "white",
        imgUrl: youtubeLogo,
        linkUrl: "https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg",
    },
    {
        text: "Highlights",
        bgColor: "#ff0000",
        textColor: "white",
        imgUrl: youtubeLogo,
        linkUrl: "https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ",
    },
    {
        text: "Archive",
        bgColor: "#ff0000",
        textColor: "white",
        imgUrl: youtubeLogo,
        linkUrl: "https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA",
    },
];

export default function HomePage() {
    const faveLinks = useMemo(() => LINKS.filter(link => link.isFave), [LINKS]);
    const notFaves = useMemo(() => LINKS.filter(link => !link.isFave), [LINKS]);

    return (
        <MyPage>
            <RootDiv>
                <LinksDiv>
                    <ul>
                        {faveLinks.map(l => (
                            <li key={l.text}>
                                <BrandedLink
                                    text={l.text}
                                    bgColor={l.bgColor}
                                    color={l.textColor}
                                    img={l.imgUrl}
                                    href={l.linkUrl}
                                />
                            </li>
                        ))}
                    </ul>
                </LinksDiv>
                <hr style={{ width: 400 }}></hr>
                <LinksDiv>
                    <ul>
                        {notFaves.map(l => (
                            <li key={l.text}>
                                <BrandedLink
                                    text={l.text}
                                    bgColor={l.bgColor}
                                    color={l.textColor}
                                    img={l.imgUrl}
                                    href={l.linkUrl}
                                />
                            </li>
                        ))}
                    </ul>
                </LinksDiv>
            </RootDiv>
        </MyPage>
    );
}

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

import BrandedLink, { BrandedLinkProps } from "../components/BrandedLink";

const COLUMN_WIDTH = "200px";

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

interface LinkInfo extends BrandedLinkProps {}

const LINKS: LinkInfo[] = [
    {
        text: "Schedule",
        hoverText: "What's on",
        bgColor: "#d77ed7",
        color: "#fff",
        href: "https://sched.maloo.ski",
    },
    {
        text: "Twitter",
        hoverText: "Follow me!",
        bgColor: "#1da1f2",
        color: "#fff",
        href: "https://twitter.com/malooski_vt",
        img: twitterLogo,
    },
    {
        text: "Twitch",
        hoverText: "Follow me!",
        bgColor: "#6441a5",
        color: "#fff",
        href: "https://twitch.tv/malooski",
        img: twitchLogo,
    },
    {
        text: "TikTok",
        bgColor: "#fe2c55",
        color: "white",
        img: tiktokLogo,
        href: "http://tiktok.com/@malooski",
    },

    {
        text: "Discord",
        bgColor: "#36393f",
        color: "white",
        img: discordLogo,
        href: "https://discord.com/invite/ahmyDJ5Pfr",
    },
    {
        text: "Gumroad",
        bgColor: "#f4f4f0",
        color: "black",
        img: gumroadLogo,
        href: "https://malooski.gumroad.com/",
    },
    {
        text: "Throne",
        bgColor: "#e4e1f9",
        color: "black",
        img: throneLogo,
        href: "https://thrn.co/u/malooski",
    },
    {
        text: "Ko-Fi",
        bgColor: "#ffffff",
        color: "black",
        img: kofiLogo,
        href: "https://ko-fi.com/malooski",
    },
    {
        text: "Instagram",
        bgColor: "#fafafa",
        color: "black",
        img: instagramLogo,
        href: "https://www.instagram.com/malooski_vt/",
    },
    {
        text: "StreamElements Tips",
        bgColor: "#1c233d",
        color: "white",
        img: streamelementsLogo,
        href: "https://streamelements.com/malooski/tip",
    },
    {
        text: "Twitter 🔞",
        hoverText: "Follow me!",
        bgColor: "#1da1f2",
        color: "#fff",
        href: "https://twitter.com/malewdski",
        img: twitterLogo,
    },
    {
        text: "YouTube",
        bgColor: "#ff0000",
        color: "white",
        img: youtubeLogo,
        href: "https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg",
    },
    {
        text: "Highlights",
        bgColor: "#ff0000",
        color: "white",
        img: youtubeLogo,
        href: "https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ",
    },
    {
        text: "Archive",
        bgColor: "#ff0000",
        color: "white",
        img: youtubeLogo,
        href: "https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA",
    },
];

export default function LinksPage() {
    return (
        <LinksDiv>
            <ul>
                {LINKS.map(l => (
                    <li key={l.text}>
                        <BrandedLink {...l} />
                    </li>
                ))}
            </ul>
        </LinksDiv>
    );
}

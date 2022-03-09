import styled from "styled-components";
import BrandedLink from "../components/BrandedLink";

import twitterLogo from "../assets/twitter logo.png";
import twitchLogo from "../assets/twitch logo.png";
import tiktokLogo from "../assets/tiktok logo.png";
import discordLogo from "../assets/discord logo.png";
import gumroadLogo from "../assets/gumroad logo.png";
import throneLogo from "../assets/throne logo.png";
import kofiLogo from "../assets/kofi logo.png";
import instagramLogo from "../assets/instagram logo.png";
import streamelementsLogo from "../assets/streamelements logo.png";
import youtubeLogo from "../assets/youtube logo.png";

import ScrollingBackdrop from "../components/ScrollingBackdrop";
import { Navbar } from "../components/Navbar";
import { lazy, Suspense, useState } from "react";

const DancingMaloo = lazy(() => import("../components/DancingMaloo"));

const COLUMN_WIDTH = "200px";

const RootDiv = styled.div``;

const LinksDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    padding: 2em;

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
const ShowModelButton = styled.button`
    position: fixed;
    bottom: 1em;
    right: 1em;

    z-index: 1000;
`;

export default function LinksPage() {
    const [showModel, setShowModel] = useState(false);

    return (
        <RootDiv>
            <ShowModelButton onClick={() => setShowModel(v => !v)}>Dance For Me</ShowModelButton>
            {showModel && (
                <Suspense fallback={null}>
                    <DancingMaloo />
                </Suspense>
            )}

            <ScrollingBackdrop />
            <Navbar />
            <LinksDiv>
                <ul>
                    <li>
                        <BrandedLink
                            text="Twitter"
                            bgColor="#1da1f2"
                            color="white"
                            img={twitterLogo}
                            href="https://twitter.com/malooski_vt"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Twitch"
                            bgColor="#6444a3"
                            color="white"
                            img={twitchLogo}
                            href="https://twitch.tv/malooski"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="TikTok"
                            bgColor="#fe2c55"
                            color="white"
                            img={tiktokLogo}
                            href="http://tiktok.com/@malooski"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Discord"
                            bgColor="#36393f"
                            color="white"
                            img={discordLogo}
                            href="https://discord.com/invite/ahmyDJ5Pfr"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Gumroad"
                            bgColor="#f4f4f0"
                            color="black"
                            img={gumroadLogo}
                            href="https://malooski.gumroad.com/"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Throne"
                            bgColor="#e4e1f9"
                            color="black"
                            img={throneLogo}
                            href="https://thrn.co/u/malooski"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Ko-Fi"
                            bgColor="#ffffff"
                            color="black"
                            img={kofiLogo}
                            href="https://ko-fi.com/malooski"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Instagram"
                            bgColor="#fafafa"
                            color="black"
                            img={instagramLogo}
                            href="https://www.instagram.com/malooski_vt/"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="StreamElements Tips"
                            bgColor="#1c233d"
                            color="white"
                            img={streamelementsLogo}
                            href="https://streamelements.com/malooski/tip"
                        />
                    </li>

                    <li>
                        <BrandedLink
                            text="YouTube"
                            bgColor="#ff0000"
                            color="white"
                            img={youtubeLogo}
                            href="https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Highlights"
                            bgColor="#ff0000"
                            color="white"
                            img={youtubeLogo}
                            href="https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ"
                        />
                    </li>
                    <li>
                        <BrandedLink
                            text="Archive"
                            bgColor="#ff0000"
                            color="white"
                            img={youtubeLogo}
                            href="https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA"
                        />
                    </li>
                </ul>
            </LinksDiv>
        </RootDiv>
    );
}

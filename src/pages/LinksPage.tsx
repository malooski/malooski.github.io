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
import streamlabsLogo from "../assets/streamlabs logo.png";

const LinksDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    padding: 2em;

    border-radius: 2em;

    ul {
        text-align: center;
        padding: 0;
        list-style: none;

        display: grid;
        grid-template-columns: repeat(2, minmax(200px, 1fr));

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(200px, 1fr));
        }

        grid-gap: 1em;
    }
    li {
        display: flex;
        flex-direction: column;
    }
`;
export default function HomePage() {
    return (
        <LinksDiv>
            <ul>
                <li>
                    <BrandedLink
                        text="Twitter"
                        bgColor="#1da1f2"
                        color="white"
                        img={twitterLogo}
                        href="https://twitter.com/malooskii"
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
                        text="Discord Server"
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
                        text="Throne (Wishlist)"
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
                        text="Streamlabs Tips"
                        bgColor="#80f5d2"
                        color="black"
                        img={streamlabsLogo}
                        href="https://streamlabs.com/malooski/"
                    />
                </li>
            </ul>
        </LinksDiv>
    );
}

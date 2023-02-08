import styled from "styled-components";

import cohostLogo from "../../assets/cohost logo.png";
import discordLogo from "../../assets/discord logo.png";
import gumroadLogo from "../../assets/gumroad logo.png";
import hiveLogo from "../../assets/hive logo.png";
import hiveBg from "../../assets/hive bg.jpg";
import instagramLogo from "../../assets/instagram logo.png";
import kofiLogo from "../../assets/kofi logo.png";
import mastodonLogo from "../../assets/mastodon logo.png";
import streamelementsLogo from "../../assets/streamelements logo.png";
import throneLogo from "../../assets/throne logo.png";
import tiktokLogo from "../../assets/tiktok logo.png";
import tumblrLogo from "../../assets/tumblr logo.png";
import twitchLogo from "../../assets/twitch logo.png";
import twitterLogo from "../../assets/twitter logo.png";
import youtubeLogo from "../../assets/youtube logo.png";
import vrchatLogo from "../../assets/vrchat logo.png";

import BrandedLink from "./BrandedLink";
import BrandedLinkGroup from "./BrandedLinkGroup";

const RootDiv = styled.div`
    display: grid;
    grid-column: auto;
    gap: 1em;
`;

export default function LinksPage() {
    return (
        <RootDiv>
            <BrandedLinkGroup name="🔴 Streaming">
                <BrandedLink
                    bgColor="#6441a5"
                    color="#fff"
                    href="https://twitch.tv/malooski"
                    img={twitchLogo}
                    handle="malooski"
                />
                <BrandedLink
                    name="Schedule"
                    bgColor="#d77ed7"
                    color="#fff"
                    href="https://sched.maloo.ski"
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="🐦 Micro-Blogs">
                <BrandedLink
                    name="Twitter"
                    bgColor="#1da1f2"
                    color="#fff"
                    href="https://twitter.com/malooski_vt"
                    img={twitterLogo}
                    handle="malooski_vt"
                />
                <BrandedLink
                    name="Twitter 🔞"
                    bgColor="#1da1f2"
                    color="#fff"
                    href="https://twitter.com/malewdski"
                    img={twitterLogo}
                    handle="malewdski"
                />

                <BrandedLink
                    name="Mastodon"
                    bgColor="#5c4fe5"
                    color="#fff"
                    href="https://vt.social/@malooski"
                    img={mastodonLogo}
                    handle="@malooski@vt.social"
                />

                <BrandedLink
                    name="Hive"
                    bgColor="#ffb300"
                    color="white"
                    img={hiveLogo}
                    handle="malooski"
                    bgImg={hiveBg}
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="🎥 Video">
                <BrandedLink
                    bgColor="#fe2c55"
                    color="white"
                    img={tiktokLogo}
                    href="http://tiktok.com/@malooski"
                    handle="malooski"
                />
                <BrandedLink
                    name="YouTube"
                    bgColor="#ff0000"
                    color="white"
                    img={youtubeLogo}
                    href="https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg"
                />
                <BrandedLink
                    name="Highlights"
                    bgColor="#ff0000"
                    color="white"
                    img={youtubeLogo}
                    href="https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ"
                />
                <BrandedLink
                    name="Archive"
                    bgColor="#ff0000"
                    color="white"
                    img={youtubeLogo}
                    href="https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA"
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="📚 Blogs">
                <BrandedLink
                    name="Cohost"
                    bgColor="#83254f"
                    color="white"
                    img={cohostLogo}
                    href="http://cohost.org/@malooski"
                    handle="malooski"
                />

                <BrandedLink
                    name="Tumblr"
                    bgColor="#2d4157"
                    color="white"
                    img={tumblrLogo}
                    href="http://tumblr.com/malooskivt"
                    handle="malooskivt"
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="💲 Donations">
                <BrandedLink
                    name="Ko-Fi"
                    bgColor="#ffffff"
                    color="black"
                    img={kofiLogo}
                    href="https://ko-fi.com/malooski"
                    handle="malooski"
                />
                <BrandedLink
                    name="StreamElements Tips"
                    bgColor="#1c233d"
                    color="white"
                    img={streamelementsLogo}
                    href="https://streamelements.com/malooski/tip"
                />

                <BrandedLink
                    name="Throne"
                    bgColor="#e4e1f9"
                    color="black"
                    img={throneLogo}
                    href="https://thrn.co/u/malooski"
                    handle="malooski"
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="🕹 Gaming">
                <BrandedLink
                    name="Discord"
                    bgColor="#36393f"
                    color="white"
                    img={discordLogo}
                    handle="malooski#0001"
                    copyText="malooski#0001"
                />
                <BrandedLink
                    name="Discord Server"
                    bgColor="#36393f"
                    color="white"
                    img={discordLogo}
                    href="https://discord.com/invite/ahmyDJ5Pfr"
                />

                <BrandedLink
                    name="VRChat"
                    bgColor="#36393f"
                    color="white"
                    img={vrchatLogo}
                    handle="malooski"
                    href="https://vrchat.com/home/user/usr_49c81fd0-97ed-4865-a498-8be4c0b74f9f"
                />
            </BrandedLinkGroup>

            <BrandedLinkGroup name="❓ Misc">
                <BrandedLink
                    name="Gumroad"
                    bgColor="#f4f4f0"
                    color="black"
                    img={gumroadLogo}
                    href="https://malooski.gumroad.com/"
                    handle="malooski"
                />

                <BrandedLink
                    name="Instagram"
                    bgColor="#fafafa"
                    color="black"
                    img={instagramLogo}
                    href="https://www.instagram.com/malooski_vt/"
                    handle="malooski_vt"
                />
            </BrandedLinkGroup>
        </RootDiv>
    );
}

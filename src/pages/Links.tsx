import BrandedLinkGroup from "../components/BrandedLinkGroup";
import FloatingMaloo from "../components/FloatingMaloo";

import * as classes from "./Links.module.scss";

import bskyLogo from "./../assets/brand logos/bluesky logo.png";
import cohostLogo from "./../assets/brand logos/cohost logo.png";
import discordLogo from "./../assets/brand logos/discord logo.png";
import gumroadLogo from "./../assets/brand logos/gumroad logo.png";
import instagramLogo from "./../assets/brand logos/instagram logo.png";
import kofiLogo from "./../assets/brand logos/kofi logo.png";
import mastodonLogo from "./../assets/brand logos/mastodon logo.png";
import streamelementsLogo from "./../assets/brand logos/streamelements logo.png";
import threadsLogo from "./../assets/brand logos/threads logo.png";
import throneLogo from "./../assets/brand logos/throne logo.png";
import tiktokLogo from "./../assets/brand logos/tiktok logo.png";
import tumblrLogo from "./../assets/brand logos/tumblr logo.png";
import twitchLogo from "./../assets/brand logos/twitch logo.png";
import twitterLogo from "./../assets/brand logos/twitter logo.png";
import vrchatLogo from "./../assets/brand logos/vrchat logo.png";
import youtubeLogo from "./../assets/brand logos/youtube logo.png";

import { motion } from "framer-motion";
import { GroupLinkModel } from "../models/LinkGroupModel";
import { LinkModel } from "../models/LinkModel";
import { SubLinkModel } from "../models/SubLinkModel";

const GROUPS: GroupLinkModel[] = [
    new GroupLinkModel({
        name: "🔴 Streaming",
        links: [
            new LinkModel({
                name: "Twitch",
                bgColor: "#6441a5",
                color: "#fff",
                href: "https://twitch.tv/malooski",
                img: twitchLogo,
                handle: "malooski",
            }),
            new LinkModel({
                name: "Schedule",
                bgColor: "#d77ed7",
                color: "#fff",
                href: "https://sched.maloo.ski",
            }),
        ],
    }),

    new GroupLinkModel({
        name: "🐦 Micro-Blogs",
        links: [
            new LinkModel({
                name: "Bluesky",
                bgColor: "#06152a",
                color: "#fff",
                href: "https://bsky.app/profile/maloo.ski",
                img: bskyLogo,
                handle: "@maloo.ski",
                new: true,
            }),
            new LinkModel({
                name: "Threads",
                bgColor: "#000000",
                color: "#fff",
                href: "https://www.threads.net/@malooski_vt",
                img: threadsLogo,
                handle: "@malooski_vt",
                handleHover: "@malooski_vt@threads.net",

                new: true,
                hidden: true,
            }),
            new LinkModel({
                name: "Twitter",
                bgColor: "#1da1f2",
                color: "#fff",
                href: "https://twitter.com/malooski_vt",
                img: twitterLogo,
                handle: "@malooski_vt",
            }),
            new LinkModel({
                name: "Twitter 🔞",
                bgColor: "#1da1f2",
                color: "#fff",
                href: "https://twitter.com/malewdski",
                img: twitterLogo,
                handle: "malewdski",
                hidden: true,
            }),

            new LinkModel({
                name: "Mastodon",
                bgColor: "#5c4fe5",
                color: "#fff",
                href: "https://vt.social/@malooski",
                img: mastodonLogo,
                handle: "@vt.social@malooski",
                hidden: true,
            }),
        ],
    }),

    new GroupLinkModel({
        name: "🎥 Video",
        links: [
            new LinkModel({
                name: "TikTok",
                bgColor: "#fe2c55",
                color: "white",
                img: tiktokLogo,
                href: "http://tiktok.com/@malooski",
                handle: "malooski",
            }),
            new LinkModel({
                name: "YouTube",
                bgColor: "#ff0000",
                color: "white",
                img: youtubeLogo,

                subLinks: [
                    new SubLinkModel({
                        name: "Main Channel",
                        href: "https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg",
                    }),
                    new SubLinkModel({
                        name: "Highlights",
                        href: "https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ",
                    }),
                    new SubLinkModel({
                        name: "Archive",
                        href: "https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA",
                    }),
                ],
            }),
        ],
    }),

    new GroupLinkModel({
        name: "📚 Blogs",
        links: [
            new LinkModel({
                name: "Cohost",
                bgColor: "#83254f",
                color: "white",
                img: cohostLogo,
                href: "http://cohost.org/malooski",
                handle: "malooski",
                new: true,
            }),

            new LinkModel({
                name: "Tumblr",
                bgColor: "#2d4157",
                color: "white",
                img: tumblrLogo,
                href: "http://tumblr.com/malooskivt",
                handle: "malooskivt",
                hidden: true,
            }),
        ],
    }),

    new GroupLinkModel({
        name: "💲 Donations",
        links: [
            new LinkModel({
                name: "Ko-Fi",
                bgColor: "#ffffff",
                color: "black",
                img: kofiLogo,
                href: "https://ko-fi.com/malooski",
                handle: "malooski",
            }),
            new LinkModel({
                name: "StreamElements Tips",
                bgColor: "#1c233d",
                color: "white",
                img: streamelementsLogo,
                href: "https://streamelements.com/malooski/tip",
                hidden: true,
            }),

            new LinkModel({
                name: "Throne",
                bgColor: "#e4e1f9",
                color: "black",
                img: throneLogo,
                href: "https://thrn.co/u/malooski",
                handle: "malooski",
                hidden: true,
            }),
        ],
    }),
    new GroupLinkModel({
        name: "🕹 Gaming",
        links: [
            new LinkModel({
                name: "Discord",
                bgColor: "#36393f",
                color: "white",
                img: discordLogo,
                subLinks: [
                    new LinkModel({
                        name: "My Server",
                        href: "https://discord.com/invite/ahmyDJ5Pfr",
                    }),
                    new LinkModel({
                        name: "My Profile",
                        handle: "malooski",
                        copyText: "malooski",
                        href: null,
                    }),
                ],
            }),
            new LinkModel({
                name: "VRChat",
                bgColor: "#36393f",
                color: "white",
                img: vrchatLogo,
                handle: "malooski",
            }),
        ],
    }),

    new GroupLinkModel({
        name: "❓ Misc",
        links: [
            new LinkModel({
                name: "Gumroad",
                bgColor: "#f4f4f0",
                color: "black",
                img: gumroadLogo,
                href: "https://malooski.gumroad.com/",
                handle: "malooski",
            }),

            new LinkModel({
                name: "Instagram",
                bgColor: "#fafafa",
                color: "black",
                img: instagramLogo,
                href: "https://www.instagram.com/malooski_vt/",
                handle: "malooski_vt",
                hidden: true,
            }),
        ],
    }),
];

export function Component() {
    return (
        <div className={classes.root}>
            <motion.div
                layout
                transition={{
                    duration: 10,
                    staggerChildren: 10,
                }}
                className={classes.linkGroups}
            >
                {GROUPS.map(group => (
                    <BrandedLinkGroup group={group} />
                ))}

                {/* <BrandedLinkGroup name="🔴 Streaming">
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
                        name="Bluesky"
                        bgColor="#06152a"
                        color="#fff"
                        href="https://bsky.app/profile/maloo.ski"
                        img={bskyLogo}
                        handle="@maloo.ski"
                        new
                    />
                    <BrandedLink
                        name="Threads"
                        bgColor="#000000"
                        color="#fff"
                        href="https://www.threads.net/@malooski_vt"
                        img={threadsLogo}
                        handle="@malooski_vt"
                        handleHover="@malooski_vt@threads.net"
                        new
                    />
                    <BrandedLink
                        name="Twitter"
                        bgColor="#1da1f2"
                        color="#fff"
                        href="https://twitter.com/malooski_vt"
                        img={twitterLogo}
                        handle="@malooski_vt"
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
                        subitems={[
                            {
                                name: "Main Channel",
                                href: "https://www.youtube.com/channel/UCXUF6xQFtLHKEJleSPbiJbg",
                            },
                            {
                                name: "Highlights",
                                href: "https://www.youtube.com/channel/UCHl8_eNCIcvK6dEcP4x1AoQ",
                            },
                            {
                                name: "Archive",
                                href: "https://www.youtube.com/channel/UCgz3FZft2qFflMrItqf3_yA",
                            },
                        ]}
                    />
                </BrandedLinkGroup>

                <BrandedLinkGroup name="📚 Blogs">
                    <BrandedLink
                        name="Cohost"
                        bgColor="#83254f"
                        color="white"
                        img={cohostLogo}
                        href="http://cohost.org/malooski"
                        handle="malooski"
                        new
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
                        subitems={[
                            {
                                name: "My Server",
                                href: "https://discord.com/invite/ahmyDJ5Pfr",
                            },
                            {
                                name: "My Profile",
                                handle: "malooski",
                                copyText: "malooski",
                                href: null,
                            },
                        ]}
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
                */}
            </motion.div>
            <FloatingMaloo />
        </div>
    );
}

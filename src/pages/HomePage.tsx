import styled from "styled-components";

const LinksDiv = styled.div`
    background-color: rgba(0, 0, 0, 0.75);
    padding: 2em;

    border-radius: 2em;

    ul {
        text-align: center;
        padding: 0;
        list-style: none;
    }
`;

export default function HomePage() {
    return (
        <LinksDiv>
            <ul>
                <li>
                    <a href="https://twitter.com/malooskii" target="_blank" rel="noreferrer">
                        Twitter
                    </a>
                </li>
                <li>
                    <a href="https://twitch.tv/malooski" target="_blank" rel="noreferrer">
                        Twitch
                    </a>
                </li>
                <li>
                    <a href="http://tiktok.com/@malooskii" target="_blank" rel="noreferrer">
                        TikTok
                    </a>
                </li>
                <li>
                    <a
                        href="https://discord.com/invite/ahmyDJ5Pfr"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Discord Server
                    </a>
                </li>
                <li>
                    <a href="https://malooski.gumroad.com/" target="_blank" rel="noreferrer">
                        Gumroad
                    </a>
                </li>
                <li>
                    <a href="https://thrn.co/u/malooski" target="_blank" rel="noreferrer">
                        Throne (Wishlist)
                    </a>
                </li>
                <li>
                    <a href="https://ko-fi.com/malooski" target="_blank" rel="noreferrer">
                        Ko-Fi
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/malooski_vt/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                </li>
                <li>
                    <a href="https://streamlabs.com/malooski/" target="_blank" rel="noreferrer">
                        Streamlabs Tips
                    </a>
                </li>
            </ul>
        </LinksDiv>
    );
}

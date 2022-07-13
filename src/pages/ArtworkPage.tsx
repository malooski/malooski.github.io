import MyPage from "./MyPage";

interface ArtworkInfo {
    thumbnailUrl: string;
    imgUrl?: string;

    tweetUrl?: string;
    authorName: string;
    authorUrl?: string;

    isComm?: boolean;
    isFanArt?: boolean;
}

const ARTWORKS: ArtworkInfo[] = [];

export default function AboutPage() {
    return (
        <MyPage title="Artwork">
            <p>Coming soon...</p>

            {ARTWORKS.map(a => a.authorName)}
        </MyPage>
    );
}

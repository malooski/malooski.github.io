import nekovoidCommUrl from "../assets/thumbnails/nekovoid comm.jpg";
import ranviCommClosedUrl from "../assets/thumbnails/ranvi comm closed.jpg";
import ranviCommOpenUrl from "../assets/thumbnails/ranvi comm open.jpg";
import rexCommUrl from "../assets/thumbnails/rex comm.jpg";
import soieDanceFanartUrl from "../assets/thumbnails/soie dance fanart.gif";
import trashpitsComm1Url from "../assets/thumbnails/trashpits comm 1.jpg";
import trashpitsComm2Url from "../assets/thumbnails/trashpits comm 2.jpg";
import hatchetCommUrl from "../assets/thumbnails/hatchet comm.jpg";
import yantiCommUrl from "../assets/thumbnails/yanti comm.jpg";

export enum ArtworkType {
    COMMISSION,
    FANART,
}

export interface ArtworkInfo {
    type: ArtworkType;

    thumbUrls: string[];
    imgUrl: string[];

    title?: string;

    workUrl: string;
    authorName: string;
    authorUrl?: string;
}

export const ARTWORKS: ArtworkInfo[] = [
    {
        title: "Wanna chill out?",
        type: ArtworkType.COMMISSION,
        thumbUrls: [yantiCommUrl],
        imgUrl: ["https://malooski-public.s3.us-east-2.amazonaws.com/artwork/yantl+comm.jpg"],
        workUrl: "https://twitter.com/malooski_vt/status/1555012934916624385",
        authorName: "Yantl Ayen",
        authorUrl: "https://www.fiverr.com/yanti_ayen_19",
    },
    {
        imgUrl: ["https://malooski-public.s3.us-east-2.amazonaws.com/artwork/hatchet+fullbody.jpg"],
        type: ArtworkType.COMMISSION,
        thumbUrls: [hatchetCommUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1552064016129875971",
        authorName: "Hatchet",
        authorUrl: "https://twitter.com/HatchetBat",
    },
    {
        imgUrl: [
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+A.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+A1.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+B.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/nekovoid+C.jpg",
        ],
        workUrl: "https://twitter.com/malooski_vt/status/1545386368850972672",
        thumbUrls: [nekovoidCommUrl],
        authorName: "Nekovoid",
        authorUrl: "https://www.fiverr.com/nekovoid",
        type: ArtworkType.COMMISSION,
    },
    {
        workUrl: "https://twitter.com/malooski_vt/status/1541513514904436738",
        imgUrl: [
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/trashpits+screens.jpg",
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/trashpits.jpg",
        ],
        thumbUrls: [trashpitsComm1Url, trashpitsComm2Url],
        authorName: "Trashpits",
        authorUrl: "https://twitter.com/trashpits",
        type: ArtworkType.COMMISSION,
    },
    {
        imgUrl: [],
        workUrl: "https://twitter.com/malooski_vt/status/1541927930246447104",
        thumbUrls: [ranviCommClosedUrl, ranviCommOpenUrl],
        authorName: "Ranvi",
        authorUrl: "https://twitter.com/OneLittleGnome",
        type: ArtworkType.COMMISSION,
    },
    {
        imgUrl: [],
        type: ArtworkType.COMMISSION,
        thumbUrls: [rexCommUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1544709179436371968",
        authorName: "Rex Felix",
        authorUrl: "https://twitter.com/RexFelixENVT",
    },
    {
        imgUrl: [
            "https://malooski-public.s3.us-east-2.amazonaws.com/artwork/soie+dance+fanart.gif",
        ],
        type: ArtworkType.FANART,
        thumbUrls: [soieDanceFanartUrl],
        workUrl: "https://twitter.com/malooski_vt/status/1545050758080368643",
        authorName: "Soie Swan",
        authorUrl: "https://twitter.com/SoieSwanVT",
    },
];

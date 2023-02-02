import nekovoidCommUrl from "../assets/thumbnails/nekovoid comm.jpg";
import ranviCommClosedUrl from "../assets/thumbnails/ranvi comm closed.jpg";
import ranviCommOpenUrl from "../assets/thumbnails/ranvi comm open.jpg";
import rexCommUrl from "../assets/thumbnails/rex comm.jpg";
import soieDanceFanartUrl from "../assets/thumbnails/soie dance fanart.gif";
import trashpitsComm1Url from "../assets/thumbnails/trashpits comm 1.jpg";
import trashpitsComm2Url from "../assets/thumbnails/trashpits comm 2.jpg";
import hatchetCommUrl from "../assets/thumbnails/hatchet comm.jpg";
import yantiCommUrl from "../assets/thumbnails/yanti comm.jpg";
import nicaMonamiCommUrl from "../assets/thumbnails/NicaMonami comm.jpg";
import sandforteCommUrl from "../assets/thumbnails/sandforte.jpg";
import luciousValentineCommUrl from "../assets/thumbnails/luscious comm.jpg";
import vitaDivataCommUrl from "../assets/thumbnails/vitadivata comm.jpg";
import tsulDesuCommUrl from "../assets/thumbnails/tsuldesu comm.jpg";
import furiwoCommUrl from "../assets/thumbnails/subfuriwo comm.jpg";
import spacetrashCommUrl from "../assets/thumbnails/spacetrash comm.jpg";

export enum ArtworkType {
    COMMISSION,
    FANART,
}

interface ArtworkAuthor {
    name: string;
    url?: string;
}

export interface ArtworkThumbnail {
    url: string;
}
export interface ArtworkInfo {
    id: string;
    type: ArtworkType;

    thumbnails: ArtworkThumbnail[];
    imgUrl: string[];

    title?: string;

    workUrl: string;
    author: ArtworkAuthor;
}

const ARTIST: Record<string, ArtworkAuthor> = {
    sandforte: {
        name: "Sandforte",
        url: "https://twitter.com/sandforte",
    },
    vitaDivata: {
        name: "Vita Divata",
        url: "https://twitter.com/VitaDivata0",
    },
    hatchet: { name: "Hatchet", url: "https://twitter.com/HatchetBat" },
    nicaMonami: { name: "Nica_Monami", url: "https://twitter.com/nica_monami" },
    lucious: { name: "Lucious Valentine", url: "https://twitter.com/Lucious_VT" },
    yantlAyen: { name: "Yantl Ayen", url: "https://www.fiverr.com/yanti_ayen_19" },
    nekovoid: {
        name: "Nekovoid",
        url: "https://www.fiverr.com/nekovoid",
    },
    trashpits: { name: "Trashpits", url: "https://twitter.com/trashpits" },
    ranvi: { name: "Ranvi", url: "https://twitter.com/OneLittleGnome" },
    tsulDesu: {
        name: "Tsul Desu",
        url: "https://twitter.com/TsulDesu",
    },
    furiwo: {
        name: "Furiwo",
        url: "https://twitter.com/sub_furiwo",
    },
    spacetrash: {
        name: "SpaceTrashVT",
        url: "https://twitter.com/SpaceTrashVT",
    },
};

const S3_ARTWORK_URL = "https://malooski-public.s3.us-east-2.amazonaws.com/artwork";

export const ARTWORKS: ArtworkInfo[] = [
    {
        id: "1620827061819691008",
        title: "The Information Superhighway",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: sandforteCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/Sandforte+comm.jpg`],
        workUrl: "https://twitter.com/sandforte/status/1620827061819691008",
        author: ARTIST.sandforte,
    },
    {
        id: "1615051232468471838",
        title: "Jumping into lightspeed",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: vitaDivataCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/vitadivata+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1615051232468471838",
        author: ARTIST.vitaDivata,
    },
    {
        id: "1582867998125084672",
        title: "Don't lose your head",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: spacetrashCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/spacetrash+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1582867998125084672",
        author: ARTIST.spacetrash,
    },
    {
        id: "1563167713945866240",
        title: "Come into my ship's quarters~",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: nicaMonamiCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/nicamonami+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1563167713945866240",
        author: ARTIST.nicaMonami,
    },
    {
        id: "1566458825703669761",
        title: "With a furry friend",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: furiwoCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/subfuriwo+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1566458825703669761",
        author: ARTIST.furiwo,
    },
    {
        id: "1569347212349521920",
        title: "Fuck your earth",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: luciousValentineCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/luscious+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1569347212349521920",
        author: ARTIST.lucious,
    },
    {
        id: "1564259247273172999",
        title: "Stay still~",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: tsulDesuCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/tsuldesu+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1564259247273172999",
        author: ARTIST.tsulDesu,
    },
    {
        id: "1555012934916624385",
        title: "Wanna chill out?",
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: yantiCommUrl }],
        imgUrl: [`${S3_ARTWORK_URL}/yantl+comm.jpg`],
        workUrl: "https://twitter.com/malooski_vt/status/1555012934916624385",
        author: ARTIST.yantlAyen,
    },
    {
        id: "1552064016129875971",
        title: "Floating through life",
        imgUrl: [`${S3_ARTWORK_URL}/hatchet+fullbody.jpg`],
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: hatchetCommUrl }],
        workUrl: "https://twitter.com/malooski_vt/status/1552064016129875971",
        author: ARTIST.hatchet,
    },
    {
        id: "1545386368850972672",
        title: "You didn't see me here",
        imgUrl: [
            `${S3_ARTWORK_URL}/nekovoid+A.jpg`,
            `${S3_ARTWORK_URL}/nekovoid+A1.jpg`,
            `${S3_ARTWORK_URL}/nekovoid+B.jpg`,
            `${S3_ARTWORK_URL}/nekovoid+C.jpg`,
        ],
        workUrl: "https://twitter.com/malooski_vt/status/1545386368850972672",
        thumbnails: [{ url: nekovoidCommUrl }],
        type: ArtworkType.COMMISSION,
        author: ARTIST.nekovoid,
    },
    {
        id: "1541513514904436738",
        title: "Running from everything",
        workUrl: "https://twitter.com/malooski_vt/status/1541513514904436738",
        imgUrl: [`${S3_ARTWORK_URL}/trashpits+screens.jpg`, `${S3_ARTWORK_URL}/trashpits.jpg`],
        thumbnails: [{ url: trashpitsComm1Url }, { url: trashpitsComm2Url }],
        author: ARTIST.trashpits,
        type: ArtworkType.COMMISSION,
    },
    {
        id: "1541927930246447104",
        imgUrl: [],
        workUrl: "https://twitter.com/malooski_vt/status/1541927930246447104",
        thumbnails: [{ url: ranviCommClosedUrl }, { url: ranviCommOpenUrl }],
        author: ARTIST.ranvi,
        type: ArtworkType.COMMISSION,
    },
    {
        id: "1544709179436371968",
        title: "Computers annoy me sometimes...",
        imgUrl: [],
        type: ArtworkType.COMMISSION,
        thumbnails: [{ url: rexCommUrl }],
        workUrl: "https://twitter.com/malooski_vt/status/1544709179436371968",
        author: { name: "Rex Felix", url: "https://twitter.com/RexFelixENVT" },
    },
    {
        id: "1545050758080368643",
        title: "🎶Dance till you're dead🎶",
        imgUrl: [`${S3_ARTWORK_URL}/soie+dance+fanart.gif`],
        type: ArtworkType.FANART,
        thumbnails: [{ url: soieDanceFanartUrl }],
        workUrl: "https://twitter.com/malooski_vt/status/1545050758080368643",
        author: { name: "Soie Swan", url: "https://twitter.com/SoieSwanVT" },
    },
];

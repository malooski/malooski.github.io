import { Fragment } from "react";
import styled from "styled-components";
import Link from "../components/Link";

interface CreditEntry {
    workName: string;
    workUrl?: string;

    authorName: string;
    authorUrl?: string;
}

const CREDITS: CreditEntry[] = [
    {
        workName: "Reference",
        workUrl: "https://twitter.com/malooski_vt/status/1541552859262730241",
        authorName: "enricaheid",
        authorUrl: "https://twitter.com/enricaheid",
    },
    {
        workName: "Emotes",
        workUrl: "https://twitter.com/malooski_vt/status/1556992651043512320",
        authorName: "Meirritory ",
        authorUrl: "https://www.fiverr.com/meirritory",
    },
    {
        workName: "Concept",
        workUrl: "https://twitter.com/malooski_vt/status/1541805801530064898",
        authorUrl: "https://twitter.com/ghostaficionado/",
        authorName: "ghostaficionado",
    },
    {
        workName: "Overlay",
        workUrl: "https://twitter.com/Delichan3D/status/1538888572769558529",
        authorUrl: "https://twitter.com/Delichan3D",
        authorName: "Delichan3D",
    },
    {
        workName: "Logo",
        workUrl: "https://twitter.com/malooski_vt/status/1513497107751133193",

        authorName: "Kota Kotonya",
        authorUrl: "https://twitter.com/KotaKotonya",
    },
    {
        workName: "Stream PNG",
        workUrl: "https://twitter.com/malooski_vt/status/1541927930246447104",
        authorUrl: "https://twitter.com/OneLittleGnome/",
        authorName: "Ranvi",
    },
    {
        workName: "Controller PNG",
        workUrl: "https://twitter.com/O_Kamivt/status/1550999923121856513",
        authorName: "Orion Kami",
        authorUrl: "https://twitter.com/O_Kamivt",
    },
];

const CREDITS_RADIUS = "1em";
const CreditsTable = styled.div`
    display: grid;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    border-radius: ${CREDITS_RADIUS};

    grid-template-columns: auto auto;

    // all cihldren
    & > div {
        padding: 1em 1em;

        &:first-child {
            border-top-left-radius: ${CREDITS_RADIUS};
        }
        &:nth-child(2) {
            border-top-right-radius: ${CREDITS_RADIUS};
        }

        &:last-child {
            border-bottom-right-radius: ${CREDITS_RADIUS};
        }
        &:nth-last-child(2) {
            border-bottom-left-radius: ${CREDITS_RADIUS};
        }

        &:nth-child(2n + 1) {
        }

        &:nth-child(4n + 1),
        &:nth-child(4n + 2) {
            background-color: rgba(0, 0, 0, 0.05);
        }
        &:nth-child(4n + 3),
        &:nth-child(4n) {
            background-color: rgba(255, 255, 255, 0.05);
        }
    }
`;

const CreditsHeader = styled.div`
    font-weight: bold;
    font-size: 1.2em;
`;

export default function AboutPage() {
    return (
        <Fragment>
            <h3>Credits</h3>
            <CreditsTable>
                <CreditsHeader>Work</CreditsHeader>
                <CreditsHeader>Author</CreditsHeader>
                {CREDITS.map(credit => (
                    <>
                        <div>
                            {credit.workUrl ? (
                                <Link href={credit.workUrl}>{credit.workName}</Link>
                            ) : (
                                <span>{credit.workName}</span>
                            )}
                        </div>

                        <div>
                            {credit.authorUrl ? (
                                <Link href={credit.authorUrl}>{credit.authorName}</Link>
                            ) : (
                                <span>{credit.authorName}</span>
                            )}
                        </div>
                    </>
                ))}
            </CreditsTable>
            <h3>Site</h3>
            <p>This site uses a collection of different technologies.</p>
            <ul>
                <li>TypeScript</li>
                <li>React</li>
                <li>Styled Components</li>
                <li>React Scripts</li>
                <li>Github Pages</li>
                <li>React Router</li>
            </ul>
        </Fragment>
    );
}

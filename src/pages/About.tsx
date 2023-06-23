import classes from "./About.module.scss";

import { Fragment } from "react";

interface CreditEntry {
    workName: string;
    workUrl?: string;

    authorName: string;
    authorUrl?: string;
}

const CREDITS: CreditEntry[] = [
    {
        workName: "Live2D Model Art",
        workUrl: "https://twitter.com/stupah/status/1627110601674866689",
        authorName: "cottonwings",
        authorUrl: "https://twitter.com/cottonwings",
    },
    {
        workName: "Live2D Rigging",
        workUrl: "https://twitter.com/stupah/status/1627110601674866689",
        authorName: "stupah",
        authorUrl: "https://twitter.com/stupah",
    },
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

export function Component() {
    return (
        <Fragment>
            <h3>Credits</h3>
            <div className={classes.creditsTable}>
                <div className={classes.creditsHeader}>Work</div>
                <div className={classes.creditsHeader}>Author</div>
                {CREDITS.map(credit => (
                    <>
                        <div>
                            {credit.workUrl ? (
                                <a href={credit.workUrl}>{credit.workName}</a>
                            ) : (
                                <span>{credit.workName}</span>
                            )}
                        </div>

                        <div>
                            {credit.authorUrl ? (
                                <a href={credit.authorUrl}>{credit.authorName}</a>
                            ) : (
                                <span>{credit.authorName}</span>
                            )}
                        </div>
                    </>
                ))}
            </div>
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

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { ArtworkInfo, ArtworkType } from "../lib/artwork";

import * as classes from "./ArtworkCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ArtworkCardProps {
    artwork: ArtworkInfo;
}

export default function ArtworkCard(props: ArtworkCardProps) {
    const { artwork } = props;

    const typeText = artwork.type === ArtworkType.COMMISSION ? "Commission" : "Fanart";

    const alt = `${artwork.title} by ${artwork.author.name}`;

    return (
        <Link to={`/artwork/${artwork.id}`}>
            <div className={classes.root}>
                <div className={classes.headerContainer}>
                    <div className={classes.info}>
                        <span>{artwork.title}</span>
                        <div>
                            <a href={artwork.workUrl} rel="noreferrer" target="_blank">
                                Source <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.footerContainer}>
                    <div className={classes.info}>
                        <span>{typeText}</span>
                        <a href={artwork.author.url} rel="noreferrer" target="_blank">
                            {artwork.author.name}{" "}
                            <FontAwesomeIcon size="xs" icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                </div>
                <img className={classes.thumbnail} src={artwork.thumbnails[0].url} alt={alt} />
            </div>
        </Link>
    );
}

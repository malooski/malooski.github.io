import { ARTWORKS } from "../lib/artwork";

import ArtworkCard from "../components/ArtworkCard";
import * as classes from "./ArtGallery.module.scss";

export function Component() {
    return (
        <div className={classes.root}>
            <span>A collection of Malooski commissions and fanarts.</span>
            <div className={classes.gallery}>
                {ARTWORKS.map(a => (
                    <ArtworkCard key={a.id} artwork={a} />
                ))}
            </div>
        </div>
    );
}

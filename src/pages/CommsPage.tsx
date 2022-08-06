import { Fragment } from "react";

const TRELLO_LINK = "https://trello.com/b/Ojv7sevw/malooski-commissions";

export default function AboutPage() {
    return (
        <Fragment>
            <a href={TRELLO_LINK} target="_blank" rel="noreferrer">
                Trello
            </a>

            <p>Coming soon...</p>
        </Fragment>
    );
}

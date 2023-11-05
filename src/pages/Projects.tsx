import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Projects.module.scss";

import { Fragment } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MY_BSKY_CIRCLE = "https://mycircle.maloo.ski";
const MY_BSKY_CIRCLE_REPO = "https://github.com/malooski/my-bsky-circle";

export function Component() {
    return (
        <Fragment>
            <h3>Projects</h3>

            <table className={classes.projectsTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href={MY_BSKY_CIRCLE} target="_blank" rel="noreferrer">
                                My Bsky Circle
                            </a>
                        </td>
                        <td>Discover your inner circle of friends on BlueSky!</td>
                        <td>
                            <a
                                className={classes.ghLink}
                                href={MY_BSKY_CIRCLE_REPO}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

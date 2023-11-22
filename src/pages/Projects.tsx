import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Projects.module.scss";

import { Fragment } from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MY_BSKY_CIRCLE = "https://mycircle.maloo.ski";
const MY_BSKY_CIRCLE_REPO = "https://github.com/malooski/my-bsky-circle";

const SKEET_BOT_URL_REPO = "https://github.com/malooski/skeet-discord-bot";
const SKEET_BOT_INVITE_URL =
    "https://discord.com/oauth2/authorize?client_id=1171491704814182482&scope=bot&permissions=2147485696";

export function Component() {
    return (
        <Fragment>
            <table className={classes.projectsTable}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <ProjectRow
                        name="My Bsky Circle"
                        link={MY_BSKY_CIRCLE}
                        description="Discover your inner circle of friends on BlueSky!"
                        githubLink={MY_BSKY_CIRCLE_REPO}
                    />

                    <ProjectRow
                        name="Skeet Discord Bot"
                        link={SKEET_BOT_INVITE_URL}
                        description="A Discord bot that tracks Bluesky posts to a channel."
                        githubLink={SKEET_BOT_URL_REPO}
                    />
                </tbody>
            </table>
        </Fragment>
    );
}

interface ProjectRowProps {
    name: string;
    link?: string;
    description: string;
    githubLink?: string;
}

function ProjectRow(props: ProjectRowProps) {
    const { name, link, description, githubLink } = props;

    return (
        <tr>
            <td>
                {link ? (
                    <a href={link} target="_blank" rel="noreferrer">
                        {name}
                    </a>
                ) : (
                    name
                )}
            </td>
            <td>{description}</td>
            <td>
                {githubLink && (
                    <a
                        className={classes.ghLink}
                        href={link ?? "#"}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                )}
            </td>
        </tr>
    );
}

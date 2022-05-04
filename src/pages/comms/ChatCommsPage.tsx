import styled from "styled-components";
import MyCommsPage from "./MyCommsPage";

const TRELLO_URL = "https://trello.com/b/Ojv7sevw/malooski-commissions";

const Underline = styled.span`
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

export default function CommsPage() {
    return (
        <MyCommsPage title="Commissions">
            <a href={TRELLO_URL} target="_blank" rel="noreferrer">
                Slots &amp; Progress
            </a>

            <p style={{ maxWidth: 900 }}>
                <h1>Custom Twitch Chat</h1>
                Usable with StreamLabs, StreamElements.
                <br />
                <br />
                <ul>
                    <li>HTML/CSS/JavaScript for use in StreamElements/StreamLabs</li>
                    <li>Access to private GitHub repo with source code.</li>
                    <li>Automatically builds every time repo is updated</li>
                    <li>60 days of fixes for bugs caused by OBS/StreamLabs/StreamElements</li>
                </ul>
                <h3>Packages</h3>
                <Underline>
                    <strong>Layout</strong>: $60
                </Underline>
                <br />
                Custom layout and basic styling.
                <br />
                <br />
                <Underline>
                    <strong>Form</strong>: $90
                </Underline>
                <br />
                Custom styling, layout, animation and basic functionality.
                <br />
                <br />
                <Underline>
                    <strong>Function</strong>: $120+
                </Underline>
                <br />
                Custom styling, layout, animations, and additional functionality.
                <br />
                <br />
                Examples of additional functionality:
                <ul>
                    <li>Reactions to commands</li>
                    <li>Death counters</li>
                    <li>Highlighting specific users (such as during a shoutout)</li>
                    <li>Highlighting new subscribers</li>
                </ul>
                <br />
                <strong>Note:</strong> if for any reason a project doesn't fit into these
                categories, please reach out and I'd be more than happy to discuss.
                <br />
                <br />
                <h3>Additional Services</h3>
                <Underline>
                    <strong>Tweaks &amp; Fixes</strong>: $10
                </Underline>
                <br />
                Small tweaks to existing projects
                <br />
                Fixes for bugs caused by OBS/StreamLabs/StreamElements.
                <br />I will fix the issue or tweak and update the project.
                <h3>Limitations</h3> I am not responsible for hosting any additional files. I will
                upload any additional files to a file hosting service and make their location easily
                editable; however, I cannot be responsible for any files uploaded to the file
                hosting service if they are removed, deleted, etc.
                <br />
                <br />
                <br />I am not liable for the use of any of the assets used in the project. You are
                responsible if any provided media are not licensed for your use.
            </p>
        </MyCommsPage>
    );
}

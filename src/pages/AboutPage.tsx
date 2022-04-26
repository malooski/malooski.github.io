import Link from "../components/Link";
import styled from "styled-components";
import MyPage from "./MyPage";

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);

    padding: 1em 2em;
    border-radius: 2em;

    h1,
    h3 {
        margin-top: 1em;
    }
`;

const CreditsTable = styled.table`
    border-collapse: collapse;

    tr {
        td:first-child {
            text-align: right;
        }
    }
`;

export default function AboutPage() {
    return (
        <MyPage>
            <h1>About</h1>
            <hr style={{ width: 200 }} />
            <h3>Credits</h3>
            <CreditsTable>
                <tbody>
                    <tr>
                        <td>3D Model</td>
                        <td>
                            <Link href="https://twitter.com/silvercatboi">SilverCatBoi</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Overlay</td>
                        <td>
                            <Link href="https://twitter.com/MyochiMioV">MochiMioV</Link>
                        </td>
                    </tr>
                    <tr>
                        <td>Twitch Emotes</td>
                        <td>
                            <Link href="https://twitter.com/KavyunArt">Kavyun</Link>
                        </td>
                    </tr>
                </tbody>
            </CreditsTable>
            <hr style={{ width: 200 }} />
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
        </MyPage>
    );
}

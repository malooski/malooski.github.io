import Link from "../components/Link";
import styled from "styled-components";

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 32px #000000 inset;

    width: 100%;

    padding: 2em 0;

    h3 {
        margin-top: 1em;
    }
`;

const CommTable = styled.table`
    thead {
        font-weight: bold;
        td {
            border-bottom: 1px solid white;
        }
    }
`;

export default function CommsPage() {
    return (
        <RootDiv>
            <h3>Chatboxes</h3>
            <p>Custom chatboxes for StreamLabs, StreamElements, or self-hosting.</p>
            <CommTable>
                <thead>
                    <tr>
                        <td>Complexity</td>
                        <td>Features</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Simple</td>
                        <td>Styling, animation</td>
                        <td>$80</td>
                    </tr>
                    <tr>
                        <td>Dynamic</td>
                        <td>Styling, animation, custom logic, interactions</td>
                        <td>$120</td>
                    </tr>
                    <tr>
                        <td>Unique</td>
                        <td>Styling, animation, custom logic, interactions, novel functionality</td>
                        <td>$200+</td>
                    </tr>
                </tbody>
            </CommTable>

            <h3>Vroid To VRChat</h3>
        </RootDiv>
    );
}

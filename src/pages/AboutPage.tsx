import styled from "styled-components";

const RootDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgba(0, 0, 0, 0.5);

    padding: 1em 2em;
    border-radius: 2em; ;
`;

export default function AboutPage() {
    return (
        <RootDiv>
            <h1>About</h1>
            <p></p>
        </RootDiv>
    );
}

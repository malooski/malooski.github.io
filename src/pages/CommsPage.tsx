import styled from "styled-components";
import MyPage from "./MyPage";

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
        <MyPage>
            <h3>Coming Soon...</h3>
        </MyPage>
    );
}

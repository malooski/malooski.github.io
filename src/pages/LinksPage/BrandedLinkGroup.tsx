import styled from "styled-components";
import { SMARTPHONE_SELECTOR } from "../../util/css";

interface BrandedLinkGroupProps {
    name: string;

    children?: React.ReactNode;
}

const RootDiv = styled.div``;
const ChildrenDiv = styled.div`
    display: grid;

    gap: 0.5em;

    grid-template-columns: 1fr 1fr;
    ${SMARTPHONE_SELECTOR} {
        grid-template-columns: 1fr;
    }
`;
const GroupName = styled.h3`
    padding-bottom: 0.25em;
    border-bottom: solid 1px white;
`;

export default function BrandedLinkGroup(props: BrandedLinkGroupProps) {
    const { name, children } = props;

    return (
        <RootDiv>
            <GroupName>{name}</GroupName>
            <ChildrenDiv>{children}</ChildrenDiv>
        </RootDiv>
    );
}

import { CommsNavbar } from "../../components/Navbar";
import MyPage, { MyPageProps } from "../MyPage";

export interface MyCommsPageProps extends MyPageProps {}

export default function MyCommsPage(props: MyCommsPageProps) {
    return (
        <MyPage title={props.title}>
            <CommsNavbar />
            {props.children}
        </MyPage>
    );
}

import { Outlet } from "react-router-dom";

import * as classes from "./FullPage.module.scss";

export default function FullPageLayout() {
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <Outlet />
            </div>
        </div>
    );
}

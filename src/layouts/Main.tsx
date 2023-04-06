import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import malooskiLogo from "../assets/Logo.png";
import FloatingMaloo from "../components/FloatingMaloo";

import * as classes from "./Main.module.scss";

export default function MainLayout() {
    return (
        <div className={classes.background}>
            <div className={classes.root}>
                <div className={classes.container}>
                    <FloatingMaloo />

                    <img className={classes.logoImage} src={malooskiLogo} />
                    <Navbar />

                    <div className={classes.contents}>
                        <Outlet />
                    </div>

                    <div className={classes.footer}>
                        <span className={classes.copyright}>&copy; 2022 Malooski</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

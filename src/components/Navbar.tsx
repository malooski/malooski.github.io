import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

const REFERENCE_URL = "https://malooski.notion.site/Reference-06d67a7b38df4a4a9bd3787410ad97b0";

export function Navbar() {
    return (
        <div className={classes.navDiv}>
            <NavLink className={classes.navLink} to="/">
                Home
            </NavLink>
            <NavLink className={classes.navLink} to="/artwork">
                Art Gallery
            </NavLink>
            <NavLink className={classes.navLink} to="/about">
                About
            </NavLink>
            <a className={classes.navLink} target="_blank" rel="norefferer" href={REFERENCE_URL}>
                Reference
            </a>
        </div>
    );
}

import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.scss";

export function Navbar() {
    return (
        <div className={classes.navDiv}>
            <NavLink className={classes.navLink} to="/">
                Home
            </NavLink>
            <NavLink className={classes.navLink} to="/projects">
                Projects
            </NavLink>

            <NavLink className={classes.navLink} to="/artwork">
                Art Gallery
            </NavLink>
            <NavLink className={classes.navLink} to="/about">
                About
            </NavLink>
        </div>
    );
}

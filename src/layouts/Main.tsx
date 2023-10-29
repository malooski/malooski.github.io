import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";

import malooskiLogo from "../assets/Logo.webp";

import * as classes from "./Main.module.scss";
import { useMemo } from "react";
import { sample } from "lodash";

const MESSAGES: string[] = [
    "Hot Alien Hackers in YOUR area!",
    "Hot Alien Hackers in YOUR area!",
    "Prepare for a digital adventure beyond the stars!",
    "Hacking the cosmos, one VTuber transmission at a time.",
    "Join the intergalactic quest for digital mastery with your favorite alien hacker!",
    "Welcome to the virtual realm where dorkiness and charm collide.",
    "Attractive, desirable, and smart: your extraterrestrial guide to cyberspace.",
    "A dorky alien hacker to help you navigate the digital universe.",
    "Buckle up, space cadets! Your cosmic journey to VTuber fame awaits.",
    "Where alien intellect meets human curiosity: a VTuber experience like no other.",
    "Hacker by day, cosmic heartthrob by night.",
    "Prepare to be virtually abducted by the galaxy's most dashing hacker!",
    "Get ready to blast off into a world of dorky charm and digital prowess.",
    "Unlock the secrets of cyberspace with your friendly neighborhood alien.",
    "The galaxy's most adorkable VTuber is ready to guide you through the digital cosmos.",
    "Hacking into your hearts and devices, one livestream at a time.",
    "A digital companion from the stars, ready to charm and entertain.",
    "The cosmic connection you didn't know you needed.",
    "Cracking codes and stealing glances, this alien has it all!",
    "Enchanting, enthralling, and just a little bit dorky.",
    "The most lovable hacker this side of the Milky Way.",
    "Cybersecurity has never been this attractive.",
    "Bridging the gap between human and extraterrestrial wit.",
    "Enter a world where dorkiness is the ultimate aphrodisiac.",
    "Outsmarting firewalls and winning hearts.",
    "The perfect blend of alien intellect and irresistible appeal.",
    "Your personal invitation to traverse the digital cosmos.",
];

export default function MainLayout() {
    const location = useLocation();
    const randMessage = useMemo(() => sample(MESSAGES)!, [location]);
    return (
        <div className={classes.background}>
            <div className={classes.root}>
                <div className={classes.container}>
                    <img alt="Malooski Logo" className={classes.logoImage} src={malooskiLogo} />
                    <span className={classes.randMessage}>{randMessage}</span>
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

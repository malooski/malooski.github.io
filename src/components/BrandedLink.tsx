import { useCallback, useRef, useState } from "react";
import { cssUrlify } from "../util/css";

import classes from "./BrandedLink.module.scss";

export interface BrandedLinkProps {
    img?: string;
    href?: string;
    bgColor: string;
    bgImg?: string;
    color?: string;
    name?: string;
    handle?: string;

    copyText?: string;

    new?: boolean;
}

function NewBadge() {
    return <span className={classes.newBadge}>New!</span>;
}

export default function BrandedLink(props: BrandedLinkProps): JSX.Element {
    const { name, handle, color = "white", href, img, bgColor, bgImg } = props;

    const [wasCopied, setCopied] = useState(false);
    const clearCopyRef = useRef<any>();

    const onClickCopy = useCallback(() => {
        if (props.copyText == null) return;
        navigator.clipboard.writeText(props.copyText);

        clearTimeout(clearCopyRef.current);
        setCopied(true);
        clearCopyRef.current = setTimeout(() => setCopied(false), 3 * 1000);
    }, [props.copyText]);

    const isCopyOnly = props.copyText != null && href == null;

    return (
        <a
            className={classes.root}
            href={isCopyOnly ? "#" : href}
            style={{
                color: color,
                backgroundColor: bgColor,
                backgroundImage: cssUrlify(bgImg),
            }}
            target={isCopyOnly ? undefined : "_blank"}
            rel="noreferrer"
            onClick={onClickCopy}
            title={isCopyOnly ? "Click to copy!" : undefined}
        >
            {props.new && <NewBadge />}
            <div className={classes.centerDiv}>
                {img && <img className={classes.myImg} src={img} />}
                <div className={classes.name}>{name}</div>
            </div>
            <div className={classes.centerDiv}>
                <span className={classes.handle}>{wasCopied ? "Copied!" : handle}</span>
            </div>
        </a>
    );
}

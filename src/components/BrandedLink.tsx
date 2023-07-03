import { useCallback, useMemo, useRef, useState } from "react";
import { cssUrlify } from "../util/css";
import { LayoutGroup, motion, AnimatePresence } from "framer-motion";
import { observer } from "mobx-react";

import classes from "./BrandedLink.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { useDebounce } from "../lib/react";

interface BaseBrandedLinkInfo {
    name?: string;
    handle?: string;
    href?: string | undefined | null;

    color?: string;
    bgColor?: string;

    img?: string;

    copyText?: string | undefined | null;
    new?: boolean;
}

export interface BrandedLinkInfo extends BaseBrandedLinkInfo {
    subitems?: Array<BaseBrandedLinkInfo>;
}

export interface BrandedLinkProps extends BrandedLinkInfo {}

function NewBadge() {
    return (
        <motion.span
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, rotate: 360 * 5 }}
            animate={{
                opacity: 1,
                rotate: -15,
            }}
            exit={{ opacity: 0 }}
            className={classes.newBadge}
        >
            New!
        </motion.span>
    );
}

export const BrandedLink = observer((props: BrandedLinkProps): JSX.Element => {
    const { subitems } = props;

    const [isChevronRotated, setChevronRotated] = useState(false);
    const [isExpanded, setExpanded] = useState(false);

    const isExpandable = subitems != null && subitems.length > 0;

    const collapseTimeoutRef = useRef<any>();

    function onExpandSubItems() {
        if (!isExpandable) return;

        setExpanded(!isExpanded);
        setChevronRotated(!isExpanded);
    }

    function onMouseLeave() {
        if (!isExpandable) return;
        collapseTimeoutRef.current = setTimeout(() => setExpanded(false), 2000);

        setChevronRotated(false);
    }

    function onMouseEnter() {
        if (!isExpandable) return;

        clearTimeout(collapseTimeoutRef.current);
        if (!isExpanded) return;

        setChevronRotated(true);
    }

    return (
        <motion.div
            layout
            layoutRoot
            transition={{
                duration: 0.5,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={classes.container}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <BaseBrandedLink
                {...props}
                onClick={onExpandSubItems}
                rightItems={
                    isExpandable && <ExpandButton color={props.color} expanded={isChevronRotated} />
                }
            />

            <AnimatePresence>
                {isExpanded &&
                    (props.subitems ?? []).map((subitem, idx) => (
                        <BaseBrandedLink {...{ ...props, ...subitem }} />
                    ))}
            </AnimatePresence>
        </motion.div>
    );
});

interface BaseBrandedLinkProps extends BaseBrandedLinkInfo {
    rightItems?: React.ReactNode;
    onClick?: () => void;
}

function BaseBrandedLink(props: BaseBrandedLinkProps) {
    const {
        name,
        handle,
        color = "white",
        href,
        img,
        bgColor,
        copyText,
        rightItems,
        onClick,
    } = props;

    const [wasCopied, setCopied] = useState(false);
    const clearCopyRef = useRef<any>();

    const style = useMemo(
        () => ({
            color: color,
            backgroundColor: bgColor,
        }),
        [color, bgColor]
    );

    const onClickCopy = useCallback(() => {
        if (copyText == null) return;
        navigator.clipboard.writeText(copyText);

        clearTimeout(clearCopyRef.current);
        setCopied(true);
        clearCopyRef.current = setTimeout(() => setCopied(false), 3 * 1000);
    }, [copyText]);

    const showRightItems = rightItems != null;
    const showHandle = handle != null;
    const isCopyOnly = href == null && handle != null;
    const myHref = isCopyOnly ? undefined : href;

    return (
        <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className={classes.brandedLink}
            href={myHref ?? undefined}
            style={style}
            target={isCopyOnly ? undefined : "_blank"}
            rel="noreferrer"
            onClick={onClick ?? onClickCopy}
            title={isCopyOnly ? "Click to copy!" : undefined}
        >
            <div className={classes.centerDiv}>
                {img && <img className={classes.myImg} src={img} />}
                <div className={classes.name}>{name}</div>
            </div>
            {props.new && <NewBadge />}

            {showRightItems && <div className={classes.rightItems}>{props.rightItems}</div>}
            {showHandle && <span className={classes.handle}>{wasCopied ? "Copied!" : handle}</span>}
        </motion.a>
    );
}

interface ExpandButtonProps {
    color?: string;
    expanded?: boolean;
    onClick?: (e: React.SyntheticEvent<any, any>) => void;
}

const ExpandButton = observer((props: ExpandButtonProps) => {
    const { expanded, color, onClick } = props;

    return (
        <motion.button
            onClick={onClick}
            animate={{ rotate: expanded ? 0 : 90 }}
            whileHover={{ scale: 1.2 }}
            className={classes.expandButton}
        >
            <FontAwesomeIcon color={color} icon={faAngleDoubleDown} />
        </motion.button>
    );
});

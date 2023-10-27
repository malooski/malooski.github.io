import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react";
import { useCallback, useMemo, useRef, useState } from "react";

import { faAngleDoubleDown, faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkModel } from "../models/LinkModel";
import { SubLinkModel } from "../models/SubLinkModel";
import classes from "./BrandedLink.module.scss";

export interface BrandedLinkProps {
    link: LinkModel;
}

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
    const { link } = props;

    const [isChevronRotated, setChevronRotated] = useState(false);
    const [isExpanded, setExpanded] = useState(false);

    const isExpandable = link.subLinks.length > 0;

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
                    isExpandable && <ExpandButton color={link.color} expanded={isChevronRotated} />
                }
            />

            <AnimatePresence>
                {isExpanded &&
                    link.subLinks.map(subLink => (
                        <BaseBrandedLink link={subLink} parentLink={link} />
                    ))}
            </AnimatePresence>
        </motion.div>
    );
});

interface BaseBrandedLinkProps {
    link: LinkModel | SubLinkModel;
    parentLink?: LinkModel;
    rightItems?: React.ReactNode;
    onClick?: () => void;
}

const BaseBrandedLink = observer((props: BaseBrandedLinkProps) => {
    const { link, parentLink } = props;

    const [wasCopied, setCopied] = useState(false);
    const clearCopyRef = useRef<any>();

    const style = {
        color: link.color ?? parentLink?.color,
        backgroundColor: link.bgColor ?? parentLink?.bgColor,
    };

    const onClickCopy = useCallback(() => {
        if (link.copyText == null) return;
        navigator.clipboard.writeText(link.copyText);

        clearTimeout(clearCopyRef.current);
        setCopied(true);
        clearCopyRef.current = setTimeout(() => setCopied(false), 3 * 1000);
    }, [link.copyText]);

    const showRightItems = props.rightItems != null;
    const showHandle = link.handle != null;
    const isCopyOnly = !link.href && link.handle != null;
    const myHref = isCopyOnly ? undefined : link.href;

    const handleTitle = link.handleHover ?? link.handle;

    const img = link.img ?? parentLink?.img;

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
            onClick={props.onClick ?? onClickCopy}
            title={isCopyOnly ? "Click to copy!" : undefined}
        >
            <div className={classes.centerDiv}>
                {img && <img className={classes.myImg} src={img} />}
                <div className={classes.name}>{link.name}</div>
            </div>
            {link.new && <NewBadge />}

            {showRightItems && <div className={classes.rightItems}>{props.rightItems}</div>}
            {showHandle && (
                <span title={handleTitle} className={classes.handleDiv}>
                    <span className={classes.handle}>{wasCopied ? "Copied!" : link.handle}</span>
                    {isCopyOnly && <FontAwesomeIcon className={classes.copyIcon} icon={faCopy} />}
                </span>
            )}
        </motion.a>
    );
});

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

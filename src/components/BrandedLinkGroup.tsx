import { observer } from "mobx-react";
import { GroupLinkModel } from "../models/LinkGroupModel";
import { BrandedLink } from "./BrandedLink";
import * as classes from "./BrandedLinkGroup.module.scss";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface BrandedLinkGroupProps {
    group: GroupLinkModel;
}

export default motion(
    observer(function BrandedLinkGroup(props: BrandedLinkGroupProps) {
        const { group } = props;

        const shownLinks = group.links.filter(link => !link.hidden || group.isShowingHidden);
        const hiddenLinks = group.links.filter(link => link.hidden);

        return (
            <motion.div
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: 1,
                    height: "auto",
                }}
                className={classes.root}
            >
                <h3 className={classes.header}>
                    {group.name}

                    {hiddenLinks.length > 0 && (
                        <div className={classes.hiddenButtonDiv}>
                            <ToggleHiddenButton
                                count={hiddenLinks.length}
                                onClick={() => group.toggleShowingHidden()}
                                isShowingHidden={group.isShowingHidden}
                            />
                        </div>
                    )}
                </h3>
                <div className={classes.children}>
                    {shownLinks.map(link => (
                        <BrandedLink key={link.name} link={link} />
                    ))}
                </div>
            </motion.div>
        );
    })
);

function ToggleHiddenButton(props: {
    onClick: () => void;
    isShowingHidden: boolean;
    count: number;
}) {
    const { onClick, isShowingHidden, count } = props;
    return (
        <motion.button
            aria-label="Toggle hidden links"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.33, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05, opacity: 0.5 }}
            onClick={onClick}
            className={classes.toggleHiddenButton}
            title={isShowingHidden ? `Hide ${count} links` : `Show ${count} links`}
        >
            <FontAwesomeIcon icon={isShowingHidden ? faEye : faEyeSlash} />
        </motion.button>
    );
}

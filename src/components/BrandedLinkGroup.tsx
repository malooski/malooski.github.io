import * as classes from "./BrandedLinkGroup.module.scss";

import { LayoutGroup, motion, AnimatePresence } from "framer-motion";

interface BrandedLinkGroupProps {
    name: string;

    children?: React.ReactNode;
}

export default motion(function BrandedLinkGroup(props: BrandedLinkGroupProps) {
    const { name, children } = props;

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
            <h3 className={classes.header}>{name}</h3>
            <div className={classes.children}>{children}</div>
        </motion.div>
    );
});

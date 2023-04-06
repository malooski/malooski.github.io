import * as classes from "./BrandedLinkGroup.module.scss";

interface BrandedLinkGroupProps {
    name: string;

    children?: React.ReactNode;
}

export default function BrandedLinkGroup(props: BrandedLinkGroupProps) {
    const { name, children } = props;

    return (
        <div className={classes.root}>
            <h3 className={classes.header}>{name}</h3>
            <div className={classes.children}>{children}</div>
        </div>
    );
}

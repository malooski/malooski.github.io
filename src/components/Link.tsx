export interface LinkProps extends React.HTMLProps<HTMLAnchorElement> {}

export default function Link(props: LinkProps) {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...props} target="_blank" rel="noreferrer" />;
}

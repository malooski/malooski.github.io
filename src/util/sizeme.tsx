import { SizeMe, SizeMeOptions, SizeMeProps } from "react-sizeme";

/**
 * Wrap a component with the SizeMe component.
 */
export function wrapSizeMe<P extends {} = {}>(
    opts: SizeMeOptions,
    Component: (props: P & SizeMeProps) => JSX.Element
): (props: P) => JSX.Element {
    return (props: P) => (
        <SizeMe {...opts}>{({ size }) => <Component {...props} size={size} />}</SizeMe>
    );
}

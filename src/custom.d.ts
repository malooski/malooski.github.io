declare module "*.module.css" {
    const classesCSS: { [key: string]: string };
    export = classesCSS;
}
declare module "*.module.scss" {
    const classesSCSS: { [key: string]: string };
    export = classesSCSS;
}

declare module "*.png" {
    const srcValue: string;
    export = srcValue;
}

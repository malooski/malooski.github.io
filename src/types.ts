declare module "*.module.css" {
    const classes: { [key: string]: string };
    export = classes;
}
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export = classes;
}

declare module "*.png" {
    const value: string;
    export = value;
}

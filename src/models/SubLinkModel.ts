import { makeAutoObservable } from "mobx";

export interface IBaseLinkModelArgs {
    name: string;
    handle?: string;
    handleHover?: string;
    href?: string | undefined | null;

    color?: string;
    bgColor?: string;

    img?: string;
    imgOnly?: boolean;

    copyText?: string | undefined | null;

    new?: boolean;
    hidden?: boolean;
}

export interface IBaseLinkModel {
    name: string;
    handle?: string;
    handleHover?: string;
    href?: string | undefined | null;

    color?: string;
    bgColor?: string;

    img?: string;
    imgOnly: boolean;

    copyText?: string | undefined | null;

    new: boolean;
    hidden: boolean;
}

export interface ISubLinkModelArgs extends IBaseLinkModelArgs {}

export class SubLinkModel implements IBaseLinkModel {
    readonly name: string;
    readonly handle?: string;
    readonly handleHover?: string;
    readonly href?: string | undefined | null;

    readonly color?: string;
    readonly bgColor?: string;

    readonly img?: string;
    readonly imgOnly: boolean;

    readonly copyText?: string | undefined | null;

    readonly new: boolean;
    readonly hidden: boolean;

    constructor(args: ISubLinkModelArgs) {
        this.name = args.name;
        this.handle = args.handle;
        this.handleHover = args.handleHover;
        this.href = args.href;
        this.color = args.color;
        this.bgColor = args.bgColor;
        this.img = args.img;
        this.copyText = args.copyText;
        this.new = args.new ?? false;
        this.hidden = args.hidden ?? false;
        this.imgOnly = args.imgOnly ?? false;

        makeAutoObservable(this);
    }
}

import { makeAutoObservable } from "mobx";

export interface IBaseLinkModelArgs {
    name: string;
    handle?: string;
    handleHover?: string;
    href?: string | undefined | null;

    color?: string;
    bgColor?: string;

    img?: string;

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

    copyText?: string | undefined | null;

    new: boolean;
    hidden: boolean;
}

export interface ISubLinkModelArgs extends IBaseLinkModelArgs {}

export class SubLinkModel implements IBaseLinkModel {
    name: string;
    handle?: string;
    handleHover?: string;
    href?: string | undefined | null;

    color?: string;
    bgColor?: string;

    img?: string;

    copyText?: string | undefined | null;

    new: boolean;
    hidden: boolean;

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

        makeAutoObservable(this);
    }
}

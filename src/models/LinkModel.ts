import { makeAutoObservable } from "mobx";
import { IBaseLinkModel, IBaseLinkModelArgs, SubLinkModel } from "./SubLinkModel";

interface LinkModelArgs extends IBaseLinkModelArgs {
    subLinks?: SubLinkModel[];
}

export class LinkModel implements IBaseLinkModel {
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

    readonly subLinks: SubLinkModel[];

    constructor(args: LinkModelArgs) {
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
        this.subLinks = args.subLinks ?? [];
        this.imgOnly = args.imgOnly ?? false;

        makeAutoObservable(this);
    }
}

import { makeAutoObservable } from "mobx";
import { LinkModel } from "./LinkModel";

interface GroupLinkModelArgs {
    name: string;
    links?: LinkModel[];
    hidden?: boolean;
}

export class GroupLinkModel {
    readonly name: string;
    readonly links: LinkModel[];
    readonly hidden: boolean;

    isShowingHidden: boolean = false;

    constructor(args: GroupLinkModelArgs) {
        this.name = args.name;
        this.links = args.links ?? [];
        this.hidden = args.hidden ?? false;

        makeAutoObservable(this);
    }

    toggleShowingHidden() {
        this.isShowingHidden = !this.isShowingHidden;
    }
}

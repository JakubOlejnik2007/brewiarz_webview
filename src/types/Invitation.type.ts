import type { Psalm } from "./Psalm.type";

export type Invitation = {
    name: "Wezwanie";
    antiphon: string;
}

export type InvitationPsalms = {
    name: "Wezwanie";
    psalms: Psalm[]
}
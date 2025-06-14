import type { TPsalm } from "./Psalm.type";

export type Invitation = {
    name: "Wezwanie";
    antiphon: string;
}

export type InvitationPsalms = {
    name: "Wezwanie";
    psalms: [TPsalm, TPsalm, TPsalm, TPsalm]
}
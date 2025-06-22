import type { TPsalm } from "./Psalm.type";

export type TInvitation = {
    name: "Wezwanie";
    antiphon: string;
}

export type TInvitationPsalms = {
    name: "Wezwanie";
    psalms: [TPsalm, TPsalm, TPsalm, TPsalm]
}
import type { TInvitation } from "./Invitation.type";
import type { TOfficeOfReadings } from "./OfficeOfReadings.type";

export interface FullOffice {
    name: string;
    hours: (TInvitation | TOfficeOfReadings)[]
}
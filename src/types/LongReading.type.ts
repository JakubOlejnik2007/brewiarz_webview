import type { TResponsory } from "./Responsory.type";

export type TLongReading = {
    number: "I" | "II" | "III" | "IV";
    name: string;
    sigla: string;
    title: string;
    content: string;
    responsory: TResponsory
}
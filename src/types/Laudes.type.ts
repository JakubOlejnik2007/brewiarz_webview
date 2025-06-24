import type { TPsalmodia } from "./Psalmodia.type";
import type { TResponsory } from "./Responsory.type";
import type { TShortReading } from "./ShortReading.type";
import type { TIntercessions } from "./TIntercessions.type";

export interface TLaudes {
    name: "Jutrznia",
    hymn: string[],
    psalmodia: TPsalmodia,
    reading: TShortReading,
    responsory: TResponsory,
    antiphon: string[],
    intercessions: TIntercessions,
    prayer: string[]
}
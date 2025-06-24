import type { TLongReading } from "./LongReading.type"
import type { TPsalm } from "./Psalm.type"
import type { TPsalmodia } from "./Psalmodia.type"

export type TOfficeOfReadings = {
    name: "Godzina czytań",
    isTeDeum: boolean,
    hymn: string[],
    psalmodia: TPsalmodia,
    verse: string[],
    readings: TLongReading[],
    prayer: string[]
}
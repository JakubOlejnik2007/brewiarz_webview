import type { TLongReading } from "./LongReading.type"
import type { TPsalm } from "./Psalm.type"

export type TOfficeOfReadings = {
    name: "Godzina czytań",
    isTeDeum: boolean,
    hymn: string[],
    psalmodia: [TPsalm, TPsalm, TPsalm],
    verse: string[],
    readings: TLongReading[],
    prayer: string
}
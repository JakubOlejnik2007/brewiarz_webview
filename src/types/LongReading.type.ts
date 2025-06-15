export type LongReading = {
    number: "I" | "II" | "III" | "IV";
    name: string;
    sigla: string;
    title: string;
    content: string;
    responsory: {
        por: string,
        content: string[]
    }
}
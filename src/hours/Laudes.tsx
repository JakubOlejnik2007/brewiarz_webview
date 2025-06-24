import Hymn from "../partials/Hymn";
import Intercessions from "../partials/Intercessions";
import LV_ending from "../partials/LV_ending";
import Pater from "../partials/Pater";
import Prayer from "../partials/Prayer";
import Psalmodia from "../partials/Psalmodia";
import Responsory from "../partials/Responsory";
import ShortReading from "../partials/ShortReading";
import type { TLaudes } from "../types/Laudes.type";

const Laudes = ({ hymn, psalmodia, reading, intercessions, responsory, prayer }: TLaudes) => {
    return (
        <section className="laudes">
            <h2 className="hour__heading">Jutrznia</h2>
            <Hymn hymns={hymn} />
            <Psalmodia psalmodia={psalmodia} />
            <ShortReading {...reading} />
            <Responsory {...responsory} />
            <Intercessions {...intercessions} />
            <Pater />
            <Prayer prayers={prayer} />
            <LV_ending />
        </section>
    )
}

export default Laudes;
import OfficeOfReadingsData from "C:\\Users\\Jakub\\Desktop\\brewiarz\\Tom III\\const\\office_of_readings.json";
import "../sass/OfficeOfReadings.scss"
import ShowTeDeum from "../partials/ShowTeDeum";
import type { TOfficeOfReadings } from "../types/OfficeOfReadings.type";
import Psalm from "../partials/Psalm";
import LongReading from "../partials/LongReading";



const OfficeOfReadings = ({ isTeDeum, hymn, psalmodia, verse, readings, ...props }: TOfficeOfReadings) => {

    return (
        <section className="ofr">
            <h2 className="invitation__heading">Godzina Czytań</h2>

            <p className="ofr__introduction indentation__block">
                <span className="additional">K. </span>Boże, wejrzyj ku wspomożeniu memu.<br />
                <span className="additional">W. </span>Panie, pośpiesz ku ratunkowi memu.
            </p>

            <p className="ofr__introduction">
                Chwała Ojcu i Synowi, i Duchowi Świętemu <br />
                Jak była na początku, teraz i zawsze, <br />
                i na wieki wieków. Amen. Alleluja.
            </p>

            <p className="ofr__introduction indentation additional">
                Powyższe teksty opuszcza się, jeśli tę Godzinę poprzedza Wezwanie.
            </p>
            {
                isTeDeum ? <><ShowTeDeum text={OfficeOfReadingsData.TeDeum[0]} />
                    <ShowTeDeum text={OfficeOfReadingsData.TeDeum[1]} /></> : ""
            }

            {
                psalmodia.map((psalm, idx) => {
                    return (
                        <Psalm {...psalm} count={(idx + 1) as 1 | 2 | 3} />
                    )
                })
            }

            <p className="ofr__introduction indentation__block">
                <span className="additional">K. </span>{verse[0]}<br />
                <span className="additional">W. </span>{verse[1]}
            </p>

            {
                readings.map((reading) => <LongReading {...reading} />)
            }

        </section >
    )
}

export default OfficeOfReadings;



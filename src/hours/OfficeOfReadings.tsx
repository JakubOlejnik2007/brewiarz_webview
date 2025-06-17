import OfficeOfReadingsData from "C:\\Users\\Jakub\\Desktop\\brewiarz\\Tom III\\const\\office_of_readings.json";
import "../sass/OfficeOfReadings.scss"
import ShowTeDeum from "../partials/ShowTeDeum";
import type { TOfficeOfReadings } from "../types/OfficeOfReadings.type";
import Psalm from "../partials/Psalm";
import LongReading from "../partials/LongReading";
import { useState } from "react";
import Psalmodia from "../partials/Psalmodia";
import numeration from "../utils/numeration";



const OfficeOfReadings = ({ isTeDeum, hymn, psalmodia, verse, readings, ...props }: TOfficeOfReadings) => {

    const [selectedReadings, setSelectedReadings] = useState([0, 0, 0, 0]);

    const updateReading = (index: number, value: number) => {
        setSelectedReadings(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    }

    const readingFiltered = []

    for (let i = 0; i < 4; i++) {
        let reading_tmp = readings.filter(reading => reading.number === numeration[i])
        if (reading_tmp.length === 0) continue;
        readingFiltered.push(reading_tmp)
        console.log(readingFiltered)
    }

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
                <Psalmodia {...{ psalmodia }} />
            }

            <p className="ofr__introduction indentation__block">
                <span className="additional">K. </span>{verse[0]}<br />
                <span className="additional">W. </span>{verse[1]}
            </p>

            {
                readingFiltered.map((readingGroup, readingGroupIdx) => {

                    const length = readingGroup.length

                    return (
                        <>
                            {length > 0 ?
                                <>
                                    <h3 className="ofr__reading-number">{numeration[readingGroupIdx]} Czytanie</h3>
                                    <ol className="lr__switch-reading">
                                        {Array.from({ length }, (_, i) => (
                                            <li className={selectedReadings[readingGroupIdx] === i ? "active" : ""} key={i} onClick={() => updateReading(readingGroupIdx, i)}>{numeration[i]}</li>
                                        ))}
                                    </ol>
                                </>
                                : <></>}

                            <LongReading {...readingGroup[selectedReadings[readingGroupIdx]]} />

                        </>
                    )
                })
            }

        </section >
    )
}

export default OfficeOfReadings;



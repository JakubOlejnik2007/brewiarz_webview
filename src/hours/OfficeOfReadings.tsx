import OfficeOfReadingsData from "../assets/office_of_readings.json";
import ShowTeDeum from "../partials/ShowTeDeum";
import type { TOfficeOfReadings } from "../types/OfficeOfReadings.type";
import LongReading from "../partials/LongReading";
import { useState } from "react";
import Psalmodia from "../partials/Psalmodia";
import numeration from "../utils/numeration";
import Hymn from "../partials/Hymn";
import Gloria from "../partials/Gloria";
import Prayer from "../partials/Prayer";



const OfficeOfReadings = ({ isTeDeum, hymn, psalmodia, verse, readings, prayer }: TOfficeOfReadings) => {

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
        <section>
            <h2 className="hour__heading">Godzina Czytań</h2>

            <Gloria isInvitationBefore={true} />

            <Hymn hymns={hymn} />

            {
                <Psalmodia {...{ psalmodia }} />
            }

            <p className="indentation__block">
                <span className="additional">K. </span>{verse[0]}<br />
                <span className="additional">W. </span>{verse[1]}
            </p>

            {
                readingFiltered.map((readingGroup, readingGroupIdx) => {

                    const length = readingGroup.length

                    return (
                        <div className="hour__part">
                            {length > 0 ?
                                <>
                                    <h3 className="additional">{numeration[readingGroupIdx]} Czytanie</h3>
                                    <ol className="switching-list">
                                        {Array.from({ length }, (_, i) => (
                                            <li className={selectedReadings[readingGroupIdx] === i ? "active" : ""} key={i} onClick={() => updateReading(readingGroupIdx, i)}>{numeration[i]}</li>
                                        ))}
                                    </ol>
                                </>
                                : <></>}

                            <LongReading {...readingGroup[selectedReadings[readingGroupIdx]]} />

                        </div>
                    )
                })
            }


            {
                isTeDeum ? <><ShowTeDeum text={OfficeOfReadingsData.TeDeum[0]} />
                    <ShowTeDeum text={OfficeOfReadingsData.TeDeum[1]} /></> : ""
            }

            <Prayer prayers={prayer} />
        </section >
    )
}

export default OfficeOfReadings;



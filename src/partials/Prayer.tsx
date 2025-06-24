import { useState } from "react";
import PrayerEndings from "../assets/prayer_endings.json"
import numeration from "../utils/numeration";
import colorAdditional from "../utils/colorAdditional";

interface TPrayer {
    prayers: string[];
}

const Prayer = ({ prayers }: TPrayer) => {
    console.log(PrayerEndings)

    const [selectedPrayer, setSelectedPrayer] = useState(0);

    const length = prayers.length;

    const prayerParts = prayers[selectedPrayer].split("\n");
    const isComment = prayerParts.length > 1

    let prayer = isComment ? prayerParts[1] : prayerParts[0]

    const additional = isComment ? prayerParts[0] : ""

    const prayerEnding = isComment ? prayer.split(".")[prayer.split(".").length - 2] : prayer.split(".")[prayer.split(".").length - 2]

    PrayerEndings as string[];

    PrayerEndings.forEach((ending) => {

        console.log(ending, prayerEnding, ending.startsWith(prayerEnding.trim()))

        if (ending.startsWith(prayerEnding.trim()))
            prayer = prayer.replace(prayerEnding, ` ${ending}`)
    })

    return (
        <div className="prayer" style={{ width: "var(--fixed-width)" }}>
            {length > 0 ?
                <>
                    <ol className="lr__switch-reading" style={{ width: "60ch" }}>
                        {Array.from({ length }, (_, i) => (
                            <li className={selectedPrayer === i ? "active" : ""} key={i} onClick={() => setSelectedPrayer(i)}>{prayers[i].split("\n")[0]}</li>
                        ))}
                    </ol>
                </>
                : <></>}

            {
                prayer.length > 1 ? <>
                    <p className="additional">{additional}</p>
                    <p className="indentation">{colorAdditional(prayer)}</p>
                </> : <>{prayer}</>
            }
        </div>
    )
}

export default Prayer;
import { useState } from "react";
import PrayerEndings from "../assets/prayer_endings.json"
import colorAdditional from "../utils/colorAdditional";

interface TPrayer {
    prayers: string[];
    isOremus?: boolean;
}

const Prayer = ({ prayers, isOremus = false }: TPrayer) => {
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
        <div className="prayer">
            {length > 0 ?
                <>
                    <ol className="lr__switch-reading">
                        {Array.from({ length }, (_, i) => (
                            <li className={selectedPrayer === i ? "active" : ""} key={i} onClick={() => setSelectedPrayer(i)}>{prayers[i].split("\n")[0]}</li>
                        ))}
                    </ol>
                </>
                : <></>}

            {
                isComment ? <>
                    <p className="additional">{additional}</p>
                    {isOremus && <p className="italic">Módlmy się:</p>}
                    <p className="indentation">{colorAdditional(prayer)}</p>
                </> : <>
                    {isOremus && <p className="italic">Módlmy się:</p>}
                    <p className="indentation">{colorAdditional(prayer)}</p></>
            }
        </div>
    )
}

export default Prayer;
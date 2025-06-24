import { useState } from "react";
import numeration from "../utils/numeration";
import "../sass/parts/Hymn.scss"
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";
interface THymnProps {
    hymns: string[]
}

const Hymn = ({ hymns }: THymnProps) => {
    const [selectedHymn, setSelectedHymn] = useState(0)


    return (
        <div className="hymn">
            {hymns.length > 1 ?
                <ol className="switching-list">
                    {
                        hymns.map((hymn, idx) => {

                            const firstLine = hymn.split("\n")[0]
                            console.log(firstLine.split(":")[0].split("Albo")[1])
                            let firstLineSimple = firstLine.split(":")[0].trim()
                            console.log(firstLineSimple.indexOf("Albo"))
                            firstLineSimple = firstLineSimple.indexOf("Albo") === 0 ? firstLineSimple.split("Albo")[1].trim() : firstLineSimple;
                            firstLineSimple = capitalizeFirstLetter(firstLineSimple)

                            return (
                                <li className={selectedHymn === idx ? "active" : ""}
                                    onClick={() => setSelectedHymn(idx)}
                                >{numeration[idx]} {firstLine.indexOf("\t") === 0 ? <><br />{firstLineSimple}</> : ""}</li>
                            )
                        })
                    }
                </ol> : ""}

            <div className="hymn__hymn">
                {
                    hymns[selectedHymn].split("\n\n").map(hymnPart => {
                        return (<>
                            <p className={`hymn__part ${hymnPart.startsWith("\tAlbo") ? "additional" : ""}`}>{hymnPart.split("\n").map((verse, idx) => <>{idx === 0 ? <><span className="additional">{verse[0]}</span>{verse.substring(1)}</> : verse} <br /></>)}</p>
                        </>)
                    })
                }
            </div>
        </div>
    )
}


export default Hymn;
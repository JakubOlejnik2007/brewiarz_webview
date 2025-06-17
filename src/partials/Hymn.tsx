import { useState } from "react";
import numeration from "../utils/numeration";
import "../sass/Hymn.scss"
interface THymnProps {
    hymns: string[]
}

const Hymn = ({ hymns }: THymnProps) => {
    const [selectedHymn, setSelectedHymn] = useState(0)


    return (
        <div className="hymn">
            <ol className="hymn__switch-hymn">
                {
                    hymns.map((hymn, idx) => {
                        return (
                            <li className={selectedHymn === idx ? "active" : ""}
                                onClick={() => setSelectedHymn(idx)}
                            >{numeration[idx]}</li>
                        )
                    })
                }
            </ol>

            <div className="hymn__hymn">
                {
                    hymns[selectedHymn].split("\n\n").map(hymnPart => {
                        return (<>
                            <p className={`hymn__part ${hymnPart.startsWith("Albo") ? "additional" : ""}`}>{hymnPart.split("\n").map((verse, idx) => <>{idx === 0 ? <><span className="additional">{verse[0]}</span>{verse.substring(1)}</> : verse} <br /></>)}</p>
                        </>)
                    })
                }
            </div>
        </div>
    )
}


export default Hymn;
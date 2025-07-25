import type { TLongReading } from "../types/LongReading.type"
import "../sass/parts/LongReading.scss"
import Responsory from "./Responsory";

const LongReading = ({ number, name, title, sigla, content, responsory, ...props }: TLongReading) => {

    const isHagio: boolean = sigla.startsWith("(");

    return (
        <div className="lr">
            <div className={`lr__heading ${isHagio ? "lr__heading_sigla" : ""}`}>
                <p className="lr__name">{name}</p>
                <p className={`lr__sigla ${isHagio ? "lr__sigla--hagio" : ""}`}>{sigla}</p>
            </div>
            <h3 className="lr__title">
                {title}
            </h3>

            {
                content.split("\n").map(paragraph => {
                    return (<p className="indentation">{paragraph}</p>)
                })
            }

            <Responsory {...responsory} />

        </div>
    )
}

export default LongReading;
import type { TLongReading } from "../types/LongReading.type"
import "../sass/LongReading.scss"

const LongReading = ({ number, name, title, sigla, content, ...props }: TLongReading) => {
    return (
        <div className="lr">
            <p className="lr__number"> {number} Czytanie</p>
            <div className={`lr__heading ${sigla.startsWith("(") ? "lr__heading_sigla" : ""}`}>
                <p className="lr__name">{name}</p>
                <p className="lr__sigla">{sigla}</p>
            </div>
            <h3 className="lr__title">
                {title}
            </h3>

            {
                content.split("\n").map(paragraph => {
                    return (<p className="indentation">{paragraph}</p>)
                })
            }

        </div>
    )
}

export default LongReading;
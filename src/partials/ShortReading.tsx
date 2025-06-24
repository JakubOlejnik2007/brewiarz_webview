import type { TShortReading } from "../types/ShortReading.type";
import "../sass/parts/ShortReading.scss"
const ShortReading = ({ sigla, content }: TShortReading) => {
    return (
        <div className="hour-part short-reading">
            <div className="short-reading__heading">
                <h3 className="additional">Czytanie</h3>
                <p className="additional">{sigla}</p>
            </div>
            <p className="indentation">{content}</p>
        </div>
    )
}

export default ShortReading;
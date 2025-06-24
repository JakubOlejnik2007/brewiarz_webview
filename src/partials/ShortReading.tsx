import type { TShortReading } from "../types/ShortReading.type";
import "../sass/ShortReading.scss"
const ShortReading = ({ sigla, content }: TShortReading) => {
    return (
        <div className="short-reading">
            <div className="short-reading__heading">
                <p className="additional">Czytanie</p>
                <p className="additional">{sigla}</p>
            </div>
            <p className="indentation">{content}</p>
        </div>
    )
}

export default ShortReading;
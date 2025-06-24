import type { TIntercessions } from "../types/TIntercessions.type";
import "../sass/parts/Intercessions.scss"
const Intercessions = ({ introduction, response, intercessions }: TIntercessions) => {
    return (
        <div className="hour-part">
            <h3 className="additional">Prośby</h3>
            <p>{introduction}</p>
            <p className="italic">{response}</p>
            <br />
            {
                intercessions.map((intercession) => {
                    const intercessionSplitted = intercession.split("-")
                    return (
                        <div>
                            <p>
                                {intercessionSplitted[0]}<br />
                                <span className="additional">- </span>
                                {intercessionSplitted[1]}
                            </p>
                            <p className="italic">{response}</p>
                            <br />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Intercessions;
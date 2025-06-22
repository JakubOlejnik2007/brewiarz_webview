import type { TResponsory } from "../types/Responsory.type"
import "../sass/Responsory.scss"

interface TResponsoryProps extends TResponsory { }

const Responsory = ({ por, content }: TResponsoryProps) => {
    return (
        <div className="responsory">
            <div className="responsory__heading-block">
                <h3 className="responsory__heading">Responsorium</h3>
                <p className="responsory__por">{por}</p>
            </div>
            <div>
                {
                    content.length === 3 ?
                        <>
                            <p><span className="additional">W.</span> {content[0].split(/([/*†])/).map((part, idx) =>
                                part === '/' || part === '*' || part === "†" ? (
                                    <span className="additional">{part}</span>
                                ) : (
                                    <span>{part}</span>
                                )
                            )}</p>
                            <p><span className="additional">K.</span> {content[1]}</p>
                            <p><span className="additional">W.</span> {content[0].split(" * ")[1].split(/([/*†])/).map((part, idx) =>
                                part === '/' || part === '*' || part === "†" ? (
                                    <span className="additional">{part}</span>
                                ) : (
                                    <span>{part}</span>
                                )
                            )}</p>
                        </> : <></>
                }
            </div>
        </div>
    )
}

export default Responsory
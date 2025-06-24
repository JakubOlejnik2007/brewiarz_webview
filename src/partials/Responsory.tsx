import type { TResponsory } from "../types/Responsory.type"
import "../sass/Responsory.scss"
import colorAdditional from "../utils/colorAdditional"

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
                            <p><span className="additional">W.</span> {colorAdditional(content[0])}</p>
                            <p><span className="additional">K.</span> {colorAdditional(content[1])}</p>
                            <p><span className="additional">W.</span> {colorAdditional(content[0].split("*")[1].trim())}</p>
                        </> : <>
                            <p><span className="additional">K.</span> {colorAdditional(content[0])}</p>
                            <p><span className="additional">W.</span> {colorAdditional(content[0])}</p>
                            <p><span className="additional">K.</span> {colorAdditional(content[2])}</p>
                            <p><span className="additional">W.</span> {colorAdditional(content[0].split("*")[1].trim())}</p>
                            <p><span className="additional">K.</span> Chwała Ojcu i Synowi, i Duchowi Świętemu</p>
                            <p><span className="additional">W.</span> {colorAdditional(content[0])}</p>
                        </>
                }
            </div>
        </div>
    )
}

export default Responsory
import type { TPsalm } from "../types/Psalm.type";
import Antiphon from "./Antiphon";
import "../sass/Psalm.scss"

interface InvitationPsalmProps {
    psalm: TPsalm,
    antiphon: string
}

const InvitationPsalm = ({ psalm, antiphon }: InvitationPsalmProps) => {

    const parts = psalm.psalm.split("\n\n");

    return (
        <div className="psalm">
            <h1 className="psalm__title">{psalm.title}</h1>
            <h2 className="psalm__subtitle">{psalm.subtitle}</h2>
            <p className="psalm__verse">{psalm.verse}</p>

            <Antiphon antiphon={antiphon} />
            {
                parts.map(psalmPart => {
                    console.log(psalmPart)
                    return (<><p className="psalm-verse">
                        {psalmPart.split("\n").map(psalmVerse => <>{psalmVerse}<br /></>)}


                    </p>
                        <Antiphon antiphon={antiphon} />

                    </>)



                })
            }
        </div>
    )
}

export default InvitationPsalm
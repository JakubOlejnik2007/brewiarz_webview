import type { TPsalm } from "../types/Psalm.type";
import Antiphon from "./Antiphon";

interface InvitationPsalmProps {
    psalm: TPsalm,
    antiphon: string
}

const InvitationPsalm = ({ psalm, antiphon }: InvitationPsalmProps) => {

    const parts = psalm.psalm.split("\n\n");

    return (
        <div className="psalm-container">
            <h1>{psalm.title}</h1>
            <h2>{psalm.subtitle}</h2>
            <h3 className="psalm-heading">{psalm.verse}</h3>

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
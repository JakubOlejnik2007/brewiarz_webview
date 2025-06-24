import type { TPsalm } from "../types/Psalm.type";
import Antiphon from "./Antiphon";
import "../sass/parts/Psalm.scss"


interface InvitationPsalmProps {
    psalm: TPsalm,
    antiphon: string
}

const InvitationPsalm = ({ psalm, antiphon }: InvitationPsalmProps) => {

    const parts = psalm.psalm.split("\n\n");

    const psalmVerse = psalm.verse as string;

    return (
        <div className="psalm">
            <h3 className="psalm__title">{psalm.title}</h3>
            <h4 className="psalm__subtitle">{psalm.subtitle}</h4>
            <p className="psalm__verse">
                {psalmVerse.substring(0, psalmVerse.indexOf("("))}
                <span className="no-italic">{psalmVerse.substring(psalmVerse.indexOf("("), psalmVerse.length)}</span>
            </p>

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
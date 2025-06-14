import type { TPsalm } from "../types/Psalm.type";
import Antiphon from "./Antiphon";
import "../sass/Psalm.scss"

interface InvitationPsalmProps {
    psalm: TPsalm,
    antiphon: string
}

const InvitationPsalm = ({ psalm, antiphon }: InvitationPsalmProps) => {

    const parts = psalm.psalm.split("\n\n");

    const psalmVerse = psalm.verse as string;

    return (
        <div>
            <p>
                <span className="additional">Przewodniczący - † </span>Panie, otwórz wargi moje. <br />
                <span className="additional">Wszyscy -</span> A usta moje będą głosić Twoją chwałę.
            </p>

            <div className="psalm">
                <h1 className="psalm__title">{psalm.title}</h1>
                <h2 className="psalm__subtitle">{psalm.subtitle}</h2>
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
        </div>
    )
}

export default InvitationPsalm
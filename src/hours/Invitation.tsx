import InvitationData from "C:\\Users\\Jakub\\Desktop\\brewiarz\\Tom III\\const\\invitation.json";
import type { InvitationPsalms } from "../types/Invitation.type";
import InvitationPsalm from "../partials/InvitationPsalm";
import "../sass/Invitation.scss"
import { useState } from "react";

type InvitationPsalmsIndexes = 1 | 2 | 3 | 4;

interface InvtitationProps {
    antiphon: string,
    prefferedPsalm?: InvitationPsalmsIndexes,

}

const Invtitation = ({ antiphon, prefferedPsalm = 1 }: InvtitationProps) => {

    const [psalmIndex, setPsalmIndex] = useState(prefferedPsalm);

    const psalms = ["Psalm 95", "Psalm 100", "Psalm 67", "Psalm 24"]

    const invitation = InvitationData as InvitationPsalms;

    return (
        <section className="invitation">
            <h1 className="invitation__heading">Wezwanie</h1>

            <p className="invitation__introduction">
                Jeśli psalm Wezwania ze swoją antyfoną ma poprzedzać Jutrznię, można go opuścić ze słusznej przyczyny.
                <br /><br />

                Przewodniczący - † <span className="no-additional">Panie, otwórz wargi moje.</span> <br />
                Wszyscy - <span className="no-additional">A usta moje będą głosić Twoją chwałę.</span>
            </p>

            <ol className="invitation__switch-psalms">
                {
                    psalms.map((psalm, idx) => {
                        return (
                            <li className={psalmIndex === idx + 1 ? "active" : ""}
                                onClick={() => setPsalmIndex(idx + 1 as InvitationPsalmsIndexes)}
                            >{psalm}</li>
                        )
                    })
                }
            </ol>

            {
                <InvitationPsalm antiphon={antiphon} psalm={invitation.psalms[psalmIndex - 1]} />
            }
        </section>
    )
}



export default Invtitation
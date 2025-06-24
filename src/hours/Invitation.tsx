import InvitationData from "../assets/invitation.json";
import type { TInvitationPsalms } from "../types/Invitation.type";
import InvitationPsalm from "../partials/InvitationPsalm";
import "../sass/Invitation.scss"
import { useState } from "react";

type InvitationPsalmsIndexes = 1 | 2 | 3 | 4;

interface InvtitationProps {
    antiphon: string,
    prefferedPsalm?: InvitationPsalmsIndexes,

}

const Invititation = ({ antiphon, prefferedPsalm = 1 }: InvtitationProps) => {

    const [psalmIndex, setPsalmIndex] = useState(prefferedPsalm);

    const psalms = ["Psalm 95", "Psalm 100", "Psalm 67", "Psalm 24"]

    const invitation = InvitationData as TInvitationPsalms;

    return (
        <section className="invitation">
            <h2 className="invitation__heading">Wezwanie</h2>

            <p className="invitation__introduction">
                Jeśli psalm Wezwania ze swoją antyfoną ma poprzedzać Jutrznię, można go opuścić ze słusznej przyczyny.
                <br /><br />

                Przewodniczący - † <span className="no-additional">Panie, otwórz wargi moje.</span> <br />
                Wszyscy - <span className="no-additional">A usta moje będą głosić Twoją chwałę.</span>
            </p>

            <ol className="switching-list">
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



export default Invititation;
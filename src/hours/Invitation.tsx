import InvitationData from "../assets/invitation.json";
import type { TInvitationPsalms } from "../types/Invitation.type";
import InvitationPsalm from "../partials/InvitationPsalm";
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
        <section>
            <h2 className="hour__heading">Wezwanie</h2>

            <p>
                <span className="additional">Jeśli psalm Wezwania ze swoją antyfoną ma poprzedzać Jutrznię, można go opuścić ze słusznej przyczyny.</span>
                <br /><br />

                <span className="additional">Przewodniczący - † </span>Panie, otwórz wargi moje. <br />
                <span className="additional">Wszyscy - </span>A usta moje będą głosić Twoją chwałę.
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
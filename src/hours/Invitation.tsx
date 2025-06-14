import InvitationData from "C:\\Users\\Jakub\\Desktop\\brewiarz\\Tom III\\const\\invitation.json";
import type { InvitationPsalms } from "../types/Invitation.type";
import InvitationPsalm from "../partials/InvitationPsalm";
import "../sass/Invitation.scss"

interface InvtitationProps {
    antiphon: string,
    prefferedPsalm?: 1 | 2 | 3 | 4,

}

const Invtitation = ({ antiphon, prefferedPsalm = 1 }: InvtitationProps) => {

    const invitation = InvitationData as InvitationPsalms;

    return (
        <section>
            <h1 className="invitation__heading">Wezwanie</h1>

            <p className="invitation__introduction">
                Jeśli psalm Wezwania ze swoją antyfoną ma poprzedzać Jutrznię, można go opuścić ze słusznej przyczyny.
            </p>

            <p>
                <span className="additional">Przewodniczący - † </span>Panie, otwórz wargi moje. <br />
                <span className="additional">Wszyscy -</span> A usta moje będą głosić Twoją chwałę.
            </p>
            {
                <InvitationPsalm antiphon={antiphon} psalm={invitation.psalms[prefferedPsalm - 1]} />
            }
        </section>
    )
}



export default Invtitation
import InvitationData from "C:\\Users\\Jakub\\Desktop\\brewiarz\\Tom III\\const\\invitation.json";
import type { InvitationPsalms } from "../types/Invitation.type";
import InvitationPsalm from "../partials/InvitationPsalm";

interface InvtitationProps {
    antiphon: string,
    prefferedPsalm?: 1 | 2 | 3 | 4,

}

const Invtitation = ({ antiphon, prefferedPsalm = 1 }: InvtitationProps) => {

    const invitation = InvitationData as InvitationPsalms;

    return (
        <section>
            {
                <InvitationPsalm antiphon={antiphon} psalm={invitation.psalms[prefferedPsalm - 1]} />
            }
        </section>
    )
}



export default Invtitation
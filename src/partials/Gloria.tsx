interface TGloriaProps {
    isAlleluja?: boolean;
    isInvitationBefore?: boolean
}

const Gloria = ({ isAlleluja = true, isInvitationBefore = false }: TGloriaProps) => {
    return (
        <>
            <p className="indentation__block">
                <span className="additional">K. </span>Boże, wejrzyj ku wspomożeniu memu.<br />
                <span className="additional">W. </span>Panie, pośpiesz ku ratunkowi memu.
            </p>

            <p>
                Chwała Ojcu i Synowi, i Duchowi Świętemu <br />
                Jak była na początku, teraz i zawsze, <br />
                i na wieki wieków. Amen. {isAlleluja && <>Alleluja.</>}
            </p>

            {
                isInvitationBefore && <p className="indentation additional">
                    Powyższe teksty opuszcza się, jeśli tę Godzinę poprzedza Wezwanie.
                </p>
            }
        </>
    )
}

export default Gloria;
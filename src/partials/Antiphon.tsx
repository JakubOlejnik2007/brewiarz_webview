interface AntiphonProps {
    antiphon: string;
    count?: 1 | 2 | 3;
}

const Antiphon = ({ antiphon, count }: AntiphonProps) => {
    return (
        <p className="indentation">
            <span className="additional">
                {!count ? "Ant. " : `${count} ant. `}
            </span>
            {
                antiphon.split(/([/*])/).map((part, idx) =>
                    part === '/' || part === '*' ? (
                        <span className="additional">{part}</span>
                    ) : (
                        <span>{part}</span>
                    )
                )
            }
        </p>
    )
}


export default Antiphon
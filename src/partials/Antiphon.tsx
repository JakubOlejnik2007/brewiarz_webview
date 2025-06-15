interface AntiphonProps {
    antiphon: string;
    count?: 1 | 2 | 3;
}

const Antiphon = ({ antiphon, count }: AntiphonProps) => {
    return (
        <div className="psalm__antiphon indentation">
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
        </div>
    )
}


export default Antiphon
interface AntiphonProps {
    antiphon: string;
    count?: 1 | 2 | 3;
}

const Antiphon = ({ antiphon, count }: AntiphonProps) => {
    return (
        <p>
            <span className="additional">
                {!count ? "Ant." : `${count} ant.`}
            </span> {antiphon.split("/")[0]} <span className="additional">
                /
            </span> {antiphon.split("/")[1]}
        </p>
    )
}

export default Antiphon
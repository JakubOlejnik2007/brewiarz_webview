interface AntiphonProps {
    antiphon: string;
    count?: 1 | 2 | 3;
}

const Antiphon = ({ antiphon, count }: AntiphonProps) => {
    return (
        <p>
            <span style={{
                color: "red"
            }}>
                {!count ? "Ant." : `${count} ant.`}
            </span> {antiphon.split("/")[0]} <span style={{
                color: "red"
            }}>
                /
            </span> {antiphon.split("/")[1]}
        </p>
    )
}

export default Antiphon
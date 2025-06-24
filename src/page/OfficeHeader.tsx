interface TOfficeHeaderProps {
    officeName: string;
    date: Date;
}

const OfficeHeader = ({ officeName, date }: TOfficeHeaderProps) => {

    const dateAttr = date.toISOString().split("T")[0];

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formatted = date.toLocaleDateString('pl-PL', {
        day: "numeric", month: "long", year: "numeric"
    });

    return (
        <header>
            <h2>Oficjum na <time dateTime={dateAttr}>{formatted}</time></h2>
            <p>{officeName}</p>
        </header>
    )
}

export default OfficeHeader;
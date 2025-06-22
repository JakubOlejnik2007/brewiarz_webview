import type { TPsalm } from "../types/Psalm.type";
import '../sass/Psalm.scss'
import Antiphon from "./Antiphon";

interface TPsalmProps extends TPsalm {
    count?: 1 | 2 | 3;
}

const Psalm = ({ antiphon, title, subtitle, numeration, verse, psalm, doxologia, count }: TPsalmProps) => {

    let indentation = false;


    if (doxologia) psalm = psalm.concat("\nChwała  Ojcu  i  Synowi,  *\ni  Duchowi  Świętemu.\nJak  była  na  początku,  teraz  i  zawsze,  *\ni  na  wieki  wieków.  Amen.")

    return (
        <div className="psalm">
            {count ? <Antiphon antiphon={antiphon} count={count} /> : <Antiphon antiphon={antiphon} />}
            {title ? <h3 className="psalm__title">{title}</h3> : ""}
            {subtitle ? <h4 className="psalm__subtitle">{subtitle}</h4> : ""}
            {numeration ? <h5 className="psalm__numeration">{numeration}</h5> : ""}
            {
                verse ? <p className="psalm__verse">
                    {verse.substring(0, verse.indexOf("("))}
                    <span className="no-italic">{verse.substring(verse.indexOf("("), verse.length)}</span>
                </p> : ""
            }

            {
                psalm.split("\n").map((line) => {
                    const element = <div className={indentation ? "indentation__block" : ""}>{line}</div>

                    if (!line.endsWith("*") && !line.endsWith("†")) indentation = !indentation

                    return element
                })
            }
            <Antiphon antiphon={antiphon.replace("*", "/")} />
        </div>
    )
}

export default Psalm;
import { useState } from "react";
import type { TPsalmodia } from "../types/Psalmodia.type"
import numeration from "../utils/numeration";
import Psalm from "./Psalm";

interface TPsalmodiaProps {
    psalmodia: TPsalmodia
}

const Psalmodia = ({ psalmodia }: TPsalmodiaProps) => {
    const [selectedPsalms, setSelectedPsalm] = useState([0, 0, 0]);

    const updatePsalm = (index: number, value: number) => {
        setSelectedPsalm(prev => {
            const updated = [...prev];
            updated[index] = value;
            return updated;
        });
    }

    return (
        <>
            {
                psalmodia.map((psalms, idx) => {
                    const length = psalms.length
                    console.log(psalms)
                    return (
                        <>{psalms.length > 1 ?
                            <>
                                <ol className="switching-list">
                                    {Array.from({ length }, (_, i) => (
                                        <li className={selectedPsalms[idx] === i ? "active" : ""} key={i} onClick={() => updatePsalm(idx, i)}>{numeration[i]}</li>
                                    ))}
                                </ol>
                            </>
                            : <></>}

                            <Psalm {...psalms[selectedPsalms[idx]]} count={(idx + 1) as 1 | 2 | 3} />
                        </>
                    )
                })
            }
        </>
    )
}

export default Psalmodia;
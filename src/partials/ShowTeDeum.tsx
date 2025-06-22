interface ShowTeDeumProps {
    text: string;
}

const ShowTeDeum = ({ text }: ShowTeDeumProps) => {
    let counter = 0
    const textLines = text.split("\n")

    return (
        <div className="ofr__TeDeum">
            {
                textLines.map((line, idx) => {

                    const classes = []
                    if (line.startsWith('3')) {
                        counter = 3
                        line = line.substring(1)
                    }

                    if (line.startsWith("* ")) {
                        classes.push("additional")
                        counter = -1;
                    }

                    if (Math.floor(counter / 2) % 2 === 1) {
                        classes.push("indentation")
                    }


                    const element = <>
                        <div className={classes.join(" ")}>{line}</div>
                    </>

                    counter++;

                    return element;
                })
            }
        </div>
    )
}

export default ShowTeDeum;
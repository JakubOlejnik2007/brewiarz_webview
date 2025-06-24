const colorAdditional = (text: string) => {
    return (
        <>
            {text.split(/(N\.|[/*†()])/).map(part =>
                part === '/' || part === '*' || part === "†" || part === "(" || part === ")" || part === "N." ? (
                    <span className="additional">{part}</span>
                ) : (
                    <span>{part}</span>
                )
            )}
        </>
    )
}

export default colorAdditional;
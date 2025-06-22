const colorAdditional = (text: string) => {
    return (
        <>
            {text.split(/([/*†])/).map(part =>
                part === '/' || part === '*' || part === "†" ? (
                    <span className="additional">{part}</span>
                ) : (
                    <span>{part}</span>
                )
            )}
        </>
    )
}

export default colorAdditional;
const capitalizeFirstLetter = (text: string): string => {
    console.log(text)
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default capitalizeFirstLetter
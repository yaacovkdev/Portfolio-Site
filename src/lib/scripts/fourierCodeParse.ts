const fourierParse = (code: String) => {

    // Regular expression to capture numbers inside obj.add(x, y)
    const regex = /obj\.add\((\d+),\s*(\d+)\);/;

    // Match the pattern and extract the numbers
    const match = code.match(regex);

    if (match) {
        const num1 = parseInt(match[1], 10); // First number
        const num2 = parseInt(match[2], 10); // Second number
    }
}

export default fourierParse;
export const isNumber = (str) => {
    return !isNaN(str) && !isNaN(parseFloat(str));
};

export const isAlphabet = (str) => {
    return /^[a-zA-Z]+$/.test(str); // ✅ FIXED
};

export const isSpecialChar = (str) => {
    return !isNumber(str) && !isAlphabet(str);
};

export const processArray = (data) => {
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    let sum = 0;

    const alphaConcat = [];

    data.forEach(item => {
        if (isNumber(item)) {
            const num = parseInt(item);
            sum += num;
            (num % 2 === 0 ? evenNumbers : oddNumbers).push(item);
        } else if (isAlphabet(item)) {
            alphabets.push(item.toUpperCase());
            alphaConcat.push(item);
        } else {
            specialCharacters.push(item);
        }
    });

    let concatString = "";
    if (alphaConcat.length > 0) {
        const reversed = alphaConcat.join("").split("").reverse();
        concatString = reversed.map((char, idx) =>
            idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
        ).join("");
    }

    return {
        odd_numbers: oddNumbers,
        even_numbers: evenNumbers,
        alphabets: alphabets,
        special_characters: specialCharacters,
        sum: sum.toString(),
        concat_string: concatString
    };
};

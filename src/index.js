module.exports = function splitAny(any) {
    switch (typeof any) {
        case 'string': {
            return splitString(any);
        }
        case 'number': {
            return splitNumber(any);
        }
        default: {
            throw new TypeError('Unexpected type');
        }
    }
};

function splitString(str, delim = ' ') {
    const subStrings = str.split(delim);
    if (subStrings.length > 1) {
        return subStrings.map(subString => splitString(subString))
    } else {
        return str.split('');
    }
}

function splitNumber(num) {
    const isNegative = num < 0;
    return [
        ...(isNegative ? '-' : ''),
        ...String(num).split(''),
    ];
}

module.exports = splitAny;

function splitAny(any) {
    switch (typeof any) {
        case 'string': {
            return splitString(any);
        }
        case 'number': {
            return splitNumber(any);
        }
        case 'function': {
            return splitFunction(any);
        }
        case 'object': {
            if (Array.isArray(any)) {
                return splitArray(any);
            } else {
                return splitMap(any);
            }
        }
        default: {
            throw new TypeError('Unexpected type');
        }
    }
}

function splitString(str, delim = ' ') {
    const subStrings = str.split(delim);
    if (subStrings.length > 1) {
        return subStrings.map(subString => splitString(subString));
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

function splitFunction(fn) {
    return splitAny(fn());
}

function splitMap(any) {
    return Object.keys(any).map(key => [
        key,
        any[key]
    ]);
}

function splitArray(any) {
    return any.map(arrayElement => splitAny(arrayElement));
}

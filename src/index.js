'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

module.exports = splitAny;

function splitAny(any) {
    switch (typeof any === 'undefined' ? 'undefined' : _typeof(any)) {
        case 'string':
        {
            return splitString(any);
        }
        case 'number':
        {
            return splitNumber(any);
        }
        case 'function':
        {
            return splitFunction(any);
        }
        case 'object':
        {
            if (Array.isArray(any)) {
                return splitArray(any);
            } else {
                return splitMap(any);
            }
        }
        default:
        {
            throw new TypeError('Unexpected type');
        }
    }
}

function splitString(str) {
    var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

    var subStrings = str.split(delim);
    if (subStrings.length > 1) {
        return subStrings.map(function (subString) {
            return splitString(subString);
        });
    } else {
        return str.split('');
    }
}

function splitNumber(num) {
    var isNegative = num < 0;
    return [].concat(_toConsumableArray(isNegative ? '-' : ''), _toConsumableArray(String(num).split('')));
}

function splitFunction(fn) {
    return splitAny(fn());
}

function splitMap(any) {
    return Object.keys(any).map(function (key) {
        return [key, any[key]];
    });
}

function splitArray(any) {
    return any.map(function (arrayElement) {
        return splitAny(arrayElement);
    });
}
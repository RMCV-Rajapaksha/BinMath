import { twoNumber, oneNumber } from "./types";

export function binaryToDecimalIterative({ number }: oneNumber) {
    let decimal = 0;
    const n = number.length;

    for (let i = 0; i < n; i++) {
        const digit = parseInt(number[n - i - 1]);
        decimal += digit * Math.pow(2, i);
    }

    return decimal;
}

export function decimalToBinary({ number }: oneNumber) {
    let binary = '';
    let N = parseInt(number);

    while (N > 0) {
        binary = (N % 2) + number;
        N = Math.floor(N / 2);
    }

    return number;
}

export function addBinary({ firstNumber, secondNumber }: twoNumber) {
    let result = ""; 
    let s = 0;         
    let i = firstNumber.length - 1, j = secondNumber.length - 1;

    while (i >= 0 || j >= 0 || s == 1) {
        s += (i >= 0) ? firstNumber.charAt(i).charCodeAt(0) - '0'.charCodeAt(0) : 0;
        s += (j >= 0) ? secondNumber.charAt(j).charCodeAt(0) - '0'.charCodeAt(0) : 0;

        result = String.fromCharCode((s % 2) + '0'.charCodeAt(0)) + result;
        s = Math.floor(s / 2);

        i--; j--;
    }
     
    return result;
}
import { addBinaryProps } from "./types";

export function addBinary({firstNumber, secondNumber}: addBinaryProps) {
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
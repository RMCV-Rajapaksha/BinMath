const assert = require("assert");
const {
  binaryToDecimalIterative,
  decimalToBinary,
  addBinary,
} = require("../index");

// Test for binaryToDecimalIterative
assert.strictEqual(
  binaryToDecimalIterative({ number: "1010" }),
  10,
  "Test 1: binaryToDecimalIterative failed for input 1010"
);
assert.strictEqual(
  binaryToDecimalIterative({ number: "1111" }),
  15,
  "Test 2: binaryToDecimalIterative failed for input 1111"
);
assert.strictEqual(
  binaryToDecimalIterative({ number: "1000" }),
  8,
  "Test 3: binaryToDecimalIterative failed for input 1000"
);

// Test for decimalToBinary
assert.strictEqual(
  decimalToBinary({ number: 10 }),
  "1010",
  "Test 1: decimalToBinary failed for input 10"
);
assert.strictEqual(
  decimalToBinary({ number: 15 }),
  "1111",
  "Test 2: decimalToBinary failed for input 15"
);
assert.strictEqual(
  decimalToBinary({ number: 8 }),
  "1000",
  "Test 3: decimalToBinary failed for input 8"
);

// Test for addBinary
assert.strictEqual(
  addBinary({ firstNumber: "1010", secondNumber: "1011" }),
  "10101",
  "Test 1: addBinary failed for inputs 1010 and 1011"
);
assert.strictEqual(
  addBinary({ firstNumber: "11", secondNumber: "1" }),
  "100",
  "Test 2: addBinary failed for inputs 11 and 1"
);
assert.strictEqual(
  addBinary({ firstNumber: "111", secondNumber: "111" }),
  "1110",
  "Test 3: addBinary failed for inputs 111 and 111"
);

console.log("All tests passed!");

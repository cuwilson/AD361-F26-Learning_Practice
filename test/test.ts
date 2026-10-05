import { test, expect } from "@jest/globals";

import {
  isEven,
  add,
  divide,
  palindrome,
  countVowels,
  findMax,
  removeDuplicates,
} from "../src/functions";


//test("description of what I am testing", () => {
//  expect(SOMETHING).toBe(EXPECTED_RESULT);
//});

//STEP 3
test("isEven should return true for even numbers", () => {
    expect(isEven(-2)).toBe(true);
});

test("isEven should return false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
});

//STEP 4
test("palindrome should return true for palindromes", () => {
    expect(palindrome("YoBananaBoy")).toBe(true);
});

test("palindrome should return false for non-palindromes", () => {
    expect(palindrome("helloworld")).toBe(false);
});

//STEP 5
test("countVowels should return the correct number of vowels", () => {
    expect(countVowels("Cats are too cute")).toBe(7);
});

test("countVowels should return 0 for strings with no vowels", () => {
    expect(countVowels("rhythm")).toBe(0);
});
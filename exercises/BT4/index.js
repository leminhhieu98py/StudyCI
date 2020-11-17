// 6. Magic Sigil Generator

// // a function to check Vowel and " "
// function deleteVowel(a = '') {
//     let characterArr = [" ", "u", "e", "o", "a", "i"];
//     let result = false;
//     characterArr.map(q => {
//         if (a.toLowerCase() == q) {
//             result = true;
//         }
//     })
//     return result;
// }

// // a function to delete duplicate in a string
// function deleteDuplicate(arr = []) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] == arr[i]) {
//                 arr.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return arr;
// }

// function sigilize(inputString = "") {
//     let inputArr = inputString.split("");
//     for (let i = 0; i < inputArr.length; i++) {
//         if (deleteVowel(inputArr[i])) {
//             // check and delete Vowel
//             inputArr.splice(i, 1);
//             i--;
//         }
//     }
//     // check and delete duplicate
//     deleteDuplicate(inputArr);
//     // Join arr to make output string
//     let outputString = inputArr.join("");
//     return console.log(outputString.toUpperCase());
// }

// // test
// sigilize("i am healthy");
// sigilize("I FOUND MY SOULMATE");
// sigilize("I have a job I enjoy and it pays well");


// ----------------------------------------------------------------------------------------------
// 7. Digital Egomania: the Self-Describing Numbers

// // function to count times that a number appears in an Array
// function countTimes(checkNumber, numberArr = []) {
//     let count = 0;
//     numberArr.map(q => {
//         if (checkNumber == q) {
//             count++;
//         }
//     })
//     return count;
// }


// // function to Check a Self-Describing Number
// function isSelfDescribing(inputNumber = 0) {
//     let result;
//     inputNumber = inputNumber.toString();

//     // check if a number has an even quantity of digits and positive
//     if (inputNumber.length % 2 == 0 && Number(inputNumber) > 0) {
//         let count = 0;
//         let numberArr = inputNumber.split("");
//         for (let i = 0; i < numberArr.length; i++) {
//             // check each pair by counting times that a digit appears
//             if (i % 2 == 0) {
//                 if (countTimes(numberArr[i + 1], numberArr) != Number(numberArr[i])) {
//                     count++;
//                 }
//             }
//         }
//         // count == 0 means every conditions are satisfied
//         if (count == 0) {
//             result = true;
//         } else {
//             result = false;
//         }
//     } else {
//         result = false
//     }
//     return console.log(result);
// }

// // test
// isSelfDescribing(10123331);
// isSelfDescribing(224444);
// isSelfDescribing(2211);
// isSelfDescribing(333);


// ----------------------------------------------------------------------------------------------
// 8. Check Magic Square

// // a function to sum a row
// function sumRow(arr = []) {
//     let sum = 0;
//     arr.map(q => {
//         sum += q;
//     })
//     return sum;
// }

// // function to sum a column
// function sumColumn(arr = [[], []], column = 0) {
//     let sum = 0;
//     arr.map(q => {
//         sum += q[column];
//     })
//     return sum;
// }

// // function to sum first diagonal row
// function sumDiagonal1(arr = [[], []]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][i];
//     }
//     return sum;
// }

// // function to sum second diagonal row
// function sumDiagonal2(arr = [[], []]) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i][arr.length - 1 - i];
//     }
//     return sum;
// }


// // function to test the magic square
// function isMagicSquare(arr = []) {
//     let result;
//     let count = 0;
//     // take first row sum as an example to compare later on
//     let sum = sumRow(arr[0]);

//     // check if any sum is different from others
//     for (let i = 0; i < arr.length; i++) {
//         if (sumRow(arr[i]) != sum) {
//             count++;
//         }
//         if (sumColumn(arr, i) != sum) {
//             count++;
//         }
//     }
//     if (sumDiagonal1(arr) != sum) {
//         count++;
//     }
//     if (sumDiagonal2(arr) != sum) {
//         count++;
//     }
//     if (count == 0) {
//         result = true;
//     } else {
//         result = false;
//     }
//     return console.log(result);
// }


// // test
// isMagicSquare([
//     [8, 1, 6],
//     [3, 5, 7],
//     [4, 9, 2]
// ]);

// isMagicSquare([
//     [16, 3, 2, 13],
//     [5, 10, 11, 8],
//     [9, 6, 7, 12],
//     [4, 15, 14, 1]
// ])

// isMagicSquare([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])


// ----------------------------------------------------------------------------------------------
// 9. The Fiscal Code

// const months = {
//     1: "A",
//     2: "B",
//     3: "C",
//     4: "D",
//     5: "E",
//     6: "H",
//     7: "L",
//     8: "M",
//     9: "P",
//     10: "R",
//     11: "S",
//     12: "T"
// }

// // function to detect Vowel
// function detectVowel(a = '') {
//     let characterArr = ["u", "e", "o", "a", "i"];
//     let result = false;
//     characterArr.map(q => {
//         if (a.toLowerCase() == q) {
//             result = true;
//         }
//     })
//     return result;
// }

// // function Generate 3 capital letters from the surname, if it has
// function createSurname(input = "") {
//     let inputArr = input.split("");
//     let outputArr = [];
//     let outputString;
//     let count = 0;
//     inputArr.map(q => {
//         // 3 consonants 
//         if (!detectVowel(q) && count < 3) {
//             outputArr.push(q)
//             count++;
//         }
//     })
//     // if it has less than 3 consonants
//     if (outputArr.length < 3) {
//         inputArr.map(q => {
//             if (detectVowel(q) && count < 3) {
//                 outputArr.push(q)
//                 count++;
//             }
//         })
//     }
//     // if still less than 3 letters
//     if (outputArr.length < 3) {
//         outputArr.push("x")
//         count++;
//     }
//     outputString = outputArr.join("");
//     return outputString.toUpperCase();
// }

// // function Count consonants 
// function countConsonant(arr = []) {
//     let count = 0;
//     arr.map(q => {
//         if (!detectVowel(q)) {
//             count++;
//         }
//     })
//     return count;
// }

// // function Generate 3 capital letters from the name, if it has
// function createName(input = "") {
//     let inputArr = input.split("");
//     let outputArr = [];
//     let outputString;
//     if (countConsonant(inputArr) == 3) {
//         inputArr.map(q => {
//             // 3 consonants 
//             if (!detectVowel(q)) {
//                 outputArr.push(q);
//             }
//         })
//     } else if (countConsonant(inputArr) > 3) {
//         let count = 0;
//         inputArr.map(q => {
//             if (!detectVowel(q) && count < 4) {
//                 outputArr.push(q);
//                 count++;
//             }
//         })
//         outputArr.splice(1, 1);
//     } else if (countConsonant(inputArr) < 3) {
//         let count = 0;
//         inputArr.map(q => {
//             if (!detectVowel(q)) {
//                 outputArr.push(q)
//                 count++;
//             }
//         })
//         // when it has less than 3 consonants
//         if (outputArr.length < 3) {
//             inputArr.map(q => {
//                 if (detectVowel(q) && count < 3) {
//                     outputArr.push(q)
//                     count++;
//                 }
//             })
//         }
//         // if still less than 3 letters
//         if (outputArr.length < 3) {
//             outputArr.push("x")
//             count++;
//         }
//     }

//     outputString = outputArr.join("");
//     return outputString.toUpperCase();
// }

// // function Take the last two digits of the year of birth
// function createYear(input = "") {
//     let inputArr = input.split("/");
//     let outputArr = [inputArr[2].split("")[2], inputArr[2].split("")[3]]
//     let outputString = outputArr.join("");
//     return outputString;
// }

// // function Generate a letter corresponding to the month of birth
// function createMonth(input = "") {
//     let inputArr = input.split("/");
//     let outputString = months[inputArr[1]]
//     return outputString;
// }

// // function take the day of birth and generate 2 numbers
// function createDay(input = "", gender = "") {
//     let inputArr = input.split("/");
//     let outputString = "";
//     if (gender == "M") {
//         if (inputArr[0] < 10) {
//             outputString = "0" + inputArr[0];
//         } else {
//             outputString = inputArr[0];
//         }
//     } else {
//         outputString = (40 + Number(inputArr[0])).toString();
//     }

//     return outputString;
// }

// // function to generate The Fiscal Code:
// function fiscalCode(input = {}) {
//     let first3Characters = createSurname(input.surname);
//     let next3Characters = createName(input.name);
//     let numberYear = createYear(input.dob);
//     let charactermonth = createMonth(input.dob);
//     let numberDay = createDay(input.dob, input.gender);
//     let outputString = first3Characters + next3Characters + numberYear + charactermonth + numberDay;

//     return console.log(outputString);
// }

// // test
// fiscalCode({
//     name: "Matt",
//     surname: "Edabit",
//     gender: "M",
//     dob: "1/1/1900"
// })

// fiscalCode({
//     name: "Helen",
//     surname: "Yu",
//     gender: "F",
//     dob: "1/12/1950"
// })
// fiscalCode({
//     name: "Mickey",
//     surname: "Mouse",
//     gender: "M",
//     dob: "16/1/1928"
// })


// ----------------------------------------------------------------------------------------------
// 10. Number of Boomerangs

// // function to count number of Boomerang Number
// function countBoomerangs(inputArr = []) {
//     let count = 0;
//     if (inputArr.length < 3) {
//         count = 0;
//     } else {
//     for (let i = 0; i < (inputArr.length - 2); i++) {
//         if (inputArr[i] == inputArr[i + 2] && inputArr[i] != inputArr[i + 1]) {
//             count++
//         }
//     }
//     }
//     return console.log(count);
// }

// // test
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]);
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]);
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]);
// countBoomerangs([1, 7, 1, 7, 1, 7, 1]);
// 6. Digitaldrome

// // function to spilit to digits
// function splitToDigit(inputNumber) {
//     let inputArr = inputNumber.toString().split("");
//     for (let i = 0; i < inputArr.length; i++) {
//         inputArr[i] = Number(inputArr[i]);
//     }
//     return inputArr;
// }

// // function to check "Metadrome" & "Plaindrome"
// function checkMetadromeAndPlaindrome(inputNumber) {
//     let inputArr = splitToDigit(inputNumber);
//     // check out as Meta or Plain
//     let count1 = 0;
//     let count2 = 0;
//     let result = false;
//     for (let i = 0; i < (inputArr.length - 1); i++) {
//         if (inputArr[i] <= inputArr[i + 1]) {
//             count1++;
//             if (inputArr[i] == inputArr[i + 1]) {
//                 count2++;
//             }
//         }
//     }
//     if (count1 == (inputArr.length - 1) && count2 == 0) {
//         result = "Metadrome";
//     } else if (count1 == (inputArr.length - 1) && count2 != 0 && count2 != (inputArr.length - 1)) {
//         result = "Plaindrome"
//     }
//     return result;
// }

// // function to check "Katadrome" & "Nialpdrome"
// function checkKatadromeAndNialpdrome(inputNumber) {
//     let inputArr = splitToDigit(inputNumber);
//     // check out as Kata or Nial
//     let count1 = 0;
//     let count2 = 0;
//     let result = false;
//     for (let i = 0; i < (inputArr.length - 1); i++) {
//         if (inputArr[i] >= inputArr[i + 1]) {
//             count1++;
//             if (inputArr[i] == inputArr[i + 1]) {
//                 count2++;
//             }
//         }
//     }
//     if (count1 == (inputArr.length - 1) && count2 == 0) {
//         result = "Katadrome";
//     } else if (count1 == (inputArr.length - 1) && count2 != 0 && count2 != (inputArr.length - 1)) {
//         result = "Nialdrome"
//     }
//     return result;
// }

// // function to check "Repdrome"
// function checkRepdrome(inputNumber) {
//     let inputArr = splitToDigit(inputNumber);
//     let count = 0;
//     let result = false;
//     for (let i = 0; i < (inputArr.length - 1); i++) {
//         if (inputArr[i] == inputArr[i + 1]) {
//             count++;
//         }
//     }
//     if (count == inputArr.length - 1) {
//         result = "Repdrome";
//     }
//     return result;
// }

// // final function
// function digitaldrome(inputNumber) {
//     let result = checkMetadromeAndPlaindrome(inputNumber);
//     if (result == false) {
//         result = checkKatadromeAndNialpdrome(inputNumber);
//         if (result == false) {
//             result = checkRepdrome(inputNumber);
//             if (result == false) {
//                 result = "Nondrome"
//                 return result;
//             } else {
//                 return result;
//             }
//         } else {
//             return result;
//         }
//     } else {
//         return result;
//     }
// }

// // test case
// console.log(digitaldrome(1357))
// console.log(digitaldrome(12344))
// console.log(digitaldrome(7531))
// console.log(digitaldrome(9874441))
// console.log(digitaldrome(666))
// console.log(digitaldrome(1985))

// ---------------------------------------------------------------------------------------//
// 7. Poker Flush?

// // function to split the Suit of Pokers
// function splitSuit(arr_input = []) {
//     let newArr = [];
//     arr_input.map(q => {
//         newArr.push(q[q.length - 1])
//     })
//     return newArr;
// }
// // console.log(splitSuit(["A_S", "J_H", "7_D", "8_D", "10_D"]))
// // function to count suit
// function countSuit(suit_input = '', arr_input = []) {
//     let count = 0;
//     arr_input.map(q => {
//         if (q == suit_input) {
//             count++;
//         }
//     })
//     return count;
// }
// // final function
// function checkFlush(arr_5 = [], arr_2 = []) {
//     let result = false;
//     // split suit from arr
//     let newArr_5 = splitSuit(arr_5);
//     let newArr_2 = splitSuit(arr_2);

//     // count and check flush
//     if (newArr_2[0] == newArr_2[1]) {
//         if (countSuit(newArr_2[0], newArr_5) > 2) {
//             result = true;
//         }
//     } else {
//         if (countSuit(newArr_2[0], newArr_5) > 3) {
//             result = true;
//         } else if (countSuit(newArr_2[1], newArr_5) > 3) {
//             result = true;
//         }
//     }
//     return result;
// }

// // test cases
// console.log(checkFlush(["A_S", "J_H", "7_D", "8_D", "10_D"], ["J_D", "3_D"]));
// console.log(checkFlush(["10_S", "7_S", "9_H", "4_S", "3_S"], ["K_S", "Q_S"]));
// console.log(checkFlush(["3_S", "10_H", "10_D", "10_C", "10_S"], ["3_S", "4_D"]));
// ---------------------------------------------------------------------------------------//
// 8. Dice Gambling
// function rolls(inputArr = []) {
//     let sum = inputArr[0];
//     if (inputArr.length > 1) {
//         for (let i = 1; i < inputArr.length; i++) {
//             if (inputArr[i - 1] == 1) {
//                 sum += 0;
//             } else if (inputArr[i - 1] == 6) {
//                 sum += inputArr[i] * 2;
//             } else {
//                 sum += inputArr[i];
//             }
//         }
//     }
//     return sum;
// }

// // test case
// console.log(rolls([1, 2, 3]));
// console.log(rolls([2, 6, 2, 5]));
// console.log(rolls([6, 1, 1]));

// ---------------------------------------------------------------------------------------//
// 10. Sexagenary Cycle (Chinese Zodiac)

// let stem =["Metal","Metal","Water","Water","Wood",
// "Wood","Fire","Fire","Earth","Earth"]
// let branch = ["Monkey","Rooster","Dog","Pig","Rat",
// "Ox","Tiger","Rabbit","Dragon","Snake","Horse","Sheep"]

// // function to determine stem
// function createStem(inputNumer = 0){
//     let result =stem[inputNumer%10];
//     return result;
// }

// // function to determine branch
// function createBranch(inputNumber){
//     let result = branch[inputNumber%12];
//     return result;
// }

// // final function
// function sexagenary(inputNumber){
//     if(inputNumber>=0){
//         let result = `${createStem(inputNumber)} ${createBranch(inputNumber)}`
//         return result;
//     }
//     return false
// }

// // test case
// console.log(sexagenary(1971));
// console.log(sexagenary(1927));
// console.log(sexagenary(1974));



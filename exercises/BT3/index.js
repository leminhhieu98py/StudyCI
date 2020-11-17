// Bai 1: Distance to nearest vowel
// Write a function that takes in a string and for
// each character, returns the distance to the nearest
// vowel. Of the character is a vowel itself, returns 0

// function nearestDistanceToVowel() {
//     let flag = true;
//     let inputData;
//     let arrayOfVowel = [];
//     // Check the string is not "";
//     while (flag) {
//         inputData = prompt("Enter a string");
//         if (inputData != "") {
//             flag = false;
//         }
//     }
//     // start to return distance
//     let arrayInputData = inputData.split("");
//     let arrayDistance = [];
//     for (let i = 0; i < arrayInputData.length; i++) {
//         // return 0 for vowel
//         if (arrayInputData[i].toLowerCase() == "u" || arrayInputData[i].toLowerCase() == "e" ||
//             arrayInputData[i].toLowerCase() == "o" || arrayInputData[i].toLowerCase() == "a" ||
//             arrayInputData[i] == "i") {
//             arrayDistance[i] = 0;
//             arrayOfVowel.push(i);
//         }
//         // return distance for other character
//         for (let i = 0; i < arrayInputData.length; i++) {
//             if (arrayInputData[i].toLowerCase() != "u" || arrayInputData[i].toLowerCase() != "e" ||
//                 arrayInputData[i].toLowerCase() != "o" || arrayInputData[i].toLowerCase() != "a" ||
//                 arrayInputData[i].toLowerCase() != "i") {
//                 let number = i;
//                 let subtract;
//                 let min = Math.abs(arrayOfVowel[0] - i);
//                 for (let j = 0; j < arrayOfVowel.length; j++) {
//                     subtract = Math.abs(number - arrayOfVowel[j]);
//                     if (subtract < min) {
//                         min = subtract;
//                     }
//                 }
//                 arrayDistance[i] = min;
//             }
//         }
//     }

//     // check the inputstring and the output array
//     console.log(arrayOfVowel);
//     console.log(inputData);

//     // return the resul
//     return console.log(arrayDistance);
// }

// nearestDistanceToVowel();


// ------------------------------------------------------------------------------------------------------------------//

// Bai 2. Odd Square Patch
// Create a function that takes an array of numbers, and 
// returns the size of the biggest square patch of odd
// numbers

// an Array can be easily entered by user
// let testArr = [
//     [1, 1, 43, 11],
//     [4, 11, 5, 7],
//     [6, 17, 1, 7]
// ];

// let testArr2 = [
//     [1, 2, 4, 9],
//     [4, 5, 5, 7],
//     [3, 6, 1, 7]
// ];

// let testArr3 = [[1,2,4,9]];

// // check a number if it is odd
// function isOdd(a) {
//     if (a % 2 == 1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // find out the biggest square size in an Array 
// function oddSquarePatch(testArr = [[]]) {
//     let result = [];
//     let square;
//     let size;
//     let max = 0;
//     let flag;
//     for (let i = 0; i < testArr.length; i++) {
//         for (let j = 0; j < testArr[i].length; j++) {
//             if (isOdd(testArr[i][j])) {
//                 square = [];
//                 size = 1;
//                 flag = true;
//                 let flag2;
//                 // recognise zise of a square
//                 while (flag) {
//                     // check if the edge of the square is not bigger than the size of Array
//                     if ((i + size) < testArr.length && (j + size) < testArr[i].length) {
//                         flag2 = false;
//                         size++;
//                         square = [];
//                         for (let m = i; m < i + size; m++) {
//                             for (let n = j; n < j + size; n++) {
//                                 if (isOdd(testArr[m][n])) {
//                                     square.push(testArr[m][n]);
//                                 } else {
//                                     flag = false;
//                                 }
//                             }
//                         }
//                         if (square.length == size ** 2) {
//                             flag2 = true;
//                         }
//                     } else {
//                         flag = false;
//                     }
//                 }
//                 // console.log(size);
//                 // add square even it is small or big
//                 if (flag2) {
//                     result.push(size);
//                 } else if (size == 1) {
//                     result.push(size);
//                 } else {
//                     result.push(size - 1);
//                 }

//             }
//         }
//     }

//     // console result for checking
//     // This result include all squares' size
//     console.log(result);

//     // return the result
//     for (let i = 0; i < result.length; i++) {
//         if (result[i] > max) {
//             max = result[i];
//         }
//     }
//     return console.log(max);
// }

// oddSquarePatch(testArr);
// oddSquarePatch(testArr2);
// oddSquarePatch(testArr3);

// ------------------------------------------------------------------------------------------------------------------//

// Bai 3: Junction or Self

// let number1 = 818;
// let number2 = 25;
// let number3 = 7;

// function junctionOrSelf(number){
//     let sum;
//     let numbersplit = [];
//     let resultArr = [];
//     for (let i = 0; i < number; i++) {
//         sum = i;
//         numbersplit = [];
//         numbersplit = i.toString().split("");
//         numbersplit.map(q => {
//             sum += Number(q);
//         })
//         if(sum == number){
//             resultArr.push(i);
//         }
//     }
//     if(resultArr.length > 0){
//         return console.log(resultArr);
//     }else{
//         return console.log('Self')
//     }
// }

// junctionOrSelf(number1);
// junctionOrSelf(number2);
// junctionOrSelf(number3);

// ------------------------------------------------------------------------------------------------------------------//

// Bai 4: Morse Code Decoded

// let code1 = ".... . .-.. .--.   -- .   -.-.--";
// let code2 = "-.-. .... .- .-.. .-.. . -. --. .";
// let morseToDots = {
//     ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
//     "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
//     "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
//     "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
//     "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2",
//     "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
//     "---..": "8", "----.": "9", "-.-.--": "!", "   ": " ", "..--..": "?",
//     ".-.-.-": ".", ".----.": "\"", "---...": ":", "--..--": ", ", " ": ""
// }

// function decodeMorse(text){
//     let textArr = text.split("   ");
//     let result = "";
//     textArr.map(q => {
//         let individualWord = q.split(" ");
//         for (let i = 0; i < individualWord.length; i++) {
//             result += morseToDots[individualWord[i]];
//         }
//         result += " ";
//     })
//     return console.log(result);
// }

// decodeMorse(code1);
// decodeMorse(code2);

// ------------------------------------------------------------------------------------------------------------------//

// Bai 5
// Creating a Picture Frame

function getFrame(width, height, character = "") {
    if (width <= 2) {
        return console.log('Invalid width')
    } else {
        let result = [];
        let eachRow;
        for (let i = 0; i < height; i++) { //vertical
            eachRow = "";
            for (let j = 0; j < width; j++) { //horizontal
                if (i == 0 || i == (height - 1)) {
                    eachRow += character;
                } else {
                    if (j == 0 || j == (width - 1)) {
                        eachRow += character;
                    } else {
                        eachRow += " ";
                    }
                }
            }
            result.push(eachRow);
        }
        return console.log(result);
    }
}

getFrame(4, 5, "#");
getFrame(10, 3, "*");
getFrame(2, 5, "0");
getFrame(10, 10, "+");

// const string = "A man, a plan, a canal: Panama";

// function isPalindrome() {
//   let reverse = string.split("[^a-zA-Z0-9]").reverse().join("");
//   if (reverse == string) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome(string));

// function outer() {
//   let a = 5;

//   function inner() {
//     a++;
//     console.log(a);
//   }

//   return inner;
// }

// let closureFunc = outer();
// closureFunc();
// closureFunc();

// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 6, 7);
// console.log(arr);
// console.log("Start");
// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));
// console.log("End");
// console.log("Start");
// async function test() {
//   console.log("Inside async function");
//   return "Hello";
// }
// test().then((result) => console.log(result));
// console.log("End");

// const string = "ajHdfjlAHSjLFDH";
// let reverseStr = string
//   .split("")
//   .reverse()
//   .map((str) =>
//     str == str.toLocaleUpperCase()
//       ? str.toLocaleLowerCase()
//       : str.toLocaleUpperCase()
//   )
//   .join("");
// console.log(reverseStr);

//  class Human {
//   name = null;
//   age = null;
//   gender = null;
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender =gender;
//   }
//   // getMyInfo() {
//   //   console.log(
//   //     `hello my name is ${this.name} my ${this.age} years old and i am a ${this.gender} `
//   //   );
//   // }
//   get myInfo() {
//     return this.name;
//   }
// }
// let human = new Human("Leo", 30, "male");
// console.log(human.myInfo);

// const flipp = document.getElementsByClassName("card");

// for (let card of flipp) {
//   console.log(card);
//   card.addEventListener("click", () => {
//     card.classList.toggle("flipped");
//   });
// }

// function chunkArray(arr, size) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice((i) => i + size));
//   }
//   return result;
// }

// var chunk = function (arr, size) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }
//   return result;
// };
// let arr = [1, 2, 3, 4, 5, 6];
// let size = 2;
// console.log(chunk(arr, size));

// var addSpaces = function (s, space) {
//   let result = "";
//   let spaceIndex = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (space[spaceIndex] === i) {
//       result += " ";
//       spaceIndex++;
//     }
//     result += s[i];
//   }
//   return result;
// };

// let s = "HappyNewYear";
// let space = [5, 8];
// console.log(addSpaces(s, space));

// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const newObj = Object.fromEntries(
//   Object.entries(obj).map(([key, value]) => [key, value * 2])
// );

// console.log(newObj);

// const arr = [10, 20, 30, 40, 50];

// const result = arr.filter((num, index) => {
//   if (index % 2 === 0) {
//     return num > 20;
//   }
//   return num < 40;
// });

// console.log(result);

// const numbers = [4, 2, 8];
// numbers.sort();
// console.log(numbers[2]);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = "Lydia";
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;

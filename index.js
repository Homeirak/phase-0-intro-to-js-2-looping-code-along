// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//debugger;
//  }
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//    for (let i = 0; i < gifts.length; i++) {
//        console.log(`Wrapped ${gifts[i]} and added a bow!`);
       //debugger;
//    }
    //return gifts;
//}

//wrapGifts(gifts); //prints 

//The for loop:
//for ([initialization]; [condition]; [iteration]) {
//    [loop body]
//}
//when you know how many times you want the loop to run

const names = [];
const eventName = "";
const newArray = [];
let message = "";

function writeCards (names, eventName) {
    for (let i = 0; i < names.length; i++) {
        message = (`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        newArray.push(message);
    }
    return newArray;
}
writeCards(names, eventName);

const number = [];

function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    return number;
}
countDown(number);
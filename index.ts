#! /usr/bin/env node
import inquirer from "inquirer";

console.log("Welcome to Number Guessing Game");

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {
    name:"userGuessedNumber",
    type:"number",
    message:"Enter your guessed number between 1-6"
    },
]);

if(answer.userGuessedNumber === randomNumber){
    console.log("Congratulations! you guess a right number");
}
else{
console.log("You guessed wrong number")
}

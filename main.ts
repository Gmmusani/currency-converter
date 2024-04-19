#! /usr/bin/env node

import inquirer from "inquirer"

// Define the list of currencies and their exchange rates

let exchange_rates : any = {
    "USD" : 1,
    "EUR" : 0.9,
    "JYP" : 113,
    "CAD" : 1.3,
    "AUD" : 1.65,
    "PKR" : 280
}

// Prompt the user to select currencies to convert from and to

let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert",
    }

])

// Perform currency conversion by using formula
let fromAmount = exchange_rates[user_answer.from_currency]
let toAmount = exchange_rates[user_answer.to_currency]
let amount = user_answer.amount

// Formula of conversion
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount

// Display the converted amount
console.log(`converted amount = ${convertedAmount}`);


#! /usr/bin/env node

import inquirer from "inquirer" 

let pin = await inquirer.prompt({
    "name":"pinCode",
    "type":"number",
    "message":"Enter Your Pin Code : ",
})

// Current Balance
let currentBalance = 1000
// my pin
let myPinCode = 12345
// amount withDraw 
let withdrawMoney;

// if pinCode match with myPinCode
if(pin.pinCode == myPinCode){
    console.log(`Your Current Balance is $${currentBalance}`);
    
    // select option withdraw balance or check balance
    let option = await inquirer.prompt({
        "name":"option",
        "type":"list",
        "message":"Please select option",
        "choices": ['withdraw','check you balance']
    })
    // if withdraw
    if(option.option == 'withdraw'){
        // how much release balance
        let withDrawAmount = await inquirer.prompt({
            "name":"withDrawAmount",
            "type":"number",
            "message":"Enter Your Amount :",
        })
        // check amount is less then current balance or null
        if(withDrawAmount.withDrawAmount <= currentBalance){
            currentBalance = currentBalance-withDrawAmount.withDrawAmount;
            console.log(`You WithDraw ${withDrawAmount.withDrawAmount} & your remaining balance is ${currentBalance}`)
        }
        else{
            console.log(`Your Balance ${currentBalance} is less then ${withDrawAmount.withDrawAmount}`)
        }
    }
    else{
        console.log(`Your Current Balance is ${currentBalance}`)
    }
    
}
else{
    console.log(`Sorry your Pin Code is incorrect`);
}
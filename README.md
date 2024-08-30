# TS-Number-Guessing-Game
### I develop this Number guessing project by using typescript. 
#! /usr/bin/env node
console.log("GUESS A NUMBER BETWEEN 1 TO 10");
// NOW CREATE A VARIABLE

let a:number=Math.floor(Math.random()*10)
import inquirer from "inquirer";

while(true){
    let input=await inquirer.prompt
    ({name:"guess",type:"number",message:"ENTER ANY GUESS NUMBER YOU WANT:"})


    //    CODE:


let ans:Number=input.guess
if(a==ans)
{console.log("CONGRATULATION YOUR NUMBER IS ABSOLUTELY CORRECT:")
    break;}
    else{console.log("SORRY YOU GUESS WRONG NUMER PLEASE TRY AGAIN");
    }
}

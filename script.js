//Step 1:	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.

//var name = window.prompt("What is your name?");
//window.console.log(name.length);


// Step 2:  Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.

//var name = window.prompt("What is your name?");
//var numLetter = window.prompt("Pick a number that is equal to or less then the number of letters in your name.");
//window.alert(name.charAt(numLetter));


// Step 3:  Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.

//var firstName = window.prompt("What is your first name?");
//var lastName = window.prompt("What is your lastName?");
//window.alert("Your name is: " + firstName + " " + lastName);


// Step 4:  Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.

//var sentence = "The quick brown fox jumps over the lazy dog.";
//window.alert(sentence.indexOf("fox"));


// Step 5:  Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.

//var sentence = "The quick brown fox jumps over the lazy fox.";
//window.alert(sentence.lastIndexOf("fox"));


// Step 6:  Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.

//var sentence = "The quick brown fox jumps over the lazy dog.";
//var name = window.prompt("What is your full name?");
//window.alert(sentence.replace("the lazy dog", name));                        


// Step 7:  Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.

//var sentence = "The quick brown fox jumps over the lazy dog.";
//var word = window.prompt("Enter any word.");
//window.alert(sentence.search(word));


// Step 8:	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.*/

//var old_string = "The quick brown fox jumps over the lazy dog.";
//var new_string = old_string.substring(31, 43);
//window.alert(new_string.toUpperCase());


// Step 9:  Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.

//var oldString = "            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
//var newString = (oldString.trim());
//window.alert(newString.toLowerCase());


// Step 10:  Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//var oldString = "the quick brown fox jumps over the lazy dog.";
//var newString = oldString.slice(0, 1);
//var newerString = oldString.slice(1, 45);
//window.alert(newString.toUpperCase() + newerString);



//PART 2

//PART 1-Math and Math Functions


//Step 1:  Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.

//var x = window.prompt("Please enter a number.");
//window.console.log(Math.abs(x));


//Step 2:  Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.

//var x = window.prompt("Please enter a number with a decimal.");
//window.console.log(Math.ceil(x));


//Step 3:  Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.

//var x = window.prompt("Please enter a number with a decimal.");
//window.console.log(Math.floor(x));


//Step 4:  Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
/*
var a = window.prompt("Please enter a number.");
var b = window.prompt("Please enter another number.");
var c = window.prompt("Please enter another number.");
var d = window.prompt("Please enter another number.");
var e = window.prompt("Please enter another number.");
window.console.log(Math.min(a, b, c, d, e));
window.console.log(Math.max(a, b, c, d, e));
*/

//Step 5:  Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window.

//var x = window.prompt("Please enter a number.");
//window.console.log(Math.sqrt(x));



//PART 2 - Date and Date Functions 

//Step 6:  Create an application that gets the current date. Display that result within the console window.

//var d = new Date();
//window.console.log(d.getDate());


//Step 7:  Create an application that gets the number of days in a month. Display that result within the console window.
/*
var d =  new Date();
var m =  (d.getMonth());
if (m === 0 || m === 2 || m === 4 || m === 6 || m === 7 || m === 9 || m === 11) {
    window.console.log("The month has 31 days.");
} else if (m === 3 || m === 5 || m === 8 || m === 10) {
    window.console.log("The month has 30 days.");
} else {
    window.console.log("The month has 28 days.");
}
*/

// Step 7 another answer:
/*
var d = new Date();
var m = d.getMonth();
if (m === 0) {
    window.console.log("The month has 31 days.");
} else if (m === 1) {
    window.console.log("The month has 28 days.");
} else if (m === 2) {
    window.console.log("The month has 31 days.");
} else if (m === 3) {
    window.console.log("The month has 30 days.");
} else if (m === 4) {
    window.console.log("The month has 31 days.");
} else if (m === 5) {
    window.console.log("The month has 30 days.");
} else if (m === 6) {
    window.console.log("The month has 31 days.");
} else if (m === 7) {
    window.console.log("The month has 31 days.");
} else if (m === 8) {
    window.console.log("The month has 30 days.");
} else if (m === 9) {
    window.console.log("The month has 31 days.");
} else if (m === 10) {
    window.console.log("The month has 30 days.");
} else {
    window.console.log("The month has 31 days.");
}
    */


//STEP 8:  Create an application that gets the month name from a particular date. Display that result within the console window. 
/*
var d = new Date();
var m = d.getMonth();
if (m === 0) {
    window.console.log("The month is January.");
} else if (m === 1) {
    window.console.log("The month is February.");
} else if (m === 2) {
    window.console.log("The month is March.");
} else if (m === 3) {
    window.console.log("The month is April.");
} else if (m === 4) {
    window.console.log("The month is May.");
} else if (m === 5) {
    window.console.log("The month is June.");
} else if (m === 6) {
    window.console.log("The month is July.");
} else if (m === 7) {
    window.console.log("The month is August.");
} else if (m === 8) {
    window.console.log("The month is September.");
} else if (m === 9) {
    window.console.log("The month is Otober.");
} else if (m === 10) {
    window.console.log("The month is November.");
} else {
    window.console.log("The month December.");
}
*/

//Step 9:  Create an application that tests whether a date is a weekend. Display that result within the console window. 
/*
var d = new Date();
var m = d.getDay();
if (m === 6 || m === 0) {
    window.console.log("The day is a weekend.");
} else {
    window.console.log("The day is not a weekend.");
}
*/


// Step 10:   Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
/*
var d = new Date();
var s = d.getDay();
if (s === 0) {
    window.console.log("The day is Saturday.");
} else if (s === 1) {
    window.console.log("The day is Sunday.");
} else if (s === 2) {
    window.console.log("The day is Monday.");
} else if (s === 3) {
    window.console.log("The day is Tuesday.");
} else if (s === 4) {
    window.console.log("The day is Wednesday.");
} else if (s === 5) {
    window.console.log("The day is Thursday.");
} else {
    window.console.log("The day is Friday.");
}
*/

// Another answer for Step 10:
/*
var d = new Date();
var m = d.getDay();
var s = (m - 1);
if (s === 0) {
    window.console.log("The day is Sunday.");
} else if (s === 1) {
    window.console.log("The day is Monday.");
} else if (s === 2) {
    window.console.log("The day is Tuesday.");
} else if (s === 3) {
    window.console.log("The day is Wednesday.");
} else if (s === 4) {
    window.console.log("The day is Thursday.");
} else if (s === 5) {
    window.console.log("The day is Friday.");
} else {
    window.console.log("The day is Saturday.");
}
*/


//Step 11:	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
/*
var d = new Date();
var s = d.getDay();
if (s === 0) {
    window.console.log("S");
} else if (s === 1) {
    window.console.log("M");
} else if (s === 2) {
    window.console.log("T");
} else if (s === 3) {
    window.console.log("W");
} else if (s === 4) {
    window.console.log("T");
} else if (s === 5) {
    window.console.log("F");
} else {
    window.console.log("S");
}
*/


//Part 3 - Conditional Logic and Looping Operations (4 points)

//Step 12:  Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.

//var a = window.prompt("Please enter a whole number.");
//var b = window.prompt("Please enter another whole number.");
//window.console.log(Math.max(a, b));


//Step 13:	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
/*
var name1 = "Ursula";
var grade1 = 80;
var name2 = "Paul";
var grade2 = 77;
var name3 = "Henry";
var grade3 = 88;
var name4 = "Tabitha";
var grade4 = 95;
var name5 = "Lucy";
var grade5 = 68;
var letter1;
var letter2;
var letter3;
var letter4;
var letter5;
if (grade1 < 60) {
    window.console.log(name1 + ":  F");
} else if (grade1 < 70) {
    window.console.log(name1 + ":  D");
} else if (grade1 < 80) {
    window.console.log(name1 + ":  C");
} else if (grade1 < 90) {
    window.console.log(name1 + ":  B");
} else {
    window.console.log(name1 + ":  A");
}
if (grade2 < 60) {
    window.console.log(name2 + ":  F");
} else if (grade2 < 70) {
    window.console.log(name2 + ":  D");
} else if (grade2 < 80) {
    window.console.log(name2 + ":  C");
} else if (grade2 < 90) {
    window.console.log(name2 + ":  B");
} else {
    window.console.log(name2 + ":  A");
}
if (grade3 < 60) {
    window.console.log(name3 + ":  F");
} else if (grade3 < 70) {
    window.console.log(name3 + ":  D");
} else if (grade3 < 80) {
    window.console.log(name3 + ":  C");
} else if (grade3 < 90) {
    window.console.log(name3 + ":  B");
} else {
    window.console.log(name3 + ":  A");
}
if (grade4 < 60) {
    window.console.log(name4 + ":  F");
} else if (grade4 < 70) {
    window.console.log(name4 + ":  D");
} else if (grade4 < 80) {
    window.console.log(name4 + ":  C");
} else if (grade4 < 90) {
    window.console.log(name4 + ":  B");
} else {
    window.console.log(name4 + ":  A");
}
if (grade5 < 60) {
    window.console.log(name5 + ":  F");
} else if (grade5 < 70) {
    window.console.log(name5 + ":  D");
} else if (grade5 < 80) {
    window.console.log(name5 + ":  C");
} else if (grade5 < 90) {
    window.console.log(name5 + ":  B");
} else {
    window.console.log(name5 + ":  A");
}
*/

// Step 14:  Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
/*
var i;
for (i = 1; i <= 15; i++) {
    if (i % 2 === 0) {
        window.console.log(i + " is an even number.");
    } else {
        window.console.log(i + " is an odd number.");
    }
}
*/

// Step 15: Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
/*
var i;
for (i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        window.console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        window.console.log("Buzz");
    } else if (i % 3 === 0) {
        window.console.log("Fizz");
    } else {
        window.console.log(i);
    }
}
*/

//PART 4- "Hitchhikers Guide to the Galaxy Game"

/*
var z;
var x = window.confirm("Are you ready to play Hitchhiker's Guide to the Galaxy?");
if (x === true) {
    window.alert("Awesome, our hero is waiting!");
} else {
    window.alert("Too bad, we're goiong to play anyway because our hero desperately needs your help!");
}
window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distanceahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall...");
var choice = window.prompt("Which way would you like to head? (Please enter forward, left or right.");
switch (choice) {
case "forward":
    window.alert("You walk about 100 yards and sarely make your way out of the cave.");
    break;
case "left":
    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
    break;
case "right":
    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
    break;
default:
    window.alert("The Ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option...loser.");
}
var y = window.prompt("Please rate this game on a scale of 1 to 10.");

if (y < 1 || y > 10 || isNaN(y) === true) {
    (y = 10);
}
if (y >= 6) {
    window.alert("Thank you, we will continue to make improvements to the game!");
} else {
    window.alert("Whatever, you weren't very good at this game anyway!");
}
*/


//PART 5: Coin Flip Game
/*
var coinFlip = Math.floor(Math.random() * 10 + 1);

if (coinFlip <= 5) {
    coinFlip = true;
} else {
    coinFlip = false;
}
var choice = window.prompt("Pick heads or tails.").toLowerCase();
window.alert("You chose " + choice);

if (choice === "heads" && coinFlip === true) {
    window.alert("The flip was heads and you chose heads...you win!");
} else if (choice === "heads" && coinFlip === false) {
    window.alert("The flip was tails but you chose heads...you lose!");
} else if (choice === "tails" && coinFlip === true) {
    window.alert("The flip was heads but you chose tails...you lose!");
} else if (choice === "tails" && coinFlip === false) {
    window.alert("The flip was tails and you chose tails...you win!");
} else {
    window.alert("You didn't pick heads or tails; try again!");
}
*/


// Step 6: The “Coin Flip” Game Redux
/*
var coinFlip;
var i;
for (i = 1; i <= 10; i++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        window.console.log("Heads");
    } else {
        window.console.log("Tails");
    }
}
*/


//Step 7: The “Coin Flip Streak” Game 
/*
var coinFlip;
var i = 0;
do {
    i += 1;
    coinFlip = Math.round(Math.random());
    window.console.log("Heads");
} while (coinFlip === 0);
window.console.log("Tails");
*/


// Step 8: Looping a Triangle
/*
var i = 1;
var x = "#";
window.console.log(x);
for (i = 1; i <= 6; i++) {
    x += "#";
    window.console.log(x);
}
*/


// Step 9:  Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.  
/*
var i;
for (i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        window.console.log(i + " is an even number.");
    } else {
        window.console.log(i + " is an odd number.");
    }
}
*/












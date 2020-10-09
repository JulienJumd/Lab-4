  
let myFullName = "Julien Jourdanet"; // 15 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

document.querySelector(".header").innerHTML = myFullName + " 's Lab 4";

  
// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name


var firstParagraph = document.createElement("p1");
var secondParagraph = document.createElement("p2");
firstParagraph.className = "content1";
secondParagraph.className = "content2";
var newFirstParagraph = document.createTextNode("The first new paragraph. \n");
var newSecondParagaph = document.createTextNode("The second new paragraph. \n");
firstParagraph.appendChild(newFirstParagraph);
secondParagraph.appendChild(newSecondParagaph);
var newParagraphs = document.querySelector(".content");
newParagraphs.appendChild(firstParagraph);
newParagraphs.appendChild(secondParagraph);


// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

/* var phrase1 = "my name has " + myFullName.length " characters";
firstParagraph.append(phrase1); */

var phrase1 = "my name has " + myFullName.length + " characters.";
firstParagraph.append(phrase1);

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name

var thirdCharacter = myFullName.charAt(2).toUpperCase();
secondParagraph.append(" This is the third letter of my name: " + thirdCharacter+".");

// 6 Add a new line to your second paragraph

secondParagraph.append("\n");

// 7 Return the final three characters of your last name to that new line
var lastThreeLetters = myFullName.slice(-3);
secondParagraph.append("These are the final three letters in my name: " + lastThreeLetters);


// 8 Substring your first and last name into two separate variables

var firstName = myFullName.substring(0,7);
var lastName = myFullName.substring(7,15);

// 9 Add the total length of your first and last names together

var lengthOfName = firstName.length + lastName.length;

// 10 Display that total next to your name in your header

document.querySelector(".header").append(". The length of my full name is: " + lengthOfName);


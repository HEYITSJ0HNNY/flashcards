var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var basicPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(basicPresident.front);

// "George Washington"
console.log(basicPresident.back);


var clozePresident = new ClozeCard(
  "Donald Trump is the current President?", "Donald Trump");

//Donald Trump
  console.log(clozePresident.cloze);
  //Who is the current President?
  console.log(clozePresident.fullText);

  console.log(clozePresident.partial);

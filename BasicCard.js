var BasicCard = function(front, back) {
    this.front = front,
        this.back = back;
};

module.exports = BasicCard;

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front);
// "George Washington"
console.log(firstPresident.back);

var secondPresident = new BasicCard(
    "Who was the second president of the United States?", "John Adams");

// "Who was the first president of the United States?"
console.log(secondPresident.front);
// "George Washington"
console.log(secondPresident.back);

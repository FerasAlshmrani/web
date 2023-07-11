const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

// out put['apple', 'pear', 'plum', 'blueberry', 'strawberry']


let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);
//['onion', 'parsley', 'carrot', 'beetroot']


const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

//['apples'] 'not' ['apples','pears']
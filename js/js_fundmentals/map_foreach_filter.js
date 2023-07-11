/*
     forEach 

    filter

     map
     */
    
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);


//To explain the syntax, the forEach() method accepts a function that will work on each array item.
//That function's first parameter is the current array item itself, and the second (optional) parameter is the index.

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

//Another very useful method on the array is the filter() method.
//It filters your arrays based on a specific test. Those array items that pass the test are returned.


[0,10,20,30,40,50].map( function(num) {
    return num / 10
})

//Finally, there's a very useful map method. 
//This method is used to map each array item over to another array's item,
//based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

// anorher use :

//A map can feel very similar to an object in JS.
//However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

// Output : Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

bestBoxers.get(1); // 'The Champion'


//The Set constructor can, for example, accept an array.
//This means that we can use it to quickly filter an array for unique members.

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
//Output:{'apple', 'pear', 'plum'}
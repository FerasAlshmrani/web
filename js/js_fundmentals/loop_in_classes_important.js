// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (dair of dairy) {
        console.log(dair)
    }
}
logDairy()



// Task 2
function birdCan() {

const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

    for (bir of Object.keys(bird)) {
        console.log(bir + ": " + bird[bir]);
    } 
}
birdCan()
// Task 3
function animalCan() {

    const animal = {

    canJump: true

    };

    const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

    for (const prop in bird) {//loops over all properties in the object,  including the prototype's properties.
        console.log(prop + ":" + " " + bird[prop]);
    }
}

animalCan();



const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

/*


The Object.keys() method

The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the object itself; for now, focus on the returned array of properties when you call the Object.keys() method.

Here's an example of running the Object.keys() method on a brand new car2 object:

*/
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']




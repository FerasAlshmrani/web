const jsonStr = '{"greeting":"hello"}'

const aPlainObj =  JSON.parse(jsonStr)

console.log(aPlainObj)

aPlainObj.greeting = 'h1';

console.log(aPlainObj)


const data = {
    firstName: "John",
    lastName:"Doe",
    greeting:"Hello",
}

console.log(JSON.stringify(data))
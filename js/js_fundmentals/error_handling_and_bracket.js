/*
Here are some of the most common errors in JavaScript: 

    ReferenceError 

    SyntaxError 

    TypeError 

    RangeError

There are some other errors in JavaScript. These other errors include: 

    AggregateError 

    Error 

    InternalError 

    URIError


    -----------------
    console.log(username); - Uncaught ReferenceError: username is not defined


    var a "there's no assignment operator here";  -  Uncaught SyntaxError: Unexpected string


    "hello".pop() // Uncaught TypeError: "hello".pop is not a function


    (10).toString(100); // Uncaught RangeError: toString() radix argument must be between 2 and 36
    
    */


    function addTwoNums(a,b){
        try{
    
            if (typeof(a) != 'number'){
                throw ReferenceError("the first argument is not a number")
                
            }
            else if(typeof(b) != 'number'){
                throw ReferenceError("the second atgument is not a number")
                
            }
        }
        catch(err){
            console.log(err)
        }
        console.log( a + b )
        console.log(`you can use this bracket to put numbers inside string for example ${a} , ${b} see ? ${a+b}`)
        
    }
    
    addTwoNums(5,'5')

// another example :)

    function letterFinder(word, match) {
        var condition1 = typeof(word) == 'string' && word.length >= 2;
        var condition2 = typeof(match) == 'string' && match.length == 1;
        if (condition1 == true && condition2 == true){
            for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
        }
        else{
            console.log("please pass correct arguments to the function.")
        }
    
    }

    letterFinder([],[])
    letterFinder("cat","c")
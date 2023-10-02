console.log("------ Arrow Function ------");

//Normal Function
function hello() {
    return "Hello World!";
}

//Normal Function
hello = function() {
    return "Hello World";
}

console.log(hello());

//Arrow Function
hello = () => {
    return "Hello World! This is from Arrow Function";
}

//Arrow Function
hello = () => "Hello World! This is from Arrow Function";

console.log(hello());

//Arrow Function with 1 parameter
hello = (myName) => "Hello " + myName + "! This is from Arrow Function";

//Arrow Function with 1 parameter
hello = myName => 'Hello ${myName}! This is from Arrow Function';

console.log(hello("Puput"));
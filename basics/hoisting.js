test();
testAssignmentError(); // is not a function
testDeclarationError(); // can't acces lexical declaration


// Javascript loads the function before it is called, that's why it works
// Exceptions | const and let, never get hoisted
// var get's hoisted. Because it's an assignment and not a declaration, Javascript doesn't know it's value

function test() {
    console.log('Hi from test');
}


var testAssignmentError = function() {
    console.log('Hi from test Assignment Error')
}


const testDeclarationError = function() {
    console.log('Hi from test Declaration Error')
}


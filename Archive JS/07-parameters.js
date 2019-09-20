
function greet (greeting, person) {
       return  greeting + " " + person + ", how are you?" ;
};

console.log();
console.log( 'greet ("Good morning", "Peter") => '
            + greet ("Good morning", "Peter")); //   =>  "Good morning Peter, how are you?"
console.log();
console.log( 'greet ("Hi", "Peter")           => '
            + greet ("Hi", "Peter"));           //   =>  "Hi Peter, how are you?"

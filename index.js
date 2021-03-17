// divisible by 3 => Fizz
// divisable by 5 => Buzz
// Divisable by 3 and 5 (like 15) => FizzBuzz
// If its not divisable by 3 or 5 we get => input
// if input not a number => 'Not a number'

function fizzBuzz(input) {
    if (typeof input !== 'number')
        return NaN;

    if (input % 3 === 0)
    return 'Fizz';
    if (input % 5 === 0)
        return 'Buzz';
    if ((input % 5 === 0) && (input % 3 === 0))
        return 'FizzBuzz';
    if ((input % 5 !== 0) || (input % 3 !== 0))
        return input; 
}

console.log(fizzBuzz(5));

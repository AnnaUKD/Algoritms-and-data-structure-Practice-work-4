// Завдання 1

function functionForAddingNumbersUntilN(n, i = 0){
    if(i === 5){
        return i;
    }
    console.log(i + 1)
    return functionForAddingNumbersUntilN(n, i + 1)
}

// Завдання 2

function funcForAscendingAndDescendingAccordingToA(a, b){
    if(a < b){
        if(a === b){
            console.log(a);
         return a;
        }
        console.log(a);
        return funcForAscendingAndDescendingAccordingToA(a + 1, b);
    }
    if(a > b){
        if(b === a){
            console.log(b)
            return b;
        }
        console.log(a);
        return funcForAscendingAndDescendingAccordingToA(a - 1, b);
    }
}

// funcForAscendingAndDescendingAccordingToA(16, 5)

// Завдання 3

function funcActualGradeOfTwo(n, i = 0){}


// Завдання 4

function funcForSumOfIntegersInNumber(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) + funcForSumOfIntegersInNumber(Math.floor(n / 10));
}

// console.log(funcForSumOfIntegersInNumber(567))

// Завдання 5

function funcForReversingNumber(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) * Math.pow(10, Math.floor(Math.log10(n))) + funcForReversingNumber(Math.floor(n / 10));
}
// console.log(funcForReversingNumber(12345))

// Завдання 6
function funcFowWritingNumbersOneByOne(n) {
    if (n < 10) {
        console.log(n);
        return n;
    }
    console.log(n % 10);
    return funcFowWritingNumbersOneByOne(Math.floor(n / 10));
}

console.log(funcFowWritingNumbersOneByOne(12345))

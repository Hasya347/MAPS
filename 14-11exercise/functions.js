/**
 * A function can be declared
 * A function can be invoked/called
 * A function can be assigned to a variable
 * A function can be used as method
 * A function can be passed as an argument to another function
 */


// old way of declaring a function
function sumOfSquare(num1, num2, func2) {
    const sum = func2(num1, num1) + func2(num2, num2)
    return sum
}

// ES6 way of declaring a function
const multiply = (a, b) => {
    const result = a * b;
    return result
}

const Hasya = {
    firstName: "Hasya",
    lastName: "Puli",
    gender: "Female",
    fullName: function () {
        console.log(this.firstName, this.lastName)
    }
}
Hasya.fullName()
console.log(sumOfSquare(5, 6, multiply))
// const res1 = add(12, 10, multiply)
// const res2 = multiply(12, 10)
// const finalresult = res2 / res1
// console.log(finalresult)

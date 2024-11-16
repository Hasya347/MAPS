// if (10 >= 10) {
//     console.log("True")
// } else {
//     console.log("False")
// }
const value = 10 < 5 ? 'Hasya' : 'Puli'
console.log(value)

const final = 10 < 1 ? "GReater" : 10 === 10 ? "Equal" : "Less"
console.log('Final', final)

const mySim = "Airtel"

if (mySim === 'Airtel') {
    console.log("My sim is Airtel")
} else if (mySim === 'JIO') {
    console.log("My sim is JIO")
} else if (mySim === 'IDEA') {
    console.log("My sim is IDEA")
} else if (mySim === 'AT&T') {
    console.log("My sim is AT&T")
} else if (mySim === 'BSNL') {
    console.log("My sim is BSNL")
} else if (mySim === 'Vodafone') {
    console.log("My sim is Vodafone")
} else {
    console.log("My sim is not supported")
}

switch (mySim) {
    case 'Airtel':
        console.log("My sim is Airtel")
        break;
    case 'JIO':
        console.log("My sim is JIO")
        break;
    case 'Idea':
        console.log("My sim is IDEA")
        break;
    case 'Vodafone':
        console.log("My sim is Vodafone")
        break;
    case 'AT&T':
        console.log("My sim is AT&T")
        break;
    case 'BSNL':
        console.log("My sim is BSNL")
        break;
    default:
        console.log("My sim is not supported")
        break;
}
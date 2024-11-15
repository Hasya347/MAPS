/**
 * Data types
 *  - string
 *  - number
 *  - boolean
 *  - object
 *  - Array
 */
var name = "hasya"
name = "Pushkar"
var year;

var isLeapYear = true
var hasya = {
    name: "Hasya", age: 26, countr: "India", optedFood: true,
    adress: [{ zipCode: 10010, firstLine: "", secondLine: "", addressType: "HOUSE" },
    { zipCode: 10010, firstLine: "", secondLine: "", addressType: "OFFICE" }
    ]
}
var employees = [{}, {}, {}]

// let & const
const firstName = ""
let lastName = ""
lastName = ""

// === && ==
var kitountcount = 0
var marsCount = 0
var fivestarCount = 0
var choclates = ['Fivestar', 'Kit kat', 'MARS', 'Fivestar', 'Kit kat', 'MARS', 'Fivestar']
for (let i = 0; i < choclates.length; i++) {
    if (choclates[i] === 'Kit kat') {
        kitountcount = kitountcount + 1
    }
    if (choclates[i] === 'MARS') {
        marsCount = marsCount + 1
    }
    if (choclates[i] === 'Fivestar') {
        fivestarCount = fivestarCount + 1
    }
}
console.log({ kitountcount, marsCount, fivestarCount })


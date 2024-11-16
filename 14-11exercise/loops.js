const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < nums.length; i++) {
//     console.log('loops', nums[i] * 5)
// }

// for (let i = nums.length - 1; i >= 0; i--) {
//     console.log('loops', nums[i] * 5)
// }

/// let i=0
/// 0< 10
///  print console
/// i++ => i=1



/// 1< 10
///  print console
/// i++ => i=2

/// 2< 10
///  print console
/// i++ => i=3


let i = 0
while (i < nums.length) {
    console.log("Product", nums[i] * 10)
    i++
}

let j = nums.length - 1
while (j >= 0) {
    console.log("Reverse product", nums[j] * 10)
    j--
}


nums.forEach((num) => console.log('foreach', num * 15))  /// loops through the array and doesnot alter the array
console.log(nums.map((num) => 3 * num)) /// loops through the array and the values are updated and returned in a new array
console.log(nums.filter((num) => num % 2 === 0)) /// filter the array based on the condition and returns the result in the new array
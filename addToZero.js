// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

let addZero = "false"

for (let i = array.length - 1; i >= 0; i--) {
    for (let x = i; x >= 0; x--) {
        if (i !== x) {
            if (array[i] + array[x] === 0) {
                addZero = "true"
            }
        }
    }
}
console.log(addZero)
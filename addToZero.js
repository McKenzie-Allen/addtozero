// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let i = array.length - 1

while (i >= 0) {
    for (let countdown = i - 1; countdown >= 0; --countdown) {
        let y = array[countdown] + array[i]
        if (y === 0) {
            let hapa = true
        } else {
            let hapa = false
        }
    }
    i--

}
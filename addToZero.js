// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
let i = array.length - 1

function willItAdd(i) {
    while (i >= 0) {
        for (let countdown = i; countdown >= 0; --countdown) {
            if (array[i] + array[countdown] === 0) return true
            if (array[i] + array[countdown] === !0) return false
        }
        i--
    }

}
switch (willItAdd(i)) {
    case true:
        message = "true"
        break;
    case false:
        message = "false"
        break;
}
console.log(message)
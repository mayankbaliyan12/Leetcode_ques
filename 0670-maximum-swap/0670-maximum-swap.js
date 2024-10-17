/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    num = num.toString().split('')
    let result = []
    let max = 0
    let map = new Map()
    for (let i = num.length - 1; i > -1; i--) {
        if (num[i] > max) {
            max = num[i]
            map.set(max, i)
        }
        result[i] = max
    }
    for (let i = 0; i < num.length; i++) {
        if (result[i] > num[i]) {
            let temp = num[i]
            num[i] = result[i]
            num[map.get(result[i])] = temp
            break

        }
    }
    return num.join('') * 1
};
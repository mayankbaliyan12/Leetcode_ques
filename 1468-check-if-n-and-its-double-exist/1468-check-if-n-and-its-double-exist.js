/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    for (let j = 0; j < arr.length; j++) {
        for (i = 0; i < arr.length; i++) {
            if (arr[j] == 2 * arr[i] && i!=j) {
                return true;
            }
        }
    }

    return false
};
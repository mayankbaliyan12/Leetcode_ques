/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    let n = matrix.length;

    function swap(matrix, i, j) {
        let temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            swap(matrix, i, j);
        }
    }
    for (let i = 0; i < n; i++) {
        low = 0;
        high = n - 1;
        while (low < high) {
            let temp = matrix[i][low];
            matrix[i][low] = matrix[i][high];
            matrix[i][high] = temp;
            low++;
            high--;
        }
    }
};
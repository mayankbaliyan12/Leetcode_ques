/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    // console.log(n, m)

    let row = Array(n).fill(0);
    let col = Array(m).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] == 0) {
                row[i] = -1;
                col[j] = -1;
            }
        }
    }
    // console.log({ row })
    // console.log({ col })
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }
    return matrix;
};


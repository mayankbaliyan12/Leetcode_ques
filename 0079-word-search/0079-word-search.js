/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m = board.length;
    let n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == word[0]) {
                if (find(board, word, 0, i, j, m, n)) {
                    return true;
                }
            }
        }
    }
    return false;
};
function find(board, word, idx, i, j, m, n) {
    if (idx == word.length) {
        return true;
    }
    if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] == '#') {
        return false;
    }
    if (board[i][j] != word[idx]) {
        return false;
    }
    let temp = board[i][j];
    board[i][j] = '#';

    const search1 = find(board, word, idx + 1, i + 1, j, m, n);
    const search2 = find(board, word, idx + 1, i - 1, j, m, n);
    const search3 = find(board, word, idx + 1, i, j + 1, m, n);
    const search4 = find(board, word, idx + 1, i, j - 1, m, n);

    board[i][j] = temp;
    return search1 || search2 || search3 || search4;
}


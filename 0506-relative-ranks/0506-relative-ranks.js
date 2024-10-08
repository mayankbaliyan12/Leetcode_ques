/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    const sortedScores = [...score].sort((a, b) => b - a);
    console.log(sortedScores)
    const len = score.length;
    const res = [];

    for (let i = 0; i < len; i++) {
        const rank = sortedScores.indexOf(score[i]) + 1;
        console.log(rank)
        if (rank === 1) {
            res.push("Gold Medal");
        } else if (rank === 2) {
            res.push("Silver Medal");
        } else if (rank === 3) {
            res.push("Bronze Medal");
        } else {
            res.push(rank.toString());
        }
    }
    console.log(res);
    return res;
};

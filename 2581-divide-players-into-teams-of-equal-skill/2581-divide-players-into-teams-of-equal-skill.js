/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
    skill.sort((a, b) => a - b);
    const pairs = [];
    const n = skill.length;
    let target = skill[0] + skill[n - 1];

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (skill[i] + skill[n - 1 - i] != target) {
            return -1;
        }

        pairs.push([skill[i], skill[n - 1 - i]]);
    }

    let res = 0;


    for (let i = 0; i < pairs.length; i++) {
        res += pairs[i][0] * pairs[i][1];
    }

    return res;
};
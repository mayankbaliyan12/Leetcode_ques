/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    let leftSum = 0;
    let maxSum = 0;
    let rightSum = 0;

    for (let i = 0; i <= k - 1; i++) {
        leftSum = leftSum + cardPoints[i];
        maxSum = leftSum;
    }

    rightIdx = cardPoints.length - 1;

    for (let i = k - 1; i >= 0; i--) {
        leftSum = leftSum - cardPoints[i];
        rightSum = rightSum + cardPoints[rightIdx];
        rightIdx = rightIdx - 1;

        maxSum = Math.max(maxSum, leftSum + rightSum);
    }
    return maxSum;
};
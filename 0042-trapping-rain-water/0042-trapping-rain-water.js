/**
 * @param {number[]} height
 * @return {number}
 */
function getLeftMax(height, n) {
    let leftMax = [];
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    return leftMax;
}
function getRightMax(height, n) {
    let rightMax = [];
    rightMax[n-1] = height[n-1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }
    return rightMax;
}
var trap = function (height) {
    let n = height.length;
    let sum=0;
    let leftMax = getLeftMax(height, n);
    let rightMax = getRightMax(height, n);

    for (let i = 0; i < n; i++) {
        let h = Math.min(leftMax[i], rightMax[i]) - height[i];
        sum = sum + h;
    }
    return sum;
};
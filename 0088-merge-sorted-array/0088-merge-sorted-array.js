/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let res = [];
    let i = 0, j = 0;

    while (i < m && j < n) {
        if (nums1[i] < nums2[j]) {
            res.push(nums1[i]);
            i++;
        }
        else if(nums1[i] > nums2[j])
        {
            res.push(nums2[j]);
            j++;
    }
        else {
    res.push(nums1[i]);
    i++;
}
    }
while (i < m) {
    res.push(nums1[i]);
    i++;
}
while (j < n) {
    res.push(nums2[j]);
    j++;
}
for (let p = 0; p < m + n; p++) {
    nums1[p] = res[p];
}

};
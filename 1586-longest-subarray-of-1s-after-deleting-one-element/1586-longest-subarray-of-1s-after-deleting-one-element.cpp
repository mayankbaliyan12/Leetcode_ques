class Solution {
public:
    int longestSubarray(vector<int>& nums) {
        int n = nums.size();
        if (n == 0) {
            return 0;
        }
        int diff = 0;
        int i = 0, j = 0;
        int count = 0;
        while (j < n) {
            if (nums[j] == 0) {
                count++;
            }
            while (count >= 2) {
                if (nums[i] == 0) {
                    count--;
                }
                i++;
            }
            diff = max(diff, j - i);
            j++;
        }
        return diff;
    }
};
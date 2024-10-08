class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int n = nums.size();
        int i = 0, j = 0, sum = nums[0];
        int len = INT_MAX;
        while (i < n && j < n) {
            if (sum < target && j < n) {
                j++;
                if (j < n) {
                    sum = sum + nums[j];
                }

            } else if (sum >= target) {
                len = min(len, j - i + 1);
                sum = sum - nums[i];
                i++;
            }
        }
        return len == INT_MAX ? 0 : len;
    }
};
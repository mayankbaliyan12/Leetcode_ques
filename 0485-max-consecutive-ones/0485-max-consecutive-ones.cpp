class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int count_1 = 0, total_count = 0;
        int n = nums.size();
        for (int i = 0; i < n; i++) {
            if (nums[i] == 1) {
                count_1++;
            } else {
                count_1 = 0;
            }
            total_count = max(count_1, total_count);
        }
        return total_count;
    }
};
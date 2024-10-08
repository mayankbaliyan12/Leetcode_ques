class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int n = nums.size();
        int target = n / 2;
        int candidate = nums[0];
        int count = 0;
        int l = 0;

        for (int i = 0; i < n; i++) {
            if (nums[i] == candidate) {
                count++;
            } else {
                count--;
            }
            if (count == 0) {
                candidate = nums[i];
                count = 1;
            }
        }
        for (int i = 0; i < n; i++) {
            if (nums[i] == candidate) {
                l++;
            }
            if (l > target) {
                return candidate;
            }
        }
        return -1;
    }
};
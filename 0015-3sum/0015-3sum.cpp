class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        int n = nums.size();
        vector<vector<int>> result;
        set<vector<int>> s;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; i++) {
            int low = i + 1;
            int high = n - 1;

            while (low < high) {
                if (nums[i] + nums[low] + nums[high] == 0) {
                    s.insert({nums[i], nums[low], nums[high]});
                    low++;
                    high--;
                } else if (nums[i] + nums[low] + nums[high] < 0) {
                    low++;
                } else {
                    high--;
                }
            }
        }
        result.assign(s.begin(), s.end());
        return result;
    }
};
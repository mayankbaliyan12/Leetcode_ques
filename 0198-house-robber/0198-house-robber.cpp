class Solution {
public:
    int rob(vector<int>& nums) {
        int incl = 0,excl = 0;
        for(int i=0;i<nums.size();i++){
            int excl_new = incl;
            incl = excl + nums[i];
            excl = max(excl, excl_new);
        }
        return max(incl,excl);
    }
};
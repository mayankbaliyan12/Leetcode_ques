class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int n=nums.size();
        int low=0;
        for(int i=0;i<n;i++)
        {
            if(nums[i]!=val)
            {
                nums[low]=nums[i];
                low++;
            }
        }
        return low;  
    }

};
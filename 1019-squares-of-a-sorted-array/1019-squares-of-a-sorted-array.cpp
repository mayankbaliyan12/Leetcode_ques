class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        int n=nums.size();
        int low=0;
        int i=n-1; 
        int high=n-1;
        vector<int> result(n); 

        while(low<=high)
        {
            if(abs(nums[low])>abs(nums[high]))
            {
                result[i--]=nums[low]*nums[low];
                low++;
            }
            else
            {
                result[i--]=nums[high]*nums[high];
                high--;
            }
        }
        return result;
    }
};
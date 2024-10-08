class Solution {
public:
    int smallestDivisor(vector<int>& nums, int threshold) {
        int n=nums.size();
        int low=1;
        int ele=0;
        int high=*max_element(nums.begin(),nums.end());
        while(low<=high)
        {
            int mid=low+(high-low)/2;
            int small=find(nums,mid);

            if(small<=threshold){
                ele=mid;
                high=mid-1;
            }
            else{
                low=mid+1;
            }
        }
        return ele;
    }
    int find(vector<int>& nums, int mid){
        int n=nums.size();
        int ele=0;
        for(int i=0;i<n;i++)
        {
            ele = ele + (nums[i] + mid - 1) / mid;
        }
        return ele;
    }
};
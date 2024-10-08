class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        int n=nums.size();
        vector<int> prefixProduct(n);
        vector<int> suffixProduct(n);
        vector<int> product(n);

        prefixProduct[0]=1;
        for(int i=1;i<n;i++)
        {
            prefixProduct[i]=prefixProduct[i-1]*nums[i-1];
        }
        suffixProduct[n-1]=1;
        for(int i=n-2;i>=0;i--)
        {
            suffixProduct[i]=suffixProduct[i+1]*nums[i+1];
        }
        for(int i=0;i<n;i++)
        {
            product[i]=prefixProduct[i]*suffixProduct[i];
        }
        return product;

    }
};
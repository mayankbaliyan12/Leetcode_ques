class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n = nums.size();
        vector<int> left(n);
        vector<int> right(n);
        int result = nums[0];

        int product = 1;
        for (int i = 0; i < n; i++) {
            product = product * nums[i];
            left[i] = product;
            result = max(result, product);
            if (product == 0)
                product = 1;
        }
        product = 1;
        for (int i = n - 1; i > 0; i--) {
            product = product * nums[i];
            right[i] = product;
            result = max(result, product);
            if (product == 0)
                product = 1;
        }

        return result;
    }
};
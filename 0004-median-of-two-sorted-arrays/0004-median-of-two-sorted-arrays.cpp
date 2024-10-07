class Solution {
public:
    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
        int n1 = nums1.size();
        int n2 = nums2.size();
        int n = n1 + n2;
        int low = 0;
        int high = n1;

        if (n1 > n2) {
            return findMedianSortedArrays(nums2, nums1);
        }

        while (low <= high) {

            int mid = low + (high - low) / 2;
            int l1 = (mid == 0) ? INT_MIN : nums1[mid - 1];
            int l2 = (n / 2 - mid == 0) ? INT_MIN : nums2[(n / 2) - mid - 1];
            int r1 = (mid == n1) ? INT_MAX : nums1[mid];
            int r2 = (n / 2 - mid == n2) ? INT_MAX : nums2[n / 2 - mid];

            if (l1 <= r2 && l2 <= r1) {
                if (n % 2 == 0) {
                    return ((max(l1, l2) + min(r1, r2)) / 2.0);
                } else {
                    return (min(r1, r2));
                }
            } else if (l1 >= r2) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return 0;
    }
};
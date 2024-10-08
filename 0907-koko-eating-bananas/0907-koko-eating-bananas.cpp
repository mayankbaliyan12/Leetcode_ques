class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int n = piles.size();
        int low = 1;
        long long int hour;
        // int high=max(piles.begin(),piles.end());
        long long int high = *max_element(piles.begin(), piles.end());
        while (low <= high) {
            long long int mid = low + (high - low) / 2;
           long long  int Rhour = find(piles, mid);

            if (Rhour <= h) {
                hour = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return hour;
    }
    long long int find(vector<int>& piles, int mid) {
        int n = piles.size();
        long long int hour = 0;
        for (int i = 0; i < n; i++) {
            hour = hour + (piles[i] + mid - 1) / mid;
        }
        return hour;
    }
};
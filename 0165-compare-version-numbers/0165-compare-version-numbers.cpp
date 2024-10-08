class Solution {
public:
    int compareVersion(string version1, string version2) {
        int l1 = version1.size();
        int l2 = version2.size();
        int n1 = 0;
        int n2 = 0;
        int i = 0, j = 0;
        for (; i < l1 || j < l2; i++, j++) {
            while(i<l1 && version1[i]!='.'){
                n1 = n1 * 10 + (version1[i] - '0');
                i++;
            }
            while(j<l2 && version2[j]!='.'){
                n2 = n2 * 10 + (version2[j] - '0');
                j++;
            }
            if (n1 < n2) {
                return -1;
            }
            if (n1 > n2) {
                return 1;
            }
            n1 = 0;
            n2 = 0;
        }
        return 0;
    }
};

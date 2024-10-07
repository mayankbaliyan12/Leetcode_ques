class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty())
            return "";
        int n = strs[0].size();
        int l = strs.size();
        int i = 0;
        string result;
        while (i < n) {
            char common = strs[0][i];
            for (int j = 0; j < l; j++) {
                if (strs[j][i] != common) {
                    return result;
                }
            }
            result = result + common;
            i++;
        }
        return result;
    }
};
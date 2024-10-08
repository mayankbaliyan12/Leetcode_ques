class Solution {
public:
    string reverseWords(string s) {
        s.erase(0, s.find_first_not_of(' '));
        s.erase(s.find_last_not_of(' ') + 1);
        int n = s.size();
        string temp;
        string result;
        for (int i = n - 1; i >= 0; i--) {
            if (s[i] != ' ') {
                temp = s[i] + temp;
            } else if (s[i - 1] != ' ') {
                result = result + temp + " ";
                temp = "";
            }
        }
        return result + temp;
    }
};
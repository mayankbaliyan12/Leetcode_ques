class Solution {
public:
    string removeOuterParentheses(string s) {
        int n=s.size();
        int count=0;
        string str;
        for(int i=0;i<n;i++)
        {
            if(count!=0)
            {
                str=str+s[i];
            }
           
            if(s[i]=='('){
               count++;
            }
            else{
                count--;
            }
             if(count==0)
            {
                str=str.substr(0,str.size()-1);
            }

        }
        return str;
    }
};
class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        map<int,int> mp;
        vector<int> duplicates;

        for(int value : nums){
            if(mp.find(value)==mp.end()){
                mp[value]=1;
            }
            else{
                mp[value]++;
                if(mp[value]==2){
                    duplicates.push_back(value);
                }
            }
        }
        return duplicates;
    }
};
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int[] prev = new int[128];
        int left = 0,max = 0;
        for(int i = 0;i < s.length(); ++i){
            if(prev[s.charAt(i)] > left){
                left = prev[s.charAt(i)];
            }
            prev[s.charAt(i)] = i + 1;
            if(max <= i - left + 1){
                max = i - left + 1;
            }
        }
        return max;
    }
}

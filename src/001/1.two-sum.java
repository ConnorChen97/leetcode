import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap();
        int num = 0;
        for(int i = 0; i <= nums.length; i ++){
            num = nums[i];
            if(map.containsKey(num)){
                return new int[]{map.get(num), i};
            }
            map.put(target - num, i);
        }
        return null;
    }
}

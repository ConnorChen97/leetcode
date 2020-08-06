import java.util.Deque;
import java.util.LinkedList;

/*
 * @lc app=leetcode.cn id=71 lang=java
 *
 * [71] 简化路径
 */

// @lc code=start
class Solution {
    public String simplifyPath(String path) {
        String[] paths = path.split("/");
        Deque<String> stack = new LinkedList<>();
        for (String p : paths) {
            if ("..".equals(p) ) {
                if (!stack.isEmpty()) {
                    stack.pop();
                }
                continue;
            } else if (!".".equals(p) && !"".equals(p)) {
                stack.push(p);
            }
        }
        String result = "";
        int length = stack.size();
        for (int i = 0; i < length; i++) {
            result += "/" + stack.removeLast();
        }
        if ("".equals(result)) {
            result = "/";
        }
        return result;
    }

}
// @lc code=end


import java.util.Stack;

/*
 * @lc app=leetcode.cn id=150 lang=java
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
class Solution150 {
    public int evalRPN(String[] tokens) {
        Stack<Integer> stack = new Stack<>();
        int result = 0;
        for (String token : tokens) {
            if ("+".equals(token) || "-".equals(token) || "*".equals(token) || "/".equals(token)) {
                if (stack.size() < 2) {
                    return -1;
                }
                int b = stack.pop();
                int a = stack.pop();
                if ("+".equals(token)) {
                    result = a + b;
                    stack.push(result);
                    continue;
                }
                if ("-".equals(token)) {
                    result = a - b;
                    stack.push(result);
                    continue;
                }
                if ("*".equals(token)) {
                    result = a * b;
                    stack.push(result);
                    continue;
                }
                if ("/".equals(token)) {
                    result = a / b;
                    stack.push(result);
                    continue;
                }
            } else {
                if (stack.isEmpty()) {
                    result = Integer.valueOf(token);
                }
                stack.push(Integer.valueOf(token));
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(new Solution150().evalRPN(new String[]{"4","3","-"}));
    }
}
// @lc code=end




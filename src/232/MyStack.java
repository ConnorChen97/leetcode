import java.util.Stack;

/*
 * @lc app=leetcode.cn id=232 lang=java
 *
 * [232] 用栈实现队列
 */

// @lc code=start
class MyQueue {

    Stack<Integer> stack1;
    Stack<Integer> stack2;

    /** Initialize your data structure here. */
    public MyQueue() {
        stack1 = new Stack<>();
        stack2 = new Stack<>();
    }
    
    /** Push element x to the back of queue. */
    public void push(int x) {
        stack1.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    public int pop() {
        int length = stack1.size();
        for (int i = 0;i < length; i++) {
            stack2.push(stack1.pop());
        }
        int temp = stack2.pop();
        for (int i = 0;i < length - 1; i++) {
            stack1.push(stack2.pop());
        }
        return temp;
    }
    
    /** Get the front element. */
    public int peek() {
        int length = stack1.size();
        for (int i = 0;i < length; i++) {
            stack2.push(stack1.pop());
        }
        int temp = stack2.peek();
        for (int i = 0;i < length; i++) {
            stack1.push(stack2.pop());
        }
        return temp;
    }
    
    /** Returns whether the queue is empty. */
    public boolean empty() {
        return stack1.isEmpty();
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */
// @lc code=end


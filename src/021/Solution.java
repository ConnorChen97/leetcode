class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode(-1);
        ListNode headPoint = head;
        while (list1 != null && list2 != null) {
            if (list1.val > list2.val) {
                headPoint.next = list2;
                list2 = list2.next;
            } else {
                headPoint.next = list1;
                list1 = list1.next;
            }
            headPoint = headPoint.next;
        }
        if (list1 != null) {
            headPoint.next = list1;
        }
        if (list2 != null) {
            headPoint.next = list2;
        }

        return head.next;
    }
}
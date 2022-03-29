import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

public class Trie {

    public static void main(String[] args) {

    }

}

class Node {
    Character value;
    List<Node> children;

    public Node(Character value) {
        this.value = value;
        this.children = new ArrayList<>();
    }

    public Node(Character value, List<Node> children) {
        this.value = value;
        this.children = children;
    }

    public Node addChild(Character character, Boolean overwrite) {
        Node child = this.contains(character);
        if (child == null) {
            Node node = new Node(character);
            children.add(node);
            return node;
        } else if (overwrite != null && overwrite) {
            child.value = character;
        }
        return child;
    }

    private Node contains(Character character) {
        for (Node child : children) {
            if (child.getValue() == character) return child;
        }
        return null;
    }

    public Character getValue() {
        return value;
    }

    public void setValue(Character value) {
        this.value = value;
    }
}
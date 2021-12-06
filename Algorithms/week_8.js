
class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
// print out the SLL
    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }

    reverseSSL() {
        if (this.head.next == null) {
            return false
        }
        var runner = this.head;
        var previous = null;
        while (runner != null) {
            var temp = runner.next;
            runner.next = previous;
            previous = runner;
            runner = temp;
        }
        this.head = previous;
        return this
    }
}
sl1 = new SLL()
sl1.addToFront(5).addToFront(8).addToFront(12).addToFront(21).addToFront(3).display();
sl1.reverseSSL().display();
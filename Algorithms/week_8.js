
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


//  Tuesday

class Node {
    constructor(val) {
        this.val = val;
        this.next = null; // node (.val, .next)
        //THIS IS NEW
        this.child = null; // SLL (.head)
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
    }

    printMe() {
        let returnStr = '';
        let runner = this.head;
        while (runner != null) {
            returnStr += `${runner.val} -> `;
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    //populates each node with a random amount of children from 0 to 4
    populateChildren() {

        let runner = this.head;

        while (runner !== null) {
            let numChildren = Math.floor(Math.random() * 5);
            if (numChildren !== 0) {
                let childList = new SLL();
                for (let i = 0; i < numChildren; ++i) {
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    printMeWithChildren() {
        let returnStr = '';
        let runner = this.head;
        while (runner != null) {
            returnStr += `${runner.val}`;
            if (runner.child) {
                returnStr += "(";
                let runner2 = runner.child.head;
                while (runner2 !== null) {
                    returnStr += `${runner2.val} ->`;
                    runner2 = runner2.next;
                }
                returnStr += ")";
            }
            returnStr += " -> ";
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    // r  r        .  .  .
    // 1->2        3->4->5-> 
    //    |       |
    //    |.  . .|
    //    6->7->8

    // val: 2
    // child: node(6, node(7, ...))
    // next: node(3, node(4, ...))

    /*
        For this method(and this list), each node has .next, but also
        .child that is either null or points to another SLL. In turn,
        each child node could point to another list. Don't alter .child;
        arrange .next pointers to "flatten" the hierarchy into one linear
        list, from head through all others via .next
    */
    flattenChildren() {
        let runner = this.head;
        let parent_runner;
        while (runner.next != null) {
            if (runner.child != null) {
                temp = runner.next
                runner.child.head = runner.next
                runner.next = runner.child.head
                runner = runner.next
            }
            runner.next = temp
            temp = null
        }
    }
}

let newList = new SLL();
newList.addToFront(1);
newList.addToFront(2);
newList.addToFront(3);
newList.addToFront(4);
newList.addToFront(5);
newList.populateChildren();
newList.printMeWithChildren();
newList.flattenChildren();
newList.printMe();



// You have a 3-gallon and a 5-gallon jug that you can fill from a fountain of water.
// The problem is to fill one of the jugs with exactly 4 gallons of water. How do you do it?





// This “burning rope” problem is a classic logic puzzle. You have two ropes that each take an hour to burn,
//  but burn at inconsistent rates. How can you measure 45 minutes?



// There are three boxes, one contains only apples, one contains only oranges, 
// and one contains both apples and oranges. The boxes have been incorrectly 
// labeled such that no label identifies the actual contents of its box. 
// Opening just one box, and without looking in the box, you take out one piece of fruit. 
// By looking at the fruit, how can you immediately label all of the boxes correctly?


// Thursday algorithm

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        return this;
    }


    addToBack(value) {
        var node = new Node(value);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }


    printList() {
        var runner = this.head
        while (runner) {
            console.log(runner.value);
            runner = runner.next
        }
    }
}

dookie = new DLL();
dookie.addToFront(5).addToFront(6).addToFront(7).printList();
dookie.addToBack(8).addToBack(9).addToBack(10).printList();



// Friday


class DLL {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0;
    }

    addToFront(value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++
        return this
    }

    addtoBack(value) {
        var node = new Node(value);
        if (!this.tail) {
            this.tail = node;
            this.head = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
        return this
    }

    removeFromFront() {
        if (this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
    }

    removeFromBack() {
        if (this.head) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            console.log("Nie mame list")
            return this;
        }
    }

    printList() {
        var runner = this.head
        while (runner) {
            console.log(runner.value);
            runner = runner.next
        }
    }
    printListBackwards() {
        var runner = this.tail;
        while (runner) {
            console.log(runner.value);
            runner = runner.prev;
        }
    }


// Tuesday

class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    // Inserts a value into the tree
    // positioning based on it's value.
    add(value) {
        let newNode = new BSTNode(value);
        if (this.root == null) {
            this.root = newNode;
        }
        let runner = this.root;
        const addSide = side => {
            if (!runner[side]) {
                runner[side] = newNode;
                return this;
            };
            runner = runner[side];
        };

        while (true) {
            if (value === runner.value) {
                return this;
            };
            if (value < runner.value) addSide('left');
            else addSide('right');
        };
    }

    findMin() {
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left
            
        }
        console.log("The min is " + runner.value)
        return runner
    }

    findMax() {
        var runner = this.root;
        while(runner.right != null){
            runner = runner.right
        }
        console.log("The max is " + runner.value)
        return runner
    }

printTree(node) {
        console.log("Current node = ", node.value);
        if (node.left != null) {
            console.log("Left node of ", node.value, " = " + node.left.value);
            this.printTree(node.left);
        }
        if (node.right != null) {
            console.log("Right node of ", node.value, " = " + node.right.value);
            this.printTree(node.right);
        }
    }
}

let newBST = new BST();
newBST.add(35);
newBST.add(1);
newBST.add(25);
newBST.add(55);
newBST.add(45);
newBST.printTree(newBST.root);
newBST.findMin(newBST.root);
newBST.findMax(newBST.root);
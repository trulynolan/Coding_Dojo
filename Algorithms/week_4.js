// Singly Linked Lists - Contain nodes with a beginning (head) node and they have an order and end with a tail node
// --the head node and tail node are both set to null when the list is empty
// They are unlike arrays because the nodes don't have index positions, they just point to each other anywhere in memory
// --inserting and deleting items in SLL is faster since you don't have to shift every item like you would have to in an array
// It's like destinations to get somewhere on a map, the locations can be all over the place but they are connected
// You have to know where the start (head) is and where we end (tail) and all the stops in-between (the other nodes)
// The head and tail node can be any of the nodes you define, they are just marked as the head/tail
// Other example: conga-line: people (nodes), 1st person (head), last person (tail)
// Other example: train: boxcars (nodes), 1st car in train (head), last boxcar (tail)

// This is the class that will be creating the node instances that we will connect together  
// Each node will have a value and a next property so we know which node it's connected to
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Here's an example of the nodes being created and adding nodes to them in a certain order (uncomment to see):
var disney = new ListNode("Disneyland");
console.log(disney)

var vegas = new ListNode("Las Vegas");
disney.next = vegas;
console.log(disney)

var yellow = new ListNode("Yellowstone");
vegas.next = yellow;
console.log(disney);


//this class will take the nodes we create using the ListNode class and link them all together in a list 
//by assigning head, tail, and next properties to the nodes
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Use addToFront(value) to add a node with the received value to the head (beginning) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the head of the list
    // 3. Set it to be the new head
    addToFront(value) {
        var new_node = new ListNode(value);

        // if list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        // otherwise
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    // Use addToBack(value) to add a node with the received value to the tail (end) of the list
    // Steps:
    // 1. Create a new node 
    // 2. Attach the new node to the tail of the list 
    // 3. Set it to be the new tail
    addToBack(value) {

    }

    // Use containes(value) to return true if value received is in the linked list, as a node value, or return false
    // Steps: 
    // 1. Create a runner that starts at the head
    // 2. While loop that goes until the runner encounters null 
    // 3. If we find the value in one of the nodes, return true
    // 4. If we don't go to the next node using runner.next()
    contains(value) {

    }

    // Use display() to return a string with the value of every node from the linked list 
    // Example: After adding to front and back it could look something like this (this is just an example):
    //          "Disneyland" - "Las Vegas" - "Yellowstone" - "Mount Rushmore" - "Gateway Arch"
    // I've given this to you so you can use it to test and it will help you with the contains method as well (:
    display() {
        if (this.head == null) { //handles the edge case of an empty list
            return null;
        }

        var values = this.head.value; // this will hold all the values of the list, starting with the first node's value
        var runner = this.head.next; //  holds the next item in the list since we know it's not empty

        while (runner != null) { // as long as the current node we are on isn't empty keep going!
            values += " - " + runner.value; // take the current node's value and put it into values
            runner = runner.next; // set runner to the next node, this is what makes us go through the list
        }

        return values; // returns the values of all the nodes in the list
    }
}
... (20 lines left)


// Today we will be removing the front and back nodes of the SLL using the functions found at the bottom

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    addToBack(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
    contains(target) {
        var runner = this.head;

        while (runner != null) {
            if (runner.value == target) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    display() {
        if (this.head == null) {
            return null;
        }
        var values = this.head.value;
        var runner = this.head.next;

        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }
        return values;
    }

    // Use removeFront() to remove the head of the linked list and return its value
    // HINTS: 
    // this needs to be in a certain order, what would happen if you set this.head's value to null first?
    // or what would happen if you only set the new head and that's it?  
    // this.head's value needs to change
    // The connection between the old head and new head needs to be severed
    // You may want to save the current head into a temporary variable and then do your magic
    // If you get done early try and handle the edge cases if the linked list only has one or zero nodes

    removeFront() {
        ar temp = this.head;
        this.head = this.head.next;
        temp.next = null;
    }

    // Use removeBack() to remove the tail of the linked list and return its value
    // HINTS: 
    // Think about how can we get to the end of the list and how can we tell which one is the 2nd to last?
    // This needs to be in a certain order as well
    // Save the value of the old tail so you can return it  
    // A new tail should be marked
    // The connection between the old tail and new tail needs to be severed
    // You may want to save the current tail into a temporary variable and then do your magic
    // If you get done early try and handle the edge cases if the linked list only has one or zero nodes

    removeBack() {
        var runner = this.head;
        while (runner.next.next) {
            runner = runner.next;
        }
        this.tail = runner;
        this.tail.next = null;
    }
}

var new_sll = new SinglyLinkedList();
new_sll.addToBack("Disneyland");
new_sll.addToBack("Las Vegas");
new_sll.addToBack("Mount Rushmore");
new_sll.addToBack("Times Square");
console.log(new_sll.display());

... (7 lines left)



// Day 3

moveMinToFront() {
    var runner = this.head.next;
    var creeper = this.head;
    var min = this.head;
    var before_min = this.head;
    while (runner != null) {
        if (runner.value < min.value) {
            min = runner;
            before_min = creeper;
        }
        runner = runner.next;
        creeper = creeper.next;
    }
    before_min.next = min.next;
    min.next = this.head;
    this.head = min;
    return min
}

moveMaxToBack(){
    var max = this.head
    var creeper
    let runner = this.head
    while (runner.next != null) {
        if (runner.next.value > max.value) {
            max = runner.next
            creeper = runner
        }
        runner = runner.next
    }
    if (max == runner) {
        console.log("the max is already at the back!")
        return
    }

    if (max == this.head) {
        this.head = this.head.next
    }

    creeper.next = max.next
    max.next = null
    runner.next = max
}




// Day 4

//Use appendValue(loc,value) to receive a location in the list and a value
//Add that value AFTER the location
//EXAMPLE: appendValue(2,"Las Vegas") - will add a node with a value of "Las Vegas" AFTER the 2nd node, making it the 3rd
//HINTS: You'll need a way to see when you've arrived at that location.  Some sort of counter maybe? (:
//Once the runner has arrived, attach the node's next property to the runner's next
//Then attach the runner's next property to the node you just placed into the list
appendValue(loc, value){
    var runner = this.head
    var location = 1
    while (runner.next != null) {
        runner = runner.next
        location += 1
        if (location = loc) {
            var fomo = runner.next
            runner.next = value
            value.next = fomo
        }
    }
    return
}

//     //Use prependValue(loc,value) to receive a location in the list and a value
//     //Add that value BEFORE the location
//     //EXAMPLE: prependValue(2,"Las Vegas") - will add a node with a value of "Las Vegas" BEFORE the 2nd node, making it the 1st
//     //HINTS: You'll need a way to see when you've arrived one node before the location
//     //Once the runner has arrived one before, attach the node's next property to the runner's next
//     //Then attach the runner's next property to the node you just placed into the list
//     prependValue(loc,value){

//     }
// }

appendValue(loc, value) {
    var new_node = new ListNode(value);

    if (this.head === null) {
        this.head = new_node;
    }
    let counter = 1;
    let currNode = this.head;
    while (currNode.next != null && counter < loc) {
        currNode = currNode.next;
        counter++;
    }
    new_node.next = currNode.next;
    currNode.next = new_node;
    return new_node;
}


prependValue(loc, value) {
    var new_node = new ListNode(value);

    if (this.head === null) {
        this.head = new_node;
    }
    var counter = 1;
    var currNode = this.head;
    while (currNode.next != null && counter < loc - 1) {
        currNode = currNode.next;
        counter++;
    }
    new_node.next = currNode.next;
    currNode.next = new_node;
    return new_node;
}
}


var new_sll = new SinglyLinkedList();
new_sll.addToBack("Disneyland");
new_sll.addToBack("Las Vegas");
new_sll.addToBack("Grand Canyon");
new_sll.addToBack("Times Square");
new_sll.addToBack("Mount Rushmore");
console.log(new_sll.display());

new_sll.appendValue(3, "Universal Studios")
console.log(new_sll.display());

new_sll.prependValue(3, "Smithsonian")
console.log(new_sll.display());


// Use findMinNode() to find the node in the linked list with the lowest value
// Return the node ITSELF, not its value 
// If you find two or more nodes tied for that value, return the first one you find
findMinNode(){
    var min = this.head
    var runner = this.head

    while (runner.next != null) {
        if (runner.next.value < min.value) {
            min = runner.next
        }
        runner = runner.next
    }
    return min
}

//     // Use findMaxNode() to find the node in the linked list with the highest value
//     // Return the node ITSELF, not its value
//     // if you find two or more nodes tied for that value, return the first one you find
//     findMaxNode(){
findMaxNode(){
    var max = this.head
    var runner = this.head

    while (runner.next != null) {
        if (runner.next.value > max.value) {
            max = runner.next
        }
        runner = runner.next
    }
    return maxx
}
//     }

//     // Use secondToLast() to return the VALUE of the second-to-last node in the linked list
//     // HINTS: You could do this with or without a tail.  Choose whichever (:
//     // Edge Case: What should you do if the list has less than two nodes?
secondToLast(){
    var runner = this.head
    while (runner.next != this.tail) {
        runner = runner.next
    }
    return runner
}
//    }
// 


var new_sll = new SinglyLinkedList();
new_sll.addToBack(52);
new_sll.addToBack(32);
new_sll.addToBack(88);
new_sll.addToBack(12);
new_sll.addToBack(18);
new_sll.addToBack(22);
new_sll.addToBack(32);
console.log(new_sll.display());

console.log(new_sll.findMinNode())
console.log(new_sll.findMaxNode())
console.log(new_sll.secondToLast())


findMinNode(){
    var min = this.head
    var runner = this.head

    while (runner.next != null) {
        if (runner.next.value < min.value) {
            min = runner.next
        }
        runner = runner.next
    }
    return min
}

findMaxNode(){
    var max = this.head
    var runner = this.head

    while (runner.next != null) {
        if (runner.next.value > max.value) {
            max = runner.next
        }
        runner = runner.next
    }
    return max
}

secondToLast(){
    var runner = this.head
    while (runner.next != this.tail) {
        runner = runner.next
    }
    return runner
}
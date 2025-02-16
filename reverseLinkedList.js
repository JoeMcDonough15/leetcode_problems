class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(val) {
    this.head = val !== undefined ? new Node(val) : null;
  }

  addToHead = (val) => {
    if (val === undefined) return;
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  };

  addToTail = (val) => {
    if (val === undefined) return;
    const newNode = new Node(val);
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  };

  removeFromHead = () => {
    if (!this.head) return;
    const nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    return nodeToRemove.val;
  };

  removeFromTail = () => {
    if (!this.head) return;
    if (!this.head.next) {
      const nodeToRemove = this.head;
      this.head = null;
      return nodeToRemove.val;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const nodeToRemove = currentNode.next;
    currentNode.next = null;
    return nodeToRemove.val;
  };
}

const myLinkedList = new LinkedList();

// console.log(myLinkedList);

myLinkedList.addToHead(5);

// console.log(myLinkedList);

myLinkedList.addToHead(4);
// console.log(myLinkedList);

myLinkedList.addToHead(3);

myLinkedList.addToTail(6);

const removedVal = myLinkedList.removeFromHead();
console.log(removedVal); // 3

const nextRemovedVal = myLinkedList.removeFromHead();
console.log(nextRemovedVal); // 4

const removedLastNode = myLinkedList.removeFromTail();
console.log(removedLastNode); // 6

// //10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value,
    this.next = null,
    this.prev = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    const newNode = new Node(value)
    let currentNode = this.head
    let loop = 1
    while(currentNode.next){
      const leader = currentNode
      currentNode = currentNode.next
      if(loop === index){
        newNode.next = currentNode
        leader.next = newNode
        this.length++;
        return this;
      }
      loop++;
    }
  }
  remove(index) {
    let currentNode = this.head
    let loop = 1
    
    while(loop !== index){
      currentNode = currentNode.next
      loop++;
    }
    currentNode.next = currentNode.next.next
  }


  printList() {
    const array = [];
    let currentNode =this.head;
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

}

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(6);
myLinkedList.append(12);

myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(4, 56);
myLinkedList.remove(1);

console.log(
  myLinkedList.printList(),
  // myLinkedList.head,
  // myLinkedList.head.next,
  // myLinkedList.head.next.next,
  // myLinkedList.head.next.next.next,
  // myLinkedList.tail,
  // myLinkedList.length
)

#!/usr/bin/env node

import LinkedList from "./linked-list.js";

const linkedList = LinkedList();

// Test append and prepend
linkedList.append(3);
linkedList.append(4);
linkedList.prepend(2);
linkedList.prepend(1);

// ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null
console.log(linkedList.toString());

// Test getHead, getTail and getSize
console.log(linkedList.getHead().value); // 1
console.log(linkedList.getTail().value); // 4
console.log(linkedList.getSize()); // 4

// Test pop and at
linkedList.append(5);

console.log(linkedList.at(4).value); // 4
console.log(linkedList.pop()); // popped node
console.log(linkedList.getSize()); // 4
console.log(linkedList.at(4)); // null

// ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> null
console.log(linkedList.toString());

// Test contains and find
console.log(linkedList.contains(5)); // false
console.log(linkedList.contains("4")); // false
console.log(linkedList.contains(3)); // true
console.log(linkedList.find(2)); // 1
console.log(linkedList.find(99)); // null

// Test insertAt and removeAt
linkedList.removeAt(-1);
linkedList.removeAt(4);

// ( 2 ) -> ( 3 ) -> null
console.log(linkedList.toString());

linkedList.insertAt(1, -1);
linkedList.insertAt(2, 1);
linkedList.insertAt(55, 55);

// ( 1 ) -> ( 2 ) -> ( 2 ) -> ( 3 ) -> ( 55 ) -> null
console.log(linkedList.toString());

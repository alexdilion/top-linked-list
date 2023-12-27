#!/usr/bin/env node

import Node from "./node.js";

const LinkedList = () => {
    let head = null;
    let tail = null;
    let size = 0;

    const getSize = () => size;
    const getHead = () => head;
    const getTail = () => tail;

    const append = (value) => {
        let node = Node(value);

        if (!head) {
            head = node;
        } else {
            tail.next = node;
        }

        tail = node;
        size += 1;
    };

    const prepend = (value) => {
        let node = Node(value);

        if (head) {
            node.next = head;
        } else {
            tail = node;
        }

        head = node;
        size += 1;
    };

    const at = (index) => {
        if (index >= size) return null;

        let i = 0;
        let node = head;
        while (i < index) {
            node = node.next;
            i += 1;
        }

        return node;
    };

    const pop = () => {
        let node = head;

        if (size <= 1) {
            head = null;
            tail = null;
            size = 0;

            return node;
        }

        let i = 0;
        while (i < size - 2) {
            node = node.next;
            i += 1;
        }

        let poppedNode = tail;
        tail = node;
        tail.next = null;
        size -= 1;

        return poppedNode;
    };

    const contains = (value) => {
        let node = head;
        while (node !== null && node.value !== value) {
            node = node.next;
        }

        return node !== null;
    };

    const find = (value) => {
        let node = head;
        let i = 0;
        while (node !== null && node.value !== value) {
            node = node.next;
            i += 1;
        }

        return i < size ? i : null;
    };

    const toString = () => {
        let listStr = "";
        let node = head;
        while (node !== null) {
            listStr += `( ${node.value} ) -> `;
            node = node.next;
        }

        return (listStr += "null");
    };

    const insertAt = (value, index) => {
        if (index <= 0) {
            prepend(value);
            return;
        } else if (index >= size) {
            append(value);
            return;
        }

        let currNode = head;
        // Get node that points to the node at index
        for (let i = 0; i < index - 1; i++) {
            currNode = head.next;
        }

        const newNode = Node(value);
        newNode.next = currNode.next;
        currNode.next = newNode;
        size += 1;
    };

    const removeAt = (index) => {
        if (index <= 0) {
            head = head.next;
            size -= 1;
            return;
        } else if (index >= size) {
            pop();
            return;
        }

        let node = head;
        // Get node that points to the node to be removed
        for (let i = 0; i < index - 1; i++) {
            node = node.next;
        }

        let toBeRemoved = node.next;
        node.next = toBeRemoved.next;
        toBeRemoved.next = null;
        size -= 1;
    };

    return {
        getSize,
        getHead,
        getTail,
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
        insertAt,
        removeAt,
    };
};

export default LinkedList;

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
            tail.setNext(node);
        }

        tail = node;
        size += 1;
    };

    const prepend = (value) => {
        let node = Node(value);

        if (head) {
            node.setNext(head);
        }

        head = node;
        size += 1;
    };

    const at = (index) => {
        if (index >= size) return null;

        let i = 0;
        let node = head;
        while (i < index) {
            node = node.getNext();
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
            node = node.getNext();
            i += 1;
        }

        let poppedNode = tail;
        tail = node;
        tail.clearNext();
        size -= 1;

        return poppedNode;
    };

    const contains = (value) => {
        let node = head;
        while (node !== null && node.getValue() !== value) {
            node = node.getNext();
        }

        return node !== null;
    };

    const find = (value) => {
        let node = head;
        let i = 0;
        while (node !== null && node.getValue() !== value) {
            node = node.getNext();
            i += 1;
        }

        return i < size ? i : null;
    };

    const toString = () => {
        let listStr = "";
        let node = head;
        while (node !== null) {
            listStr += `( ${node.getValue()} ) -> `;
            node = node.getNext();
        }

        listStr += "null";
        return listStr;
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
    };
};

export default LinkedList;

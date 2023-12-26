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
            tail.setPointer(node);
        }

        tail = node;
        size += 1;
    };

    const prepend = (value) => {
        let node = Node(value);

        if (head) {
            node.setPointer(head);
        }

        head = node;
        size += 1;
    };

    const at = (index) => {
        if (index >= size) return null;

        let i = 0;
        let node = head;
        while (i < index) {
            node = node.getPointer();
            i += 1;
        }

        return node;
    };

    return {
        append,
        prepend,
        at,
        getSize,
        getHead,
        getTail,
    };
};

export default LinkedList;

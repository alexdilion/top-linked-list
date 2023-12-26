#!/usr/bin/env node

import Node from "./node.js";

const LinkedList = () => {
    let head = null;
    let tail = null;

    const append = (value) => {
        let node = Node(value);

        if (!head) {
            head = node;
        } else {
            tail.setPointer(node);
        }

        tail = node;
    };

    const prepend = (value) => {
        let node = Node(value);

        if (!head) {
            head = node;
        } else {
            node.setPointer(head);
            head = node;
        }
    };

    return { append, prepend };
};

export default LinkedList;

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

    return { append };
};

export default LinkedList;

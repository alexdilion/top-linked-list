#!/usr/bin/env node

const Node = (initialValue = null) => {
    return {
        value: initialValue,
        next: null,
    };
};

export default Node;

#!/usr/bin/env node

const Node = (initialValue = null) => {
    let value = initialValue;
    let pointer = null;

    const getValue = () => value;
    const getPointer = () => pointer;

    const setValue = (newValue) => {
        value = newValue;
    };

    const setPointer = (nextNode) => {
        pointer = nextNode;
    };

    return {
        getValue,
        getPointer,
        setValue,
        setPointer,
    };
};

export default Node;

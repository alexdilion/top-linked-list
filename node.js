#!/usr/bin/env node

const Node = (initialValue = null) => {
    let value = initialValue;
    let pointer = null;
    let index = null;

    const getValue = () => value;
    const getPointer = () => pointer;
    const getIndex = () => index;

    const setValue = (newValue) => {
        value = newValue;
    };

    const setPointer = (nextNode) => {
        pointer = nextNode;
    };

    const setIndex = (newIndex) => {
        index = newIndex;
    };

    return {
        getValue,
        getPointer,
        getIndex,
        setValue,
        setPointer,
        setIndex,
    };
};

export default Node;

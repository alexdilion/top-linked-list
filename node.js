#!/usr/bin/env node

const Node = (initialValue = null) => {
    let value = initialValue;
    let next = null;

    const getValue = () => value;
    const getNext = () => next;

    const setValue = (newValue) => {
        value = newValue;
    };

    const setNext = (newPointer) => {
        next = newPointer;
    };

    const clearNext = () => {
        next = null;
    };

    return {
        getValue,
        getNext,
        setValue,
        setNext,
        clearNext,
    };
};

export default Node;

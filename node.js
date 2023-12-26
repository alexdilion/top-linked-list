#!/usr/bin/env node

const Node = () => {
    let value = null;
    let pointer = null;

    const getValue = () => value;
    const getPointer = () => pointer;

    const setValue = (newValue) => {
        value = newValue;
    };

    const setPointer = (newPointer) => {
        pointer = newPointer;
    };

    return {
        getValue,
        getPointer,
        setValue,
        setPointer,
    };
};

export default Node;

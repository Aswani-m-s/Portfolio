import React, { useState, useEffect } from "react";

const TextChange = () => {
    const texts = [
        "Hi, I'm Aswani MS",
        "MERN Stack Developer",
        "Welcome to my Portfolio",
    ];

    const [endValue, setEndValue] = useState(0);
    const [isForward, setIsForward] = useState(true);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isForward) {
                setEndValue((prev) => prev + 1);
            } else {
                setEndValue((prev) => prev - 1);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [isForward]);

    useEffect(() => {
        if (endValue > texts[index].length + 5) {
            setIsForward(false);
        }

        if (endValue < 0) {
            setIsForward(true);
            setIndex((prev) => (prev + 1) % texts.length);
            setEndValue(0);
        }
    }, [endValue, index]);

    return (
        <span>
            {texts[index].substring(0, endValue)}
            <span className="animate-pulse">|</span>
        </span>
    );
};

export default TextChange;
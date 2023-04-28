import React, { useEffect, useState } from 'react';

const words = ['motivé', 'curieux', 'disponible', 'autonome', 'dévelopeur web', 'développeur front-end', 'développeur back-end', 'développeur fullstack', 'développeur junior'];

const TypeWriter = () => {
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (index < words[wordIndex].length) {
                    setText(text + words[wordIndex][index]);
                    setIndex(index + 1);
                } else {
                    setTimeout(() => {
                        setWordIndex((wordIndex + 1) % words.length);
                        setIsDeleting(true);
                        setIndex(0)
                        setText(text.slice(0, text.length - 1))
                    }, 1200)
                }
            } else {
                if (text.length > 0) {
                    setText(text.slice(0, text.length - 1))
                } else {
                    setText(text + words[wordIndex][index]);
                    setIndex(index + 1);
                    setIsDeleting(false);
                }
            }
        }, Math.floor(Math.random() * (50 - 30) + 30));
        return () => clearTimeout(timer);
    }, [index, isDeleting, text, wordIndex]);
    return (
        <>{text}</>
    )
};




export default TypeWriter;



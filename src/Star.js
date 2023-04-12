import React from 'react';
import { useState, useEffect, useRef } from 'react';

export default function Star(props){
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const style = {
        position: 'absolute',
        top: top + 'px',
        left: left + 'px',
        fontSize: '2rem',
        color: 'white',
    };

    useEffect(() => {
        const newTop = Math.floor(Math.random() * (props.height - 40)) + 20;
        const newLeft = Math.floor(Math.random() * (props.width - 40)) + 20;
        setTop(newTop)
        setLeft(newLeft)
    }, [props.height, props.width])

    return(

            <p style={style}>*</p>
    )
}
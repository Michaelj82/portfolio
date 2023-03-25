import React from 'react';
import { useState, useEffect } from 'react';

export default function Star(props){
    const [location, setLocation] = useState({wide:0, tall:0})

    useEffect(() => {
        location.wide = Math.floor(Math.random(0, props.width))
        location.tall = Math.floor(Math.random(0, props.height))
        console.log(props.width)

    }, [])


    return(
        <div className='star' style={{left: location.wide, top: location.tall}}>
            asdf
        </div>
    )
}
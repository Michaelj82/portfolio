import React, { useCallback } from 'react';
import Navbar from './Navbar';
import {useState, useEffect, useRef, createRef} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './style.css'
import Star from './Star'


function Homepage (){
    const introRef = useRef(null)
    const [introWidth, setIntroWidth] = useState(0)
    const [introHeight, setIntroHeight] = useState(0)

    useEffect(()=>{
        setIntroWidth(introRef.current.offsetWidth)
        setIntroHeight(introRef.current.offsetHeight)
    }, [])

    return(
        <div id={'site'}>
            <Navbar></Navbar>
            <div id='intro' ref={introRef}>
                width:{introWidth}
                height:{introHeight}
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>
            <Star width={introWidth} height={introHeight}></Star>



            </div>

            <div id='description'>
            about me
            </div>

            <div id='skills'>
            skills
            </div>


            <div id='projects'>

                <div className={'element'}>
                    project1
                </div>
                
                <div className={'element'}>
                project2

                </div>
                <div className={'element'}>
                project3
                    </div>
                <div className={'element'}>
                project4
                </div>
                
                <div className={'element'}>
                project5

                </div>
                <div className={'element'}>
                project6
                    </div>
            </div>

        <div id='contactme'>
        contact me
        </div>

        <footer id='footer'>
            footer
        </footer>
        
        </div>
    )

}

export default Homepage
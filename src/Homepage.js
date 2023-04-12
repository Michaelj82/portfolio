import React, { useCallback } from 'react';
import Navbar from './Navbar';
import {useState, useEffect, useRef, createRef} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './style.css'
import Star from './Star'
import me from './images/me.jpg'

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
                <h2 className='nameHeader'>Michael Johnson</h2>
                <svg viewBox='0 0 105 105'>
                    
                    <path d='M 25, 60
                            a 20, 20 1 0, 0 0, 40
                            h 50
                            a 20, 20 1 0, 0 0, -40
                            a 10, 10 1 0, 0 -15, -10
                            a 15, 15,1 0,0 -35,10
                            z'/>

                    
                    <text x = "50%" y="60%" textAnchor='middle' dominantBaseline={'middle'} className={'cloudText'}>
                        <tspan x="40%" dy ="10%"className='cloudText'>Self-taught programmer with</tspan>
                        <tspan x="45%" dy ="11%"className='cloudText'>aspirations in Data and Web Development</tspan>

                    </text>
                </svg>




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
                <div><h4>About Me</h4></div>
                <div id='descriptionInfo'>{"\n"}

                    <div className='descriptionText'>Graduating in 2023 with a Bachelors in Economics and Minors in Spanish and Anthropology. {"\n"}
                    During my college career I was very studious and ensured academic success. However, outside of that, I discovered a new passion: coding. Throughout my time in school I have taught myself Python (with an emphasis on Data-driven modules) and JavaScript/ReactJS. I am proud of how far I have come and wish to pursue an opportunity which lets me take advantage of my skills and learn more in this field.
                    </div>
                    <div className='profilePic'>
                        <img src={me}></img>

                    </div>
                </div>
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
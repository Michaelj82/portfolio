import React from 'react';
import {useState, useEffect} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './style.css'

export default function Homepage (){
    

    return(
        <div id={'site'}>
            <header id={'header'}>
                <div className='link'>
                <Link
                    activeClass='active'
                    to='intro'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={200}

                    >Home</Link>
                </div>
                <div className='link'>
                <Link
                    activeClass='active'
                    to='description'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={200}

                    >About Me!</Link>
                </div>
                <div className='link'>
                <Link
                    activeClass='active'
                    to='skills'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={200}

                    >Skills</Link> 
                </div>
                <div className='link'>
                <Link
                    activeClass='active'
                    to='projects'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={200}

                    >Projects</Link> 
                </div>
                <div className='link'>
                <Link
                    activeClass='active'
                    to='contactme'
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={200}

                    >Contact Me!</Link>
                </div>


            </header>
            <div id='intro'>
            intro


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
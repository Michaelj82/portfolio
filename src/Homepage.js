import React from 'react';
import Navbar from './Navbar';
import {useState, useEffect} from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'
import './style.css'

export default function Homepage (){
    

    return(
        <div id={'site'}>
            <Navbar></Navbar>
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
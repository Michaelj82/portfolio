import React from 'react';
import {useState, useEffect} from 'react'
import './style.css'

export default function Homepage (){
    const [typing, setTyping] = useState('')
    

    return(
        <div id={'site'}>
            <header id={'header'}>bruh bruh bruh 
                bruh bruh bruh</header>
            <div id='intro'>
            yo


            </div>

            <div id='description'>

            </div>

            <div id='skills'>

            </div>


            <div id='projects'>

                <div className={'element'}>
                    asdf
                </div>
                
                <div className={'element'}>
                    asdf

                </div>
                <div className={'element'}>
                    asdf
                    </div>
                <div className={'element'}>
                    adf
                </div>
                
                <div className={'element'}>
                    asdf

                </div>
                <div className={'element'}>
                    asdf
                    </div>
            </div>

        <div id='contactme'>

        </div>

        <footer id='footer'>
            
        </footer>
        
        </div>
    )

}
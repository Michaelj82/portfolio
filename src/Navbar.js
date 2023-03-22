import React from 'react'
import { Link } from 'react-scroll'
export default function Navbar(){

    return(
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
    )
}
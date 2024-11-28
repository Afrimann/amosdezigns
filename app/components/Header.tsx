import React from 'react'

const Header = () => {
  return (
    <header className='header' data-aos='fade-up '>
        {/* navlinks */}
        <nav className='header__nav'>
            <ul className='header__nav-links-container'>
                <li className='text-white header__nav-links'><a href="#">Home</a></li>
                <li className='text-white header__nav-links'><a href="#">Projects</a></li>
                <li className='text-white header__nav-links'><a href="#">Testimonials</a></li>
                <li className='text-white header__nav-links'><a href="#">Contact Me</a></li>
            </ul>

            {/* hamburger */}
            
        </nav>
    </header>
  )
}

export default Header
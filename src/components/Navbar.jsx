import React from 'react'
import logo from '../images/logo.jpg'
// import {FaSearch} from 'react-icons/fa'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
         <nav className="Navbar">
            <img src={logo} className="logo" alt="marvellogo"/>
            <div className='nav-items'>
            <ul className="nav-links">
                <Link className='linking' to="/"><li>Home</li></Link>
                 <Link className='linking' to="/series"><li>Series</li></Link> 
                  <Link className='linking' to="/comic"><li>Comic</li></Link> 
                    <Link className='linking' to="/characters"><li>Characters</li></Link>
                      <Link className='linking' to="/creators"><li>Creators</li></Link>
                        <Link className='linking' to="/events"><li>Events</li></Link>
                </ul>
             </div>
             {/* <div className="search-btn">
              <FaSearch/>
              </div> */}
              </nav>
              <Outlet />
              </>

            )
        }

    export default Navbar
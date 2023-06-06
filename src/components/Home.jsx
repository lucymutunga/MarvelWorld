import React from 'react'
import Spider from '../images/Spider.jpg'
import Thor from '../images/Thor.jpg'
import img3 from '../images/img3.jpg'
import Assemble from '../images/Assemble.jpg'
import Captain from '../images/Captain.png'
import cc from '../images/cc.jpg'
const Home = () => {
  return (
    
  
    <div className="main">
        <div className="first-section">
        <div className="card">
        <h1>Welcome to the Marvel Universe</h1>
            <p> Discover the extraordinary world of Marvel Comics, where legendary superheroes and thrilling stories come to life.
        Immerse yourself in the epic battles, heart-wrenching tragedies, and heroic triumphs that have captivated fans for decades.
        Whether you're a lifelong Marvel enthusiast or just starting your journey, prepare to be amazed by a universe like no other. </p>
        </div>
        <div className="middle">
        <img src={cc}alt="Captain"/>
        </div>
        </div>
        <div className="second-section">
        <div className="imgcontainer">
        <img src={Spider}alt="first"/>
        <img src={Thor}alt="Thor"/>
        <img src={img3}alt="third"/>
        <img src={Assemble}alt="fourth"/>
        <img src={Captain}alt="fifth"/>
        </div>

    </div>
       
        </div>
    
  )
}

export default Home
import React from 'react'
import { Link } from 'react-router-dom'
import banner from '../assets/banneryeni.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='mainPage' style= {{backgroundImage:`url(${banner})`}}>
      <div className='order'>
        <Link to={"/menu"}>
          <button>SIPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
import React from 'react'
import '../styles/Contact.css'
import taksimBurger from '../assets/banner.png'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style = {{backgroundImage: `url(${taksimBurger})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle iletisime gecin</h1>
        <form>
          <label htmlFor="adSoyad">Ad Soyad</label>
          <input type="text" name='name' id='adSoyad'/>
          <label htmlFor="email">Email</label>
          <input type="text" name='email' id='email'/>
          <label htmlFor="message">Mesajiniz</label>
          <textarea rows='12' name='message' id='message'></textarea>
        </form>
      </div>
    </div>
  )
}

export default Contact
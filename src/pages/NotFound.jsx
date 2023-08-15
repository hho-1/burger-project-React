import React from 'react'
import '../styles/Error.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className='error'>
        <h2>Adresi yanlis yazdiniz.</h2>
        <div className='returnButtons'>
            <button type='button' className='btn btn-lg btn-warning' onClick={() => navigate("/")}>Ana sayfaya dön</button>
            <button type='button' className='btn btn-lg btn-info' onClick={() => navigate(-1)}>Önceki sayfaya dön</button>
            <button type='button' className='btn btn-lg btn-danger' onClick={() => navigate("/menu")}>Siparis ver</button>
            <button type='button' className='btn btn-lg btn-success'><a href="https://www.diyanet.gov.tr/tr-TR" target='blank'>Allah'a havale et</a></button>
        </div>
    </div>
  )
}

export default NotFound
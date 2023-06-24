import React from 'react'
//import image1 from '../assets/java-icon.jpg'
export default function Card({id, title, image, instructor}) {
  return (
    <div className='card text-center bg-dark'>
      <div className='card-body text-light'>
      <img src={image} alt='java-icon'/>
      <h4 className='card-tittle'>{title}</h4> 
      <p className='card-text text-secondary'>
        instructor:{instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>
          Ir al sitio web
          </a>
    </div>
    </div>
  )
}

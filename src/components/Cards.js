import React from 'react'
import imagen1 from '../assets/java-icon.jpg'
import imagen2 from '../assets/python.jpg'
import imagen3 from '../assets/css.jpg'
import Card from './Card'
const cards = [
  {
      id:1,
      title: 'java-icon',
      image: imagen1,
      instructor: "Agustin Meza"
  },
  {
      id:2,
      title: 'python',
      image: imagen2,
      instructor: "Sheila Nav"
  },
  {
      id:3,
      title : 'css',
      image: imagen3,
      instructor: 'valentin pérez'
  }

]
    console.log(cards)
export default function Cards() {
  return (
    <div className='container d-flex justify-content-center align-item-center h-100'>
        <div className='row'>
            {cards.map( c=> (
              <div className='col-md-4' key={cards.id}>
                <Card
                kay={c.id}
                id={c.id}
                title = {c.title}
                image = {c.image}
                instructor = {c.instructor}
                />
                </div>
            ))
            }
        </div>
    </div>
  )
  }
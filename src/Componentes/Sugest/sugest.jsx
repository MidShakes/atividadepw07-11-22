import React from 'react'
import { Link } from 'react-router-dom'
import './sugest.css'

export default function Sugest() {
    const info = [
        {
            img: 'https://picsum.photos/197',
            titulo : 'place holder',
            link: '/materia'
        },
        {
            img: 'https://picsum.photos/198',
            titulo : 'place holder',
            link: '/materia2'
        },
        {
            img: 'https://picsum.photos/199',
            titulo : 'place holder',
            link: '/materia3'
        },
        {
            img: 'https://picsum.photos/200',
            titulo : 'place holder',
            link: '/materia4'
        }
    ]
    const sugest = info.map(
        (c)=> 
        <Link to={c.link}>
            <div className='box'>
                <div className='Img'>
                    <img className='Img'src={c.img}/>
                </div>
                <div className='title1'>
                    {c.titulo}  
                </div>
            </div>
        </Link>
      )
    return (
    <div>
        <div className='sugest'>
            {sugest}
        </div>
        
    </div>
  )
};






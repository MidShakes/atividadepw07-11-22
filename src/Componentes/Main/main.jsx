import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

export default function Main(props) {
  return (
    <div>
        <div className='main'>
            <div className='inform'>
                <div className='Title'>
                     {props.titulo}
                </div>
                <div className='news'>
                    {props.news}
                </div>
            </div>

                <div className='mainImg'>
                    <Link to={props.link}>
                        <img className='image' src={props.image}/>
                    </Link>                
                </div>

        </div>
    </div>
  )
}

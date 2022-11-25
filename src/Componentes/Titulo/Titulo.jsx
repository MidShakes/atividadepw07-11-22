import React from 'react'
import  './Titulo.css'

export default function Titulo(props) {
  return (
    <div>
        <div className='titulo'>
            {props.manch}
        </div>
        <div className='img'>
          <img className='capa'src={props.capa}/>
        </div>
    </div>
  )
}

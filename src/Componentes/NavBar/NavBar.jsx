import React from 'react'
import './NavBar.css'


export default function NavBar() {
  return (
 
          
      <div>
        <div className='container'>
          <img className='icon' src='src\Images\Logotipo_IFET.svg.png'/>
          <div className='info'>
            <div className='topinf'>
              <div className='title'>
                Instituto Federal de Rondônia
              </div>  
              <div className='imgGrid'>
                <img className='media' src='src\Images\redeum.png'/>
                <img className='media' src='src\Images\rededois.png'/>
                <img className='media' src='src\Images\redetres.png'/>
              </div>
            </div>
            <div className='botinf'>
              Campus Guajará-Mirim
            </div>
          </div>
        </div>
    </div>

    
  )
}
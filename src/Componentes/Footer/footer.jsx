import { Link } from 'react-router-dom'
import React from 'react'
import './Footercss.css'


function Footer(){
    const Footer = [{
        img: <img src='src\Images\Logotipo_IFET.svg.png' width={15}></img>,
        item: " Escola"
    },
    {
        img: <img src='src\Images\redeum.png' width={15}></img>,
        item: " Instagran"   
    },
    {
        img: <img src='src\Images\redetres.png' width={15}></img>,
        item: " Facebook"
    }
]

const rodape = Footer.map(
    (rodape)=>
    {
        return(
        <div className='lista'>
            {rodape.img}
            {rodape.item}
        </div>
        )
    }
)
return(
    
    <footer className='Footer'>
       
        <div>
            {rodape}
        </div>
        
    </footer>
)
}
export default Footer;

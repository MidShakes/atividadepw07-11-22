import React from 'react'
import Titulo from '../../Componentes/Titulo/Titulo'
import News from '../../Componentes/News/News'
import NavBar from '../../Componentes/NavBar/NavBar'
import Buttons from '../../Componentes/Buttons'
import Footer from '../../Componentes/Footer/footer'
export default function Materia4() {
  return (
    <div>
      <NavBar/>
      <Buttons/>
        <Titulo 
        manch='Não é possível que vai melhorar'
        capa='https://picsum.photos/192'/>
        <News 
        News ='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla quam vero voluptatibus quas? Quaerat temporibus doloremque, molestiae itaque suscipit magnam blanditiis? Provident, tenetur ullam dolorum error tempore illum nobis cupiditate.'/>
      <Footer/>
    </div>
  )
}

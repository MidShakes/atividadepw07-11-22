import React from 'react'
import Main from '../../Componentes/Main/main'
import Sugest from '../../Componentes/Sugest/sugest'
import NavBar from '../../Componentes/NavBar/NavBar'
import Buttons from '../../Componentes/Buttons'
import Footer from '../../Componentes/Footer/footer'
export default function Admin() {
  return (
    <div>
      <NavBar/>
      <Buttons/>
      <Main titulo='titulio'
      link='/materia0'
      news='Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel obcaecati impedit, recusandae harum illum exercitationem doloribus ducimus dolore facilis, adipisci iure reprehenderit distinctio officia neque id excepturi minima mollitia quaerat!'
      image='https://picsum.photos/196'
      />
      <Sugest />
      <Footer/>
    </div>
  )
}

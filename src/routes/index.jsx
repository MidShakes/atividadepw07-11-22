import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Register from '../pages/Register';
import Admin from '../pages/Admin';
import Materia from '../pages/materia';
import Noticia2 from '../pages/materia2';
import Materia3 from '../pages/materia3';
import Materia4 from '../pages/materia4';
import Private from './Private';
function RoutesApp(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='register' element={<Register/>} />
            <Route path='admin' element={<Private><Admin/></Private>} />
            <Route path='/materia' element={<Materia/>}/>
            <Route path="/materia2" element={<Noticia2/>} />
            <Route path="/materia3" element={<Materia3/>} />
            <Route path="/materia4" element={<Materia4 />} />
        
        </Routes>
    )
}//fim da função RoutesApp()
export default RoutesApp;
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './register.css'

function handleLogin(){
  e.preventDefault();
  if(email !== '' && password !==''){
    alert("TESTE")
  }else{
    alert("preencha todos os campos!")
  }
}

function Register() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    return (
      <div className='home-container'>
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta.</span>
        <form className='form' onSubmit={handleLogin}>
          <input type="email" placeholder='seuemail@server.com'
          value={email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
          <input type="password" placeholder='******'
          value={password}onChange={(e)=>setPassword(e.target.value)}/> <br/>
          <button type="submit">Cadastrar</button>
        </form>
        <Link className="button-Link" to={'/'}>
          Já possui uma conta? Faça login
        </Link>
      </div>
    )
  }
  
  export default Register;
  
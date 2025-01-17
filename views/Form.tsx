import { useState } from 'react';
import axios from "axios";

const Form = () => {

  const [values, setValues] = useState({
    username: '',
    password: '',
    confirmPassword:''
  })
  
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleForm = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values)
    const result = await axios.post('http://localhost:3000/users', values)
    console.log(result.data)
  }

  return (
    <div className='container'>
      <div className="form-container">
        <form onSubmit={handleForm} method="post">
          <h2>Login</h2>
            <label htmlFor="login-username">Usuario</label>
            <input type="text" name="username" id="login-username" onChange={handleChange} required />

            <label htmlFor="login-password">Contraseña</label>
            <input type="password" name="password" id="login-password" onChange={handleChange} required />

            <button type="submit">Enviar</button>
        </form>
    </div>
    <div className="form-container">
        <form onSubmit={handleForm} method="post">
          <h2>Registro</h2>
            <label htmlFor="register-username">Usuario</label>
            <input type="text" name="username" id="register-username" onChange={handleChange} required />

            <label htmlFor="register-password">Contraseña</label>
            <input type="password" name="password" id="register-password" onChange={handleChange} required />

            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" name="confirmPassword" id="confirm-password" onChange={handleChange} />

            <button type="submit">Enviar</button>
     </form>
    </div>
  </div>
  )
}

export default Form
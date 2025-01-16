import React from 'react'

const Register = () => {
  return (
    <div>
        <form action="" method="post">
            <label htmlFor="username">Usuario</label>
            <input type="text" />

            <label htmlFor="password">Contraseña</label>
            <input type="password" />

            <label htmlFor="confirm-password">Confirmar contraseña</label>
            <input type="password" />

            <button type="submit">Enviar</button>
    </form>
</div>
  )
}

export default Register
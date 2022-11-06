export default function Registro() {
  return (
    <div className="form-contain">

    <div className="form-nav">
        <a className="volver" href="/inicioSesionC">¿Ya tienes cuenta? Inicia Sesion</a>
        <a className="volver" href="/formularios">Volver</a>
    </div>

            <div className="form-contain-f">
                <h1>Registrate Usuario</h1>
                <form action="">
                    <h2>Identificacion</h2>
                    <input type="number" placeholder="Ingrese su Identificacion" />
                    <h2>Nombre</h2>
                    <input type="text" placeholder="Ingrese su Nombre" />
                    <h2>Edad</h2>
                    <input type="number" placeholder="Ingrese su Edad" />
                    <h2>Telefono</h2>
                    <input type="number" placeholder="Ingrese su Telefono" />
                    <h2>Correo Electronico</h2>
                    <input type="email" placeholder="Ingrese su Correo Electronico" />
                    <h2>Contraseña</h2>
                    <input type="password" placeholder="Ingrese su Contraseña" />
                    <div className="form-contain-f-btn">
                        <button type="submit">Enviar</button>
                </div>
            </form>
    </div>
</div>

  )
}

export default function InicioSP() {
  return (
    <div className="form-contain">

            <div className="form-contain-f">
                <h1>Inicia Profesionoal</h1>
                <form action="">
                  <h2>Identificacion</h2>
                  <input type="number" placeholder="Ingrese su Identificacion" />
                  <h2>Contraseña</h2>
                  <input type="password" placeholder="Ingrese su Contraseña" />
                    <div class="form-contain-f-btn">
                    <button type="submit">Enviar</button>
                    </div>
                </form>
    </div>

    <div className="form-nav">
        <a className="volver" href="/registroP">¿No tienes una cuenta? Registrate</a>
        <a className="volver" href="/formularios">Volver</a>
    </div>

</div>
  )
}

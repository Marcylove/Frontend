import '../assets/css/style.css'
import '../assets/js/ms.js'
import logo from '../assets/img/Logo.png';

export default function Navbar() {
  return (
    <header>
    <nav className="nav">
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <input type="search" className="buscador" placeholder="Buscador" />
        <ul className="menu">
            <li><a className="menu-links" href="#">Services</a></li>
            <li><a className="menu-links" href="#">Projects</a></li>
            <li><a className="menu-links" href="#">About</a></li>
        </ul>
        <div className="usuario">
            <div className="usuario-btn">
                <a href="/formularios" className="btn">Iniciar Sesion</a>
            </div>
        </div>
    </nav>
    <div className="hero">
        <h2 className="hero-tittle">
            Face-Job
        </h2>
        <p className="hero-p">
            Contacta con Profesionales
        </p>
    </div>
</header>
  )
}

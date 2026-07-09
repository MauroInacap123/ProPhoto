import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">
          Pro<span className="text-accent">Photo</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portafolio">Portafolio</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#paquetes">Paquetes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#presupuesto">Presupuesto</a>
            </li>
            <li className="nav-item ms-lg-2">
              <Link className="btn btn-accent btn-sm mt-2 mt-lg-0" to="/portafolio/nuevo">
                Agregar trabajo
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
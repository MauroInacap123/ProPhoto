import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <header className="hero">
      <div className="hero-overlay"></div>
      <div className="container text-center hero-content">
        <p className="hero-eyebrow">Fotografía profesional en Santiago</p>
        <h1 className="hero-title">
          Capturamos momentos <br />
          <span className="text-accent">que no vuelven</span>
        </h1>
        <p className="hero-subtitle mx-auto">
          Sesiones de retrato, eventos y producto con un estilo natural y
          cercano. Cada trabajo del portafolio queda registrado y disponible
          para que revises resultados reales.
        </p>
        <div className="hero-actions">
          <Link to="/portafolio" className="btn btn-accent btn-lg">
            Ver portafolio
          </Link>
          <a href="#presupuesto" className="btn btn-outline-light btn-lg">
            Pedir presupuesto
          </a>
        </div>
      </div>
    </header>
  )
}
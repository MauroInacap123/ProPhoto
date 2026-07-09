import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTrabajos, eliminarTrabajo } from '../services/fotografiaApi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Buscador from '../components/Buscador'
import TrabajoCard from '../components/TrabajoCard'
import TrabajoModal from '../components/TrabajoModal'

export default function Portafolio() {
  const [trabajos, setTrabajos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null)

  useEffect(() => {
    cargarTrabajos()
  }, [])

  const cargarTrabajos = () => {
    setCargando(true)
    getTrabajos()
      .then(setTrabajos)
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }

  const trabajosFiltrados = trabajos.filter((t) => {
    const texto = busqueda.toLowerCase()
    return (
      t.nombre?.toLowerCase().includes(texto) ||
      t.categoria?.toLowerCase().includes(texto)
    )
  })

  const handleEliminar = async (id) => {
    if (!confirm('¿Seguro que quieres eliminar este trabajo del portafolio?')) return
    try {
      await eliminarTrabajo(id)
      setTrabajos((prev) => prev.filter((t) => t._id !== id))
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <main className="container py-5">
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
          <h1 className="section-title mb-0">Portafolio de trabajos</h1>
          <Link to="/portafolio/nuevo" className="btn btn-accent">
            Agregar trabajo
          </Link>
        </div>

        <Buscador
          valor={busqueda}
          onChange={setBusqueda}
          placeholder="Buscar por nombre o categoría..."
        />

        {cargando && (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-accent"></div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {!cargando && !error && trabajosFiltrados.length === 0 && (
          <p className="text-muted">Todavía no hay trabajos que coincidan con la búsqueda.</p>
        )}

        <div className="row g-4">
          {trabajosFiltrados.map((trabajo) => (
            <TrabajoCard
              key={trabajo._id}
              trabajo={trabajo}
              onVerDetalle={setTrabajoSeleccionado}
              onEliminar={handleEliminar}
            />
          ))}
        </div>
      </main>

      <TrabajoModal trabajo={trabajoSeleccionado} />
      <Footer />
    </>
  )
}
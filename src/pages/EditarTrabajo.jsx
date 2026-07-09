import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrabajoForm from '../components/TrabajoForm'
import { getTrabajo, actualizarTrabajo } from '../services/fotografiaApi'

export default function EditarTrabajo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [datosIniciales, setDatosIniciales] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getTrabajo(id)
      .then((trabajo) => {
        setDatosIniciales({
          nombre: trabajo.nombre || '',
          categoria: trabajo.categoria || 'Retratos',
          descripcion: trabajo.descripcion || '',
          precio: trabajo.precio ?? '',
          fecha: trabajo.fecha || '',
          clienteNombre: trabajo.cliente?.nombre || '',
          clienteTelefono: trabajo.cliente?.telefono || '',
        })
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  const handleGuardar = async (trabajo) => {
    try {
      await actualizarTrabajo(id, trabajo)
      navigate('/portafolio')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <main className="container py-5">
        <h1 className="section-title mb-4">Editar trabajo</h1>

        {cargando && (
          <div className="d-flex justify-content-center py-5">
            <div className="spinner-border text-accent"></div>
          </div>
        )}

        {error && <div className="alert alert-danger">{error}</div>}

        {datosIniciales && (
          <div className="form-wrapper mx-auto">
            <TrabajoForm
              datosIniciales={datosIniciales}
              onGuardar={handleGuardar}
              textoBoton="Guardar cambios"
            />
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TrabajoForm from '../components/TrabajoForm'
import { crearTrabajo } from '../services/fotografiaApi'

export default function AgregarTrabajo() {
  const navigate = useNavigate()

  const handleGuardar = async (trabajo) => {
    try {
      await crearTrabajo(trabajo)
      navigate('/portafolio')
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <>
      <Navbar />
      <main className="container py-5">
        <h1 className="section-title mb-4">Agregar trabajo al portafolio</h1>
        <div className="form-wrapper mx-auto">
          <TrabajoForm onGuardar={handleGuardar} textoBoton="Guardar trabajo" />
        </div>
      </main>
      <Footer />
    </>
  )
}
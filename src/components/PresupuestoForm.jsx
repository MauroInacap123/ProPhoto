import { useState } from 'react'

const inicial = { nombre: '', correo: '', tipoSesion: 'Retratos', mensaje: '' }

export default function PresupuestoForm() {
  const [form, setForm] = useState(inicial)
  const [errores, setErrores] = useState({})
  const [enviado, setEnviado] = useState(false)

  const actualizar = (campo, valor) => setForm((prev) => ({ ...prev, [campo]: valor }))

  const validar = () => {
    const nuevosErrores = {}
    if (!form.nombre.trim()) nuevosErrores.nombre = 'Ingresa tu nombre'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo))
      nuevosErrores.correo = 'Ingresa un correo válido'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      nuevosErrores.mensaje = 'Cuéntanos un poco más (mínimo 10 caracteres)'
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validar()) {
      setEnviado(false)
      return
    }
    setEnviado(true)
    setForm(inicial)
  }

  return (
    <section id="presupuesto" className="section-presupuesto">
      <div className="container">
        <h2 className="section-title text-center">Pide tu presupuesto</h2>
        <form className="form-presupuesto mx-auto" onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
              value={form.nombre}
              onChange={(e) => actualizar('nombre', e.target.value)}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo</label>
            <input
              type="email"
              className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
              value={form.correo}
              onChange={(e) => actualizar('correo', e.target.value)}
            />
            {errores.correo && <div className="invalid-feedback">{errores.correo}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo de sesión</label>
            <select
              className="form-select"
              value={form.tipoSesion}
              onChange={(e) => actualizar('tipoSesion', e.target.value)}
            >
              <option>Retratos</option>
              <option>Eventos</option>
              <option>Producto</option>
              <option>Corporativa</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Cuéntanos qué necesitas</label>
            <textarea
              rows="3"
              className={`form-control ${errores.mensaje ? 'is-invalid' : ''}`}
              value={form.mensaje}
              onChange={(e) => actualizar('mensaje', e.target.value)}
            ></textarea>
            {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-accent w-100">
            Enviar solicitud
          </button>

          {enviado && (
            <div className="alert alert-success mt-3" role="alert">
              ¡Listo! Recibimos tu solicitud, te contactaremos pronto.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
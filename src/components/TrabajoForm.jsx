import { useState } from 'react'

const valoresIniciales = {
  nombre: '',
  categoria: 'Retratos',
  descripcion: '',
  precio: '',
  fecha: '',
  clienteNombre: '',
  clienteTelefono: '',
}

// Fecha de hoy en formato YYYY-MM-DD, para no dejar elegir fechas pasadas
const hoy = new Date().toISOString().split('T')[0]

// Tope de precio: una sesión de fotos no debería pasar de este monto
const PRECIO_MAXIMO = 2000000

// Solo letras, espacios y tildes - nada de números ni símbolos
const soloLetras = /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\s]+$/

export default function TrabajoForm({ datosIniciales, onGuardar, textoBoton }) {
  const [form, setForm] = useState(datosIniciales || valoresIniciales)
  const [errores, setErrores] = useState({})
  const [enviando, setEnviando] = useState(false)

  const actualizar = (campo, valor) => {
    setForm((prev) => ({ ...prev, [campo]: valor }))
  }

  const validar = () => {
    const nuevosErrores = {}

    if (!form.nombre.trim()) {
      nuevosErrores.nombre = 'El nombre del trabajo es obligatorio'
    } else if (!soloLetras.test(form.nombre.trim())) {
      nuevosErrores.nombre = 'El nombre no puede tener números ni símbolos'
    }

    if (!form.descripcion.trim()) nuevosErrores.descripcion = 'Agrega una breve descripción'

    if (!form.precio || Number(form.precio) <= 0) {
      nuevosErrores.precio = 'El precio debe ser mayor a 0'
    } else if (Number(form.precio) > PRECIO_MAXIMO) {
      nuevosErrores.precio = `El precio no puede superar $${PRECIO_MAXIMO.toLocaleString('es-CL')}`
    }

    if (!form.fecha) {
      nuevosErrores.fecha = 'Selecciona una fecha'
    } else if (form.fecha < hoy) {
      nuevosErrores.fecha = 'La fecha no puede ser anterior a hoy'
    }

    if (!form.clienteNombre.trim()) {
      nuevosErrores.clienteNombre = 'Ingresa el nombre del cliente'
    } else if (!soloLetras.test(form.clienteNombre.trim())) {
      nuevosErrores.clienteNombre = 'El nombre no puede tener números ni símbolos'
    }

    if (!/^\+?56?\s?9\d{8}$/.test(form.clienteTelefono.replace(/\s/g, '')))
      nuevosErrores.clienteTelefono = 'Ingresa un teléfono chileno válido, ej: +56912345678'

    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validar()) return

    setEnviando(true)
    const trabajo = {
      nombre: form.nombre,
      categoria: form.categoria,
      descripcion: form.descripcion,
      precio: Number(form.precio),
      fecha: form.fecha,
      cliente: {
        nombre: form.clienteNombre,
        telefono: form.clienteTelefono,
      },
    }

    try {
      await onGuardar(trabajo)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <form className="form-trabajo" onSubmit={handleSubmit} noValidate>
      <div className="mb-3">
        <label className="form-label">Nombre del trabajo</label>
        <input
          type="text"
          className={`form-control ${errores.nombre ? 'is-invalid' : ''}`}
          value={form.nombre}
          onChange={(e) => actualizar('nombre', e.target.value)}
        />
        {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label">Categoría</label>
        <select
          className="form-select"
          value={form.categoria}
          onChange={(e) => actualizar('categoria', e.target.value)}
        >
          <option>Retratos</option>
          <option>Eventos</option>
          <option>Producto</option>
          <option>Corporativa</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className={`form-control ${errores.descripcion ? 'is-invalid' : ''}`}
          rows="3"
          value={form.descripcion}
          onChange={(e) => actualizar('descripcion', e.target.value)}
        ></textarea>
        {errores.descripcion && <div className="invalid-feedback">{errores.descripcion}</div>}
      </div>

      <div className="row">
        <div className="col-6 mb-3">
          <label className="form-label">Precio (CLP)</label>
          <input
            type="number"
            min="1"
            max={PRECIO_MAXIMO}
            className={`form-control ${errores.precio ? 'is-invalid' : ''}`}
            value={form.precio}
            onChange={(e) => actualizar('precio', e.target.value)}
          />
          {errores.precio && <div className="invalid-feedback">{errores.precio}</div>}
        </div>
        <div className="col-6 mb-3">
          <label className="form-label">Fecha</label>
          <input
            type="date"
            min={hoy}
            className={`form-control ${errores.fecha ? 'is-invalid' : ''}`}
            value={form.fecha}
            onChange={(e) => actualizar('fecha', e.target.value)}
          />
          {errores.fecha && <div className="invalid-feedback">{errores.fecha}</div>}
        </div>
      </div>

      <div className="row">
        <div className="col-6 mb-3">
          <label className="form-label">Nombre del cliente</label>
          <input
            type="text"
            className={`form-control ${errores.clienteNombre ? 'is-invalid' : ''}`}
            value={form.clienteNombre}
            onChange={(e) => actualizar('clienteNombre', e.target.value)}
          />
          {errores.clienteNombre && (
            <div className="invalid-feedback">{errores.clienteNombre}</div>
          )}
        </div>
        <div className="col-6 mb-3">
          <label className="form-label">Teléfono del cliente</label>
          <input
            type="text"
            placeholder="+56912345678"
            className={`form-control ${errores.clienteTelefono ? 'is-invalid' : ''}`}
            value={form.clienteTelefono}
            onChange={(e) => actualizar('clienteTelefono', e.target.value)}
          />
          {errores.clienteTelefono && (
            <div className="invalid-feedback">{errores.clienteTelefono}</div>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-accent" disabled={enviando}>
        {enviando ? 'Guardando...' : textoBoton}
      </button>
    </form>
  )
}
const BASE_URL = 'https://apiclases.inacode.cl/fotografia'

// Trae todos los trabajos del portafolio
export async function getTrabajos() {
  const res = await fetch(BASE_URL)
  if (!res.ok) throw new Error('No se pudieron obtener los trabajos')
  const data = await res.json()
  return data.datos ?? data
}

// Trae un solo trabajo por su id
export async function getTrabajo(id) {
  const res = await fetch(`${BASE_URL}/${id}`)
  if (!res.ok) throw new Error('No se pudo obtener el trabajo')
  const data = await res.json()
  return data.datos ?? data
}

// Crea un trabajo nuevo en el portafolio
export async function crearTrabajo(trabajo) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trabajo),
  })
  if (!res.ok) throw new Error('No se pudo crear el trabajo')
  return res.json()
}

// Actualiza un trabajo existente
export async function actualizarTrabajo(id, datosActualizados) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(datosActualizados),
  })
  if (!res.ok) throw new Error('No se pudo actualizar el trabajo')
  return res.json()
}

// Elimina un trabajo del portafolio
export async function eliminarTrabajo(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  })
  if (!res.ok) throw new Error('No se pudo eliminar el trabajo')
  return res.json()
}
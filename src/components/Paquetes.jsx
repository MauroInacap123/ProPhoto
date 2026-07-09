const paquetes = [
  { nombre: 'Básico', precio: '35.000', detalle: '1 hora de sesión + 10 fotos editadas' },
  { nombre: 'Estándar', precio: '65.000', detalle: '2 horas de sesión + 20 fotos editadas' },
  { nombre: 'Premium', precio: '120.000', detalle: 'Día completo + 40 fotos editadas + video corto' },
]

export default function Paquetes() {
  return (
    <section id="paquetes" className="section-paquetes">
      <div className="container">
        <h2 className="section-title text-center">Paquetes</h2>
        <div className="row g-4 justify-content-center">
          {paquetes.map((p) => (
            <div className="col-12 col-md-4" key={p.nombre}>
              <div className="card-paquete h-100 text-center">
                <h3>{p.nombre}</h3>
                <p className="precio">${p.precio}</p>
                <p className="detalle">{p.detalle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
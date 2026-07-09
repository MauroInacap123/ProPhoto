const paquetes = [
  {
    nombre: 'Básico',
    precio: '35.000',
    detalle: '1 hora de sesión + 10 fotos editadas',
    imagen:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=70&w=800&h=500&fit=crop&crop=faces&auto=format',
  },
  {
    nombre: 'Estándar',
    precio: '65.000',
    detalle: '2 horas de sesión + 20 fotos editadas',
    imagen:
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?fm=jpg&q=70&w=800&h=500&fit=crop&crop=entropy&auto=format',
  },
  {
    nombre: 'Premium',
    precio: '120.000',
    detalle: 'Día completo + 40 fotos editadas + video corto',
    imagen:
      'https://images.unsplash.com/photo-1491492628162-d88fbe1cdd04?fm=jpg&q=70&w=800&h=500&fit=crop&auto=format',
  },
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
                <img src={p.imagen} alt={`Paquete ${p.nombre}`} className="card-paquete-img" />
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
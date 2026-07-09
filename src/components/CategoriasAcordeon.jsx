const categorias = [
  {
    id: 'retratos',
    titulo: 'Retratos y sesiones personales',
    texto:
      'Sesiones individuales o en pareja, en estudio o exterior. Incluye edición de las mejores 15 fotos y entrega digital en alta resolución.',
  },
  {
    id: 'eventos',
    titulo: 'Eventos y matrimonios',
    texto:
      'Cobertura completa del evento, cobertura de momentos clave y un video corto resumen. Ideal para matrimonios, cumpleaños y aniversarios.',
  },
  {
    id: 'producto',
    titulo: 'Fotografía de producto',
    texto:
      'Fotos para catálogo o venta online, con fondo neutro o ambientado. Pensado para emprendimientos que venden por redes sociales.',
  },
  {
    id: 'corporativa',
    titulo: 'Fotografía corporativa',
    texto:
      'Fotos de equipo, oficinas y material para LinkedIn o sitios web. Incluye retoque básico y entrega en formatos web y de impresión.',
  },
]

export default function CategoriasAcordeon() {
  return (
    <section className="section-categorias">
      <div className="container">
        <h2 className="section-title text-center">Tipos de sesiones</h2>
        <div className="accordion mx-auto" id="acordeonCategorias" style={{ maxWidth: '760px' }}>
          {categorias.map((cat, index) => (
            <div className="accordion-item" key={cat.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${cat.id}`}
                  aria-expanded={index === 0 ? 'true' : 'false'}
                >
                  {cat.titulo}
                </button>
              </h2>
              <div
                id={cat.id}
                className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                data-bs-parent="#acordeonCategorias"
              >
                <div className="accordion-body">{cat.texto}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
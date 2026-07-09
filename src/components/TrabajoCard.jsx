import { Link } from 'react-router-dom'

export default function TrabajoCard({ trabajo, onVerDetalle, onEliminar }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card-trabajo h-100">
        {trabajo.imagenes && trabajo.imagenes.length > 0 && (
          <img
            src={trabajo.imagenes[0]}
            alt={trabajo.nombre}
            className="card-trabajo-img"
            onError={(e) => (e.target.style.display = 'none')}
          />
        )}
        <div className="card-trabajo-categoria">{trabajo.categoria}</div>
        <h3>{trabajo.nombre}</h3>
        <p className="card-trabajo-desc">{trabajo.descripcion}</p>
        <p className="card-trabajo-precio">${trabajo.precio?.toLocaleString('es-CL')}</p>

        <div className="d-flex flex-wrap gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-sm btn-accent"
            data-bs-toggle="modal"
            data-bs-target="#modalTrabajo"
            onClick={() => onVerDetalle(trabajo)}
          >
            Ver detalle
          </button>
          <Link
            to={`/portafolio/${trabajo._id}/editar`}
            className="btn btn-sm btn-outline-light"
          >
            Editar
          </Link>
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={() => onEliminar(trabajo._id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
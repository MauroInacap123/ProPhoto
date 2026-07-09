export default function TrabajoModal({ trabajo }) {
  return (
    <div
      className="modal fade"
      id="modalTrabajo"
      tabIndex="-1"
      aria-labelledby="modalTrabajoLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalTrabajoLabel">
              {trabajo?.nombre || 'Detalle del trabajo'}
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>
          </div>
          {trabajo && (
            <div className="modal-body">
              {trabajo.imagenes && trabajo.imagenes.length > 0 && (
                <div className="galeria-modal mb-3">
                  {trabajo.imagenes.map((url, index) => (
                    <img
                      key={index}
                      src={url}
                      alt={`Foto ${index + 1} de ${trabajo.nombre}`}
                      className="galeria-modal-img"
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                  ))}
                </div>
              )}
              <p>
                <strong>Categoría:</strong> {trabajo.categoria}
              </p>
              <p>
                <strong>Descripción:</strong> {trabajo.descripcion}
              </p>
              <p>
                <strong>Precio:</strong> ${trabajo.precio?.toLocaleString('es-CL')}
              </p>
              <p>
                <strong>Fecha:</strong> {trabajo.fecha}
              </p>
              <p>
                <strong>Cliente:</strong> {trabajo.cliente?.nombre} -{' '}
                {trabajo.cliente?.telefono}
              </p>
            </div>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-light"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-4">
            <span className="footer-logo">
              Pro<span className="text-accent">Photo</span>
            </span>
            <p className="mt-2 text-muted">
              Fotografía profesional en Santiago de Chile. Retratos, eventos,
              producto y fotografía corporativa.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h6>Contacto</h6>
            <ul className="list-unstyled text-muted">
              <li>
                <i className="bi bi-envelope me-2"></i>contacto@prophoto.cl
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i>+56 9 1234 5678
              </li>
              <li>
                <i className="bi bi-geo-alt me-2"></i>Santiago, Chile
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6>Síguenos</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp"></i></a>
            </div>
          </div>
        </div>

        <hr />
        <p className="text-center text-muted mb-0">
          © {new Date().getFullYear()} ProPhoto. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
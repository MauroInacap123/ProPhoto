import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Portafolio from './pages/Portafolio'
import AgregarTrabajo from './pages/AgregarTrabajo'
import EditarTrabajo from './pages/EditarTrabajo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/portafolio/nuevo" element={<AgregarTrabajo />} />
        <Route path="/portafolio/:id/editar" element={<EditarTrabajo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
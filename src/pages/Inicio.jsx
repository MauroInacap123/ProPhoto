import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CategoriasAcordeon from '../components/CategoriasAcordeon'
import Paquetes from '../components/Paquetes'
import PresupuestoForm from '../components/PresupuestoForm'
import Footer from '../components/Footer'

export default function Inicio() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <CategoriasAcordeon />
        <Paquetes />
        <PresupuestoForm />
      </main>
      <Footer />
    </>
  )
}
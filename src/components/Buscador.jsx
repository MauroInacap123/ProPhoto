export default function Buscador({ valor, onChange, placeholder }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder || 'Buscar por nombre o categoría...'}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
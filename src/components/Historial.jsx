function Historial({ items = [], onSeleccionar }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <nav className="historial">
      <p className="historial-titulo">Búsquedas recientes</p>
      <ul>
        {items.map((ciudad) => (
          <li key={ciudad}>
            <button type="button" onClick={() => onSeleccionar(ciudad)}>
              {ciudad}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Historial;

import { useState } from 'react';

function BarraBusqueda({ onBuscar }) {
  const [errorValidacion, setErrorValidacion] = useState(null);

  function manejarSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("query").trim();

    if (!query) {
      setErrorValidacion("Escribe una ciudad o país.");
      return;
    }
    setErrorValidacion(null);
    onBuscar(query);
  }

  // Limpia el aviso al comenzar a escribir una query
  function manejarCambio() {
    if (errorValidacion) {
      setErrorValidacion(null);
    }
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Ciudad o país…"
        onChange={manejarCambio}
      />
      <button type="submit">Buscar</button>
      {errorValidacion && <p>{errorValidacion}</p>}
    </form>
  );
}

export default BarraBusqueda;

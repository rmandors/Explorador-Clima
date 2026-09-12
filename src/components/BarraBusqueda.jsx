function BarraBusqueda({ onBuscar }) {

  function manejarSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const query = formData.get("query");
    onBuscar(query);
  }

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        name="query"
        placeholder="Ciudad o país…"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default BarraBusqueda;

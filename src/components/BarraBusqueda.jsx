function BarraBusqueda() {
  function manejarSubmit(event) {
    event.preventDefault()
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
  )
}

export default BarraBusqueda

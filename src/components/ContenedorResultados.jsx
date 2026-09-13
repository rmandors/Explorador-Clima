import TarjetaClima from './TarjetaClima.jsx';

function ContenedorResultados({ datos, cargando, error, onReintentar }) {
  return (
    <section className="resultados">
      {cargando && (
        <p className="estado-carga">Cargando...</p>
      )}
      {!cargando && error && (
        <div className="error-clima">
          <p>{error}</p>
          <button type="button" className="boton boton-error" onClick={onReintentar}>
            Reintentar
          </button>
        </div>
      )}
      {!cargando && !error && datos && (
        <TarjetaClima datos={datos} />
      )}
    </section>
  );
}

export default ContenedorResultados;

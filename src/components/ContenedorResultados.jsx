import TarjetaClima from './TarjetaClima.jsx';

function ContenedorResultados({ datos, cargando, error, onReintentar }) {
  return (
    <section>
      {cargando && (
        <p>Cargando...</p>
      )}
      {!cargando && error && (
        <div>
          <p>{error}</p>
          <button type="button" onClick={onReintentar}>Reintentar</button>
        </div>
      )}
      {!cargando && !error && datos && (
        <TarjetaClima datos={datos} />
      )}
    </section>
  );
}

export default ContenedorResultados;

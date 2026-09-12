import TarjetaClima from './TarjetaClima.jsx';

function ContenedorResultados({ datos }) {
  return (
    <section>
      {datos ? (
        <TarjetaClima datos={datos} />
      ) : (
        <p>Los resultados aparecerán aquí.</p>
      )}
    </section>
  );
}

export default ContenedorResultados;

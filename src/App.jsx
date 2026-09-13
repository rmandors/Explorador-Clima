import { useState } from 'react';

import BarraBusqueda from './components/BarraBusqueda.jsx';
import ContenedorResultados from './components/ContenedorResultados.jsx';

const API_KEY = import.meta.env.WEATHER_API_KEY;
const URL_CLIMA = "https://api.weatherapi.com/v1/current.json";

function App() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [ultimaQuery, setUltimaQuery] = useState('');

  async function buscarDatos(query) {
    const url = `${URL_CLIMA}?key=${API_KEY}&q=${encodeURIComponent(query)}&lang=es`;

    setUltimaQuery(query);
    setCargando(true);
    setError(null);

    try {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        if (respuesta.status === 400) {
          throw new Error("No se encontró esa ciudad o país.");
        }
        throw new Error("No se pudieron cargar los datos del clima.");
      }

      const resultado = await respuesta.json();
      console.log(resultado);
      setDatos(resultado);
    } catch (err) {
      setError(err.message);
      setDatos(null);
    } finally {
      setCargando(false);
    }
  }

  function manejarReintentar() {
    buscarDatos(ultimaQuery);
  }

  return (
    <main>
      <h1>Explorador-Clima</h1>
      <BarraBusqueda onBuscar={buscarDatos} />
      <ContenedorResultados
        datos={datos}
        cargando={cargando}
        error={error}
        onReintentar={manejarReintentar}
      />
    </main>
  );
}

export default App;

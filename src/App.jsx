import { useState } from 'react';

import BarraBusqueda from './components/BarraBusqueda.jsx';
import ContenedorResultados from './components/ContenedorResultados.jsx';
import Historial from './components/Historial.jsx';
import icono from './assets/icon.png';

const API_KEY = import.meta.env.WEATHER_API_KEY;
const URL_CLIMA = "https://api.weatherapi.com/v1/current.json";

function App() {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [ultimaQuery, setUltimaQuery] = useState('');
  const [historial, setHistorial] = useState([]);

  async function buscarDatos(query, guardarEnHistorial = true) {
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

      if (guardarEnHistorial) {
        const { name, country } = resultado.location;
        const etiqueta = country.toLowerCase() === query.trim().toLowerCase()
          ? country
          : name;

        setHistorial((previos) => {
          const clave = etiqueta.trim().toLowerCase();
          const sinRepetidos = previos.filter(
            (item) => item.trim().toLowerCase() !== clave
          );
          return [etiqueta, ...sinRepetidos].slice(0, 5);
        });
      }
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
    <main className="app">
      <header className="encabezado">
        <img src={icono} alt="" className="encabezado-icono" />
        <h1>Explorador de Clima</h1>
      </header>
      <BarraBusqueda onBuscar={buscarDatos} />
      <Historial
        items={historial}
        onSeleccionar={(ciudad) => buscarDatos(ciudad, false)}
      />
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

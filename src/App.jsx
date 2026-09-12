import BarraBusqueda from './components/BarraBusqueda.jsx';
import ContenedorResultados from './components/ContenedorResultados.jsx';

const API_KEY = import.meta.env.WEATHER_API_KEY;
const URL_CLIMA = "https://api.weatherapi.com/v1/current.json";

function App() {
  async function buscarDatos(query) {
    const url = `${URL_CLIMA}?key=${API_KEY}&q=${encodeURIComponent(query)}&lang=es`;

    try {
      const respuesta = await fetch(url);

      if (!respuesta.ok) {
        if (respuesta.status === 400) {
          throw new Error("No se encontró esa ciudad o país.");
        }
        throw new Error("No se pudieron cargar los datos del clima.");
      }
      const datos = await respuesta.json();
      console.log(datos);
      return datos;
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <main>
      <h1>Explorador-Clima</h1>
      <BarraBusqueda onBuscar={buscarDatos} />
      <ContenedorResultados />
    </main>
  );
}

export default App;
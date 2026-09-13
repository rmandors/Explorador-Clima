function TarjetaClima({ datos }) {
  const { location, current } = datos;
  const { name, region, country, localtime } = location;
  const {
    temp_c,
    feelslike_c,
    humidity,
    wind_kph,
    wind_dir,
    precip_mm,
    uv,
    condition,
  } = current;
  const detalle = [region, country].filter(Boolean).join(' · ');
  const hora = localtime.split(' ')[1];

  return (
    <article className="tarjeta-clima">
      <header className="tarjeta-clima-lugar">
        <h2>{name}</h2>
        {detalle && <p className="tarjeta-clima-detalle">{detalle}</p>}
      </header>

      <div className="tarjeta-clima-cuerpo">
        <img src={condition.icon} alt={condition.text} />
        <div>
          <p className="tarjeta-clima-temp">{temp_c}°C</p>
          <p className="tarjeta-clima-condicion">{condition.text}</p>
        </div>
      </div>

      <dl className="tarjeta-clima-datos">
        <div>
          <dt>Sensación</dt>
          <dd>{feelslike_c}°C</dd>
        </div>
        <div>
          <dt>Humedad</dt>
          <dd>{humidity}%</dd>
        </div>
        <div>
          <dt>Viento</dt>
          <dd>{wind_kph} km/h {wind_dir}</dd>
        </div>
        <div>
          <dt>Lluvia</dt>
          <dd>{precip_mm} mm</dd>
        </div>
        <div>
          <dt>Índice UV</dt>
          <dd>{uv}</dd>
        </div>
        <div>
          <dt>Hora local</dt>
          <dd>{hora}</dd>
        </div>
      </dl>
    </article>
  );
}

export default TarjetaClima;

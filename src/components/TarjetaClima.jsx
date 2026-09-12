function TarjetaClima({ datos }) {
  const { location, current } = datos;
  const { name, region, country } = location;
  const { temp_c, condition } = current;
  const lugar = [name, region, country].filter(Boolean).join(', ');

  return (
    <article>
      <h2>{lugar}</h2>
      <p><b>Temperatura:</b> {temp_c}°C</p>
      <p><b>Condición:</b> {condition.text}</p>
      <img src={condition.icon} alt={condition.text} />
    </article>
  );
}

export default TarjetaClima;

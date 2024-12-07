function Tarjetas(props) {
  return (
    <div className="p-6 bg-white shadow rounded flex items-center space-x-4">
      {/* Imagen */}
      <img src={props.imagen} width="50px" alt="Ícono" />

      {/* Contenido de la tarjeta */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{props.titulo}</h3>
        <p className="text-gray-600">{props.texto}</p>
      </div>
    </div>
  );
}

export default Tarjetas;

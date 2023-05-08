const componente = () => {
  //const libros = ["Harry Potter", "El señor de los anillos", "El principito"];
  const libros = [];
  return (
    <div>
      <h1>Listado de libros</h1>

      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro, index) => {
            return <li key={index}>{libro}</li>;
          })}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};
export default componente;
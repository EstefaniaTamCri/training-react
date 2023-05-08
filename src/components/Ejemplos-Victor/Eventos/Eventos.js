const Eventos = () => {
//   const hasDadoClick = (e) => {
//     alert("Has dado click");
//   };
//   return (
//     <>
//       <h2>Eventos</h2>
//       <button onClick={hasDadoClick}>Dame click! </button>
//     </>
//   );
// };

//Para pasarle parámetros a la función, se hace de la siguiente manera:
  const hasDadoClick = (e, nombre) => {
    alert("Has dado click" + " "+ nombre);
  };
  return (
    <>
      <h2>Eventos</h2>
      <button onClick={e => hasDadoClick (e, "Estefanía")}>Dame click! </button>
      <button onClick={e => hasDadoClick (e, "Estefanía")}>Dame click! </button>
    </>
  );
};
export default Eventos;

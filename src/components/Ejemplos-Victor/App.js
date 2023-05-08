import Componente from "./Componente1/Componente1";
import Componente2 from "./Componente2/Componente2";
import Eventos from "./Eventos/Eventos";
const App = () => {
  const ficha_medica = {
    altura: "1.60",
    peso: "50kg",
    edad: "31 años",
    grupo: "A+",
  };

  return (
    <>
      <Componente />
      <Componente2 nombre="Estefanía" apellidos="Tamayo" ficha={ficha_medica} />
      <Eventos />
    </>
  );
};
export default App;

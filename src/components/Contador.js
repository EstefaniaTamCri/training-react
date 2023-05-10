import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const handleContadorSuma = () => {
    setContador(contador + 1);
  };
  const handleContadorMultiplica = () => {
    setContador(contador * 5);
  };
  const handleContadorResta = () => {
    setContador(contador - 1);
  };

  return (
    <>
      <h1>Rendering {contador} times!</h1>
      <button onClick={handleContadorSuma}>Suma 1!</button>
      <button onClick={handleContadorMultiplica}>Multiplica!</button>
      <button onClick={handleContadorResta}>Resta!</button>
    </>
  );
};
export default Contador;

import "./Dogs.css";
import dogs from "../../db/Dogs.json";

const Dogs = () => {
  return dogs.map((dog, index) => {
    return (
      <>
        <div className="Dog" key={index}>
          <div className="raza">
            <h1>{dog.nombre}</h1>
          </div>
          <div className="img">
            <img src={dog.imagen} alt="" />
          </div>
          <div className="info">
            <h3 className="actividad"> <strong>Actividad:</strong> {dog.actividad}</h3>
            <h3 className="estatura"> <strong>Estatura aproximada:</strong> {dog.estatura}</h3>
          </div>
        </div>
      </>
    );
    });     
};
export default Dogs;

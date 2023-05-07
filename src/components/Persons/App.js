import Persons from "./Persons";
// import resistance from "./db/db3.json";
//En este caso, ponemos el objeto directamente en la funcion, por lo que no hace falta importar el archivo db3.json y tampoco hace falta poner el map, ya que no estamos recorriendo un array, sino que estamos recorriendo un objeto.

const App = (props) => {
  const resistance = [
    {
      name: "Javier",
      age: "23",
      role: "Police",
      job: "Dentist",
    },
    {
      name: "Estefania",
      age: "39",
      role: "John's mother",
      job: "Police woman",
    },
    {
      name: "Rosa",
      age: "60",
      role: "Soldier",
      job: "Cooker",
    },
  ];
  return (
    <>
      <Persons
        name={resistance[0].name}
        age={resistance[0].age}
        role={resistance[0].role}
        job={resistance[0].job}
      />
      ,
      <Persons
        name={resistance[1].name}
        age={resistance[1].age}
        role={resistance[1].role}
        job={resistance[1].job}
      />
      ,
      <Persons
        name={resistance[2].name}
        age={resistance[2].age}
        role={resistance[2].role}
        job={resistance[2].job}
      />
      ;
    </>
  );
};
export default App;

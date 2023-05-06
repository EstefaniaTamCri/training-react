import Character from "./components/Character/Character.js";
import resistance from "./db/db.json";

const App = (props) => {
  return (
    <>
      {resistance.map((character) => {
        return (
          <Character
            name={character.name}
            age={character.age}
            role={character.role}
            enemy={character.enemy}
          />
        );
      })}
    </>
  );
};
export default App;

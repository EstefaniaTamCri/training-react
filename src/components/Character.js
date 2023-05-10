import { useState } from "react";
import "./Character.css";

const Character = (props) => {
  const [person, setPersonInfo] = useState({
    name: "John",
    age: 27,
    enemys: ["Skynet", "T-800", "T-1000", "T-x"],
    father: "unknown",
  });
  const handlePersonInfo = () => {
    setPersonInfo(prevPerson => ({
        ...prevPerson, father: prevPerson.father === "kely Reese" ? "unknown" : "kely Reese",
  }));
};
  return (
    <div className="main">
      <ul>
        <li>Name: {person.name}</li>
        <li>Age: {person.age}</li>
        <li>Enemys: {person.enemys.join(", ")}</li>
        <li>Father: {person.father}</li>
      </ul>
      <button onClick={handlePersonInfo}>Update Person Info</button>
    </div>
  );
};
export default Character;

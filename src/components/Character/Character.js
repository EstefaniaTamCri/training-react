import "./Character.css";

const Lista = (props) => {
  return (
    <div className="lista">
      <ul>
        <li>
          <strong>name: </strong>{props.name}
        </li>
        <li>
          <strong>age: </strong>{props.age}
        </li>
        <li>
          <strong>role: </strong>{props.role}
        </li>
        <li>
          <strong>enemy: </strong>{props.enemy}
        </li>
      </ul>
    </div>
  );
};
export default Lista;

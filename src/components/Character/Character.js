import "./Character.css";
//se puede hacer de otra forma. En props se le pone el objeto.
//const Lista = ({ name, age, role, enemy }) => {} y en los li se pone {name} {age} {role} {enemy}. Si se hace con props, podemos desestructurar el objeto en la función, como por ejemplo: const { name, age, role, enemy } = props; y esto iria antes de return y en los li se pone {name} {age} {role} {enemy}. Ésta última en la preferente por Antonio, pero la expuesta aquí tambien esta bien. 
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

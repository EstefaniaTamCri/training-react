import "./Persons.css";

const Persons = (props) => {
  return (
    <div className="persons"> 
      <ul>
        <li>
          <strong>Name:</strong>
          {props.name}
        </li>
        <li>
          <strong>Age:</strong>
          {props.age}
        </li>
        <li>
          <strong>Role:</strong>
          {props.role}
        </li>
        <li>
          <strong>Job:</strong>
          {props.job}
        </li>
      </ul>
    </div>
  );
};
export default Persons;

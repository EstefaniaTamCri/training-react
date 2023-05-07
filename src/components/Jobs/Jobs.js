import "./Jobs.css";

const Jobs = (props) => {
  return (
    <div className="card">
      <ul>
        <li><strong>name:</strong>{props.name}</li>
        <li><strong>age:</strong>{props.age}</li>
        <li><strong>role:</strong>{props.role}</li>
        <li><strong>job:</strong>{props.job}</li>
      </ul>
    </div>
  );
};
export default Jobs;
import "./Member.css";

const Member = (props) => {
  return (
    <>
      {props.members.map((member) => (
        <li key={member.id}>
          <strong>Name:</strong> {member.first_name},{" "}<strong>Lastname: </strong>
          {member.last_name}
        </li>
      ))}
    </>
  );
};

export default Member;
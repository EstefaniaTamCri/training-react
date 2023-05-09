import Member from "./components/Members/Member";
import membersList from "./db/members.json";

const App = () => {
  const filteredList = membersList.filter(
    (member) => member.id.slice(-1) < 5 && member.first_name.startsWith("M")
  );
  return (
    <>
      <h1>Members</h1>
      <ul>
        <Member members={filteredList} />
      </ul>
    </>
  );
};

export default App;

import UserInfo from "./UserInfo.js";
import avengers from "../../db/users.json";
const Avengers = (props) => {
  return (
    <>
      {avengers.map((hero, index) => {
        return <UserInfo key={index} user={hero} />;
      })}
    </>
  );
};
export default Avengers;

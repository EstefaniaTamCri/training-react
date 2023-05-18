import { useContext } from "react";
import { MyContext } from "../../App";

const Level4 = () => {
  const context = useContext(MyContext);
  return (
    <>
      <h1>Level 4</h1>
    <div style={{
        fontSize: "2.5em",
        padding: "1em",
        border: "1px solid #123",
    }}>
      <p>{context.count}</p>
      <p>{context.saludo}</p>
      <p>{context.dia}</p>
    </div>
    </>
  );
};

export default Level4;

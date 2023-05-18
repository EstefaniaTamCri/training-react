import { useContext } from "react";
import { MyContext } from "../../App";


function ContextExample() {
  const data = useContext(MyContext);
  return <div>I’m a component. Data: {data.dia}</div>;
}
export default ContextExample;

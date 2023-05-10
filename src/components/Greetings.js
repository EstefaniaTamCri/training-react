import { useState, useEffect } from "react";

const Greetings = (props) => {
  const [info, setInfo] = useState(123);
  const message = `Hello ${props.name}`;
  const handleInfo = () => {
      setInfo(info + 1);
    };
      useEffect(() => {
          document.title = `Greetings to ${props.name}`;
        }, [props.name, info]);
        return <h1 onClick={handleInfo}>{message}</h1>;
};

export default Greetings;

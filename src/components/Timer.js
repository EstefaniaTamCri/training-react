import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime(time + 1);
    }, 1000);
  });
  return (
    <h1
      style={{
        backgroundColor: "var(--dark)",
        padding: "1rem",
        width: "100%",
        color: "var(--gray)",
        borderRadius:"0.5rem",
        textAlign: "center",
      }}
    >
      Rendering {time} times
    </h1>
  );
};
export default Timer;

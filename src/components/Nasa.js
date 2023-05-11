import { useState, useEffect } from "react";
import "./Nasa.css";

// const Nasa = () => {
//   const [time, setTime] = useState(10);
//   const counterClass = (time) => {
//     if (time < 3) {
//       return 'red';
//     } else if (time < 6) {
//       return 'yellow';
//     } else {
//       return 'blue';
//     }
    

//   };
//   useEffect(() => {
//     if (time > 0) {
//       setTimeout(() => {
//         setTime(time - 1);
//       }, 1000);
//     }
//   });

//   return (
//     <>
//       <h1>Rocket Launching - NASA Mars</h1>
//       <h2>Ignition Sequence Start</h2>
//       <div className={counterClass(time)}>{time}</div>;    </>
//   );
// };

function Nasa() {
    const [count, setCount] = useState(10);
    const [running, setRunning] = useState(false);
    
    useEffect(() => {
        if (count > 0) {
            setTimeout(() => {
                setCount(count - 1);
            }, 1000);
        } else {
            setRunning(true);
        }
    });
    
    return (
        <div>
        <h1>Rocket Launching - NASA Mars</h1>
        <h2>Ignition Sequence Start</h2>
        {running && <h3 className="pane red">All engines running. Lift Off!</h3>}
        <h3 className={count === 0 && "move"}>
          <span
            className={count <= 5 && count >= 3 ? "yellow" : count <= 2 && "red"}
            >
            {count}
          </span>
        </h3>
      </div>
    );
}
export default Nasa;
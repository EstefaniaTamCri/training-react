import {useState} from "react";

const ContadorBoton = () => {
    const [count, setCount] = useState(0);
    const handleCountInfo = () => {
        setCount(prevCount => prevCount + 1);
    };
    return (
        <button onClick={handleCountInfo}>Click me! {count}</button>
    )
};
export default ContadorBoton;
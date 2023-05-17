// import "./App.css";
// import ReacDOM from "react-dom";
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";

// const Title = (props) => {
//   return <h1> {props.info || "Hello World!!"}</h1>;
// };

const App = () => {
  return (
    <div>
      {/* return <h1>Hello World!</h1> opcion 1, esto iria donde Title
      {ReacDOM.createPortal(
        <Title info="Hello Full Stack" />,
        document.querySelector("#hello")
      )}
       lo de arriba se pone para renderizarlo en otra ventana diferente. 
       Y para hacerlo en un componente diferente, hacemos una funcion y ahi lo especificamos.
       Y de la ultima forma, lo hacemos por props 

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident,
        quos!
      </p> */}
      <TextInputWithFocusButton />
    </div>
  );
};

export default App;

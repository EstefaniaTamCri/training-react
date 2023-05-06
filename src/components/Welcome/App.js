import Wrapper from "./Box";

const Welcome = (props) => {
  return <h1>Hello, {`${props.name} ${props.lastname || ""}`}</h1>;
};

const App = () => {
  return (
    <div>
      <Wrapper>
        <Welcome name="Sarah" lastname="Connor" />
        <Welcome name="John" />
      </Wrapper>
      <Wrapper>
        <Welcome name="World" />
      </Wrapper>
    </div>
  );
};

export default App;

import { Outlet } from "react-router-dom";

const FormsWrapper = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffaaaa",
        padding: "1rem",
        borderRadius: "0.3rem",
      }}
    >
      <Outlet  context={"Hello World!"}/>
    </section>
  );
};

export default FormsWrapper;

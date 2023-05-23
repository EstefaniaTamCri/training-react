import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/Navigation/NavBar";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import NewAbout from "./views/NewAbout";
import NotFound from "./views/NotFound";
import AboutWrapper from "./components/wrappers/AboutWrapper";
import FormsWrapper from "./components/wrappers/FormsWrapper";
import Survey from "./views/Survey";
const App = () => {
  return (
    <>
      <header>
        <h1>React Router DOM</h1>
        <NavBar />
      </header>
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutWrapper />}>
              <Route index element={<About />} />{" "}
              {/* index es la ruta por defecto */}
              <Route path=":id" element={<About />} />
              <Route path="new" element={<NewAbout />} />
            </Route>
            <Route
              path="/products"
              element={
                <>
                  <h2>Products</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Adipisci, incidunt?
                  </p>
                </>
              }
            />
            <Route element={<FormsWrapper />}>
              <Route path="/contact" element={<Contact />} />
              <Route path="/survey" element={<Survey />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;

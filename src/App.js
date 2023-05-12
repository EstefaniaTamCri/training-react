import "./App.css"
import Search from "./components/UI/SearchForm"
import Movies from "./components/Movies/Movies"
import { useState, useEffect } from "react";
const App = () => {
  
  return (
    <>
   
    <header>
      <Search />
    </header>
    <main>
      <Movies />
    </main>
    </>
  );
};

export default App;
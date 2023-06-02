import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={About} />
          <Route exact path="/education" Component={Education} />
          <Route exact path="/skills" Component={Skills} />
          <Route exact path="/projects" Component={Projects} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

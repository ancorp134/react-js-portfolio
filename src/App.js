import "./App.css";
import NavBar from "../src/components/Navbar";
import { Route,Routes , BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Education from "./components/Education";
import Project from "./components/Project";
import Skill from "./components/Skill";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/education" element={<Education></Education>}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
          <Route path="/skill" element={<Skill></Skill>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

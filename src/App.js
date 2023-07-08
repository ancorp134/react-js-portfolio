import "./App.css";
import NavBar from "../src/components/Navbar";
import { Route,Routes , BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import ProjectDisplay from "./components/ProjectDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

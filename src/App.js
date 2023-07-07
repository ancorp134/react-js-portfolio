import "./App.css";
import NavBar from "../src/components/Navbar";
import { Route,Routes , BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

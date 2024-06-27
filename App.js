import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import {themeContext} from './Context'
import { useContext } from "react";
import Design from "./Components/Design";
import { Route,Routes } from "react-router";
import Dashboard from "./Dashboard";
import Projects from "./Components/Projects";
import Certification from "./Certification";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}
    >
<Routes>
  <Route exact path="/design" element={<Design/>}  ></Route>
  <Route exact path="/" element={<Dashboard/>}  ></Route>
  <Route exact path="/certificate" element={<Certification/>}  ></Route>

  <Route exact path="/projects" element={<Projects/>}  ></Route>

</Routes>
       
    </div>
  );
}

export default App;

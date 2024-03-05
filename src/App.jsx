import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import { ThemeProvider } from "./utils/ThemeContext";
const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skill />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
};

export default App;

{
  /*
  
      <CardItem translateY={5} translateX={-20} rotateZ={15}>
       <CardItem translateZ="100" rotateX={20} rotateZ={-10}>
        <CardItem translateZ="100" rotateX={-10} rotateZ={10}>
   */
}

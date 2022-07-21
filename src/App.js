import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState("light"); //WHether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar
        title="textUtils2"
        abouttext="ABOUT"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container">
        <TextForm heading=" Enter the text to analyze below" mode={mode} />
        <About />
      </div>
    </>
  );
}

export default App;

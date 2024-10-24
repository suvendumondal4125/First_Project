import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Arert";
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark mode hase been eneble", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode hase been eneble", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Latter"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm heading="Enter the text" mode={mode} />}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>

      <Alert alert={alert} />
      <About />
    </>
  );
}

export default App;

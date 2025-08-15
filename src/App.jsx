import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import About from "./components/About";
import { HashRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (text, alertType) => {
    setAlert({
      message: text,
      type: alertType,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      showAlert("Light mode has been enabled", "success");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      showAlert("Dark mode has been enabled", "success");

      document.body.style.backgroundColor = "#080423";
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={<TextArea showAlert={showAlert} mode={mode} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

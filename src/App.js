
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Arert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mode hase been eneble","success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode hase been eneble","success");

    } 
  }
  return (
    <>
      <Navbar title="Rural" about="About" mobile="Mobile" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      <Alert alert={alert}/>
      <div className="container">
        <TextForm  headding="Enter the text" mode={mode} />
        <About/>
      </div>
    </>
  );
}

export default App;

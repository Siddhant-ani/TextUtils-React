
import React , { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  // Switch,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const[mode , setMode] = useState('light'); // whether dark mode is enabled or not.
  const[alert , setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }


  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled" , "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled" , "success")
    }
   
  }
  return (
    <> 
   <Router>
        <Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode}/>
        <Alert alert = {alert}/>
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            path="/" element={
             <TextForm showAlert={showAlert} heading="Enter the text to Analyse below" mode={mode} />}
            />
        </Routes>

        </div>

   </Router>

    </>

  );
}

export default App;

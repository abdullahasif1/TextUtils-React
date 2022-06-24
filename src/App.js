import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
//import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  
  const [mode, setMode] = useState('light');   
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title= 'Textutils is Amzaing Mode';
      }, 2000);
      setInterval(() => {
        document.title= 'Install Textutils Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  
  return (

    ///JSX Fragment
  <>   
      {/*<Router>*/}
      <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
       


     {/*<Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to moniter changes" mode={mode}/>}/>
  </Routes>*/}
      <TextForm showAlert={showAlert} heading="Enter the text to moniter changes" mode={mode}/>

      {/* <About/>  */}
      </div>
      {/*</Router>*/}
       
 
  </>
  );
  
}

export default App;

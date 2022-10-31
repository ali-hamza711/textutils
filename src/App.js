// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react'
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#212140';
        showAlert("Dark mode has been enabled", "success");
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been enabled", "success");
      }
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
    <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar/> */}
        <Alerts alert={alert}/>
        <div className="container my-3"  >
        
            <Routes>
            <Route path='/about' element={<About/>} />
                <Route path="/" element={<TextForm heading="Enter The Text to Analyze" mode={mode} showAlert={showAlert}/>} />
                
              </Routes>
        </div>
      </Router>
        
      
    </>
  );
}

export default App;

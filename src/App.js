// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alerts from './components/Alerts';

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
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
          {/* <Navbar/> */}
          <Alerts alert={alert}/>
          <div className="container my-3">
    
                <TextForm heading="Enter The Text to Analyze" mode={mode} showAlert={showAlert}/>
          </div>
      </>
  );
}

export default App;

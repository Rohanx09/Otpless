import { useEffect } from 'react';
import './App.css'
import React from 'react';

function App() {
  
  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
    };
  }, []);
  
  return (
    <>
      {/* <-- OTPLESS Login UI --> */}
  <div id="otpless-login-page"></div>

    </>
  )
}

export default App

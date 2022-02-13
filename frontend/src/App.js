import React, { useEffect, useState } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';


function App() {

  return (
    <div className="App">
      <Homepage/>
      <Chatpage />
    </div>
  );
}

export default App;

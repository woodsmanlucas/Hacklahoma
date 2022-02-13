import React, { useEffect, useState } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Chatpage from './Pages/Chatpage';
<<<<<<< HEAD
import io from 'socket.io-client';

import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';
=======
>>>>>>> a8f2cb87ada3b15b1507805701493f695738c031

function App() {

  return (
<<<<<<< HEAD
<>
<Homepage>
  
</Homepage>
</>
=======
    <div className="App">
      <Chatpage />
    </div>
>>>>>>> a8f2cb87ada3b15b1507805701493f695738c031
  );
}

export default App;

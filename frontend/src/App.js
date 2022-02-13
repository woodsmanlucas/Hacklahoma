import React, { useEffect, useState } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Chatpage from './Pages/Chatpage';
import io from 'socket.io-client';

import Homepage from './Pages/Homepage';
import AboutPage from './Pages/AboutPage';

function App() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
<>
<Homepage>
  
</Homepage>
</>
  );
}

export default App;

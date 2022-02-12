
import React, { useEffect, useState } from 'react';
import './App.css';
import Chatpage from './Pages/Chatpage';
import io from 'socket.io-client'

function App() {

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(`http://${window.location.hostname}:3000`);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  return (
    <div className="App">
      {socket ? (
      <Chatpage />
      ) : (
        <h1>Not Connected</h1>
      )}
    </div>
  );
}

export default App;

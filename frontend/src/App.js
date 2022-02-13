import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';

function App() {

  return (
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/chat/:id" element={<Chatpage/>} />
    </Routes>
</BrowserRouter>
  );
}

export default App;

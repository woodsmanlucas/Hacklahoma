import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Chatpage from './Pages/Chatpage';
import Homepage from './Pages/Homepage';
import Welcome from './Pages/WelcomePage';
import Solar from './Pages/SolarSystem';
import Shuttle from './Pages/SpaceShuttle';
import Mars from './Pages/Mars';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="chat" element={<Chatpage />} />
      <Route path="welcome" element={<Welcome />} />
      <Route path="solar" element={<Solar />} />
      <Route path="shuttle" element={<Shuttle />} />
      <Route path="mars" element={<Mars />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

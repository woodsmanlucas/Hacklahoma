import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Chatpage from '../Pages/Chatpage';
import Homepage from '../Pages/Homepage';
import Welcome from '../Pages/WelcomePage';
import Solar from '../Pages/SolarSystem';
import Shuttle from '../Pages/SpaceShuttle';
import Mars from '../Pages/Mars';

export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="chat" element={<Chatpage />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="solar" element={<Solar />} />
                <Route path="shuttle" element={<Shuttle />} />
                <Route path="mars" element={<Mars />} />
            </Routes>
        </BrowserRouter>
    )
}

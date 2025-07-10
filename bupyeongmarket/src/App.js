import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


import MainPage from './pages/MainPage/MainPage';
import MarketPage from './pages/MarketPage/MarketPage';
import EventPage from './pages/EventPage/EventPage';
import NearPage from './pages/NearPage/NearPage';
import NoticePage from './pages/NoticePage/NoticePage';

function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
					<Route path="/" element={<MainPage />}></Route>
					<Route path="/market" element={<MarketPage />}></Route>
					<Route path="/event" element={<EventPage />}></Route>
					<Route path="/near" element={<NearPage />}></Route>
					<Route path="/notice" element={<NoticePage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

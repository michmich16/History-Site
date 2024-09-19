import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { MainLayout } from './layouts/MainLayout';
import { DatePage } from './pages/DatePage/DatePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { TodayPage } from './pages/TodayPage/TodayPage';
import Light from './assets/images/icons8-light-50.png';
import Upward from './assets/images/icons8-upward-arrow-50.png';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);
  const [showUpwardButton, setShowUpwardButton] = useState(false);

  const toggleLightMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };


  const handleScroll = () => {
    if (window.scrollY > 1200) { 
      setShowUpwardButton(true);
    } else {
      setShowUpwardButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={isLightMode ? 'light-mode' : ''}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<MainLayout />}>
            <Route index element={<TodayPage />} />
            <Route path={`/about`} element={<AboutPage />} />
            <Route path={`/date`} element={<DatePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <button className='lightMode' onClick={toggleLightMode}>
        <img src={Light} alt="Light-mode" />
      </button>
      {showUpwardButton && (
        <button className='upWard' onClick={scrollToTop}>
          <img src={Upward} alt="BackToTop" />
        </button>
      )}
    </div>
  );
}

export default App;

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import { MainLayout } from './layouts/MainLayout';
import { DatePage } from './pages/DatePage/DatePage';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { TodayPage } from './pages/TodayPage/TodayPage';
import Light from './assets/images/icons8-light-50.png';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  // Toggle the light mode by applying specific CSS class
  const toggleLightMode = () => {
    setIsLightMode(prevMode => !prevMode);
  };

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

      {/* Light mode toggle button */}
      <button onClick={toggleLightMode}>
        <img src={Light} alt="Light-mode" />
      </button>
    </div>
  );
}

export default App;
